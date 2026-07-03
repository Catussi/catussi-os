import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  fetchContents,
  fetchRawFile,
  fetchReadme,
  fetchRepo,
  fetchUser,
  fetchUserRepos,
  type GithubContent,
  type GithubRepo,
  type GithubUser,
} from "components/apps/GitHub/api";
import StyledGitHub from "components/apps/GitHub/StyledGitHub";
import { type ComponentProcessProps } from "components/system/Apps/RenderComponent";
import useTitle from "components/system/Window/useTitle";
import { useProcesses } from "contexts/process";
import { useLinkHandler } from "hooks/useLinkHandler";
import {
  DEFAULT_GITHUB_URL,
  githubUrl,
  parseGithubUrl,
  type GithubLocation,
} from "utils/parseGithubUrl";
import { loadFiles } from "utils/functions";

type RepoTab = "readme" | "files";

declare global {
  interface Window {
    DOMPurify: { sanitize: (text: string) => string };
    marked: {
      parse: (
        markdownString: string,
        options: { headerIds: boolean; mangle: boolean }
      ) => string;
    };
  }
}

const formatBytes = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const GitHub: FC<ComponentProcessProps> = ({ id }) => {
  const {
    processes: { [id]: process },
    url: changeUrl,
  } = useProcesses();
  const { libs = [], url = DEFAULT_GITHUB_URL } = process || {};
  const { prependFileToTitle } = useTitle(id);
  const openLink = useLinkHandler();
  const location = useMemo(() => parseGithubUrl(url), [url]);
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [repo, setRepo] = useState<GithubRepo | null>(null);
  const [readme, setReadme] = useState<string | null>(null);
  const [contents, setContents] = useState<GithubContent[]>([]);
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [tab, setTab] = useState<RepoTab>("readme");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [markedReady, setMarkedReady] = useState(false);
  const readmeRef = useRef<HTMLDivElement | null>(null);

  const navigate = useCallback(
    (next: GithubLocation) => changeUrl(id, githubUrl(next)),
    [changeUrl, id]
  );

  useEffect(() => {
    if (!libs.length) return;

    loadFiles(libs).then(() => setMarkedReady(true));
  }, [libs]);

  useEffect(() => {
    if (!location) return;

    const load = async (): Promise<void> => {
      setLoading(true);
      setError("");
      setFileContent(null);

      try {
        if (!location.repo) {
          const [userData, repoData] = await Promise.all([
            fetchUser(location.owner),
            fetchUserRepos(location.owner),
          ]);

          setUser(userData);
          setRepos(repoData);
          setRepo(null);
          setReadme(null);
          setContents([]);
          prependFileToTitle(`${userData.login} · GitHub`);
          return;
        }

        const repoData = await fetchRepo(location.owner, location.repo);

        setRepo(repoData);
        setUser(null);
        setRepos([]);
        prependFileToTitle(`${location.owner}/${location.repo}`);

        if (location.path) {
          const result = await fetchContents(
            location.owner,
            location.repo,
            location.path
          );

          if (!Array.isArray(result) && result.type === "file") {
            if (result.size > 500000) {
              setFileContent(
                `Archivo demasiado grande para mostrar (${formatBytes(result.size)}).`
              );
            } else if (result.download_url) {
              setFileContent(await fetchRawFile(result.download_url));
            }

            setContents([]);
            setReadme(null);
            return;
          }

          if (Array.isArray(result)) {
            setContents(result);
            setReadme(null);
            setFileContent(null);
            setTab("files");
          }

          return;
        }

        const [readmeText, rootContents] = await Promise.all([
          fetchReadme(location.owner, location.repo),
          fetchContents(location.owner, location.repo),
        ]);

        setReadme(readmeText);
        setContents(
          Array.isArray(rootContents) ? rootContents : [rootContents]
        );
        setTab("readme");
      } catch {
        setError("No se pudo cargar desde GitHub. Intenta de nuevo en un momento.");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [location, prependFileToTitle]);

  const readmeHtml = useMemo(() => {
    if (!readme || !markedReady) return "";

    return window.DOMPurify.sanitize(
      window.marked.parse(readme, { headerIds: false, mangle: false })
    );
  }, [markedReady, readme]);

  const breadcrumbs = useMemo(() => {
    if (!location) return [];

    const crumbs: { label: string; loc: GithubLocation }[] = [
      { label: "github.com", loc: { owner: location.owner } },
    ];

    if (location.repo) {
      crumbs.push({
        label: location.repo,
        loc: { owner: location.owner, repo: location.repo },
      });
    }

    if (location.path) {
      location.path.split("/").reduce((path, segment) => {
        const nextPath = path ? `${path}/${segment}` : segment;

        crumbs.push({
          label: segment,
          loc: {
            branch: location.branch,
            owner: location.owner,
            path: nextPath,
            repo: location.repo,
          },
        });

        return nextPath;
      }, "");
    }

    return crumbs;
  }, [location]);

  const openExternalLink = useCallback(
    (event: React.MouseEvent, href: string) => {
      openLink(event.nativeEvent, href, href);
    },
    [openLink]
  );

  useEffect(() => {
    const container = readmeRef.current;

    if (!container) return;

    container.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (event) => {
        const href = link.getAttribute("href");

        if (!href) return;

        openLink(event, href, href);
      });
    });
  }, [openLink, readmeHtml]);

  if (!location) {
    return (
      <StyledGitHub>
        <main className="error">URL de GitHub no válida.</main>
      </StyledGitHub>
    );
  }

  return (
    <StyledGitHub>
      <header>
        {breadcrumbs.map((crumb, index) => (
          <span key={crumb.label + index}>
            {index > 0 && <span className="sep"> / </span>}
            <button
              type="button"
              onClick={() => navigate(crumb.loc)}
              disabled={index === breadcrumbs.length - 1}
            >
              {crumb.label}
            </button>
          </span>
        ))}
      </header>
      <main>
        {loading && <div className="loading">Cargando…</div>}
        {!loading && error && <div className="error">{error}</div>}
        {!loading && !error && user && (
          <div className="profile">
            <aside>
              <img
                alt={user.login}
                className="avatar"
                src={user.avatar_url}
                width={260}
                height={260}
              />
              <h1>{user.name || user.login}</h1>
              <p className="login">@{user.login}</p>
              {user.bio && <p className="bio">{user.bio}</p>}
              <div className="meta">
                {user.location && <span>{user.location}</span>}
                {user.blog && (
                  <a
                    href={
                      user.blog.startsWith("http")
                        ? user.blog
                        : `https://${user.blog}`
                    }
                    onClick={(event) =>
                      openExternalLink(event, user.blog || "")
                    }
                  >
                    {user.blog.replace(/^https?:\/\//, "")}
                  </a>
                )}
              </div>
              <div className="stats">
                <span>
                  <strong>{user.public_repos}</strong> repos
                </span>
                <span>
                  <strong>{user.followers}</strong> seguidores
                </span>
                <span>
                  <strong>{user.following}</strong> siguiendo
                </span>
              </div>
            </aside>
            <section className="repos">
              <h2>Repositorios</h2>
              <div className="repo-list">
                {repos.map((entry) => (
                  <article className="repo-card" key={entry.full_name}>
                    <button
                      className="name"
                      type="button"
                      onClick={() =>
                        navigate({
                          owner: location.owner,
                          repo: entry.name,
                        })
                      }
                    >
                      {entry.name}
                    </button>
                    {entry.description && (
                      <p className="desc">{entry.description}</p>
                    )}
                    <div className="stats">
                      {entry.language && <span>{entry.language}</span>}
                      <span>★ {entry.stargazers_count}</span>
                      {entry.homepage && (
                        <a
                          className="demo-link"
                          href={entry.homepage}
                          onClick={(event) =>
                            openExternalLink(event, entry.homepage || "")
                          }
                        >
                          Demo
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        )}
        {!loading && !error && repo && !location.path && (
          <>
            <div className="repo-header">
              <h1>{repo.full_name}</h1>
              {repo.description && <p className="desc">{repo.description}</p>}
              {repo.homepage && (
                <a
                  className="demo-link"
                  href={repo.homepage}
                  onClick={(event) =>
                    openExternalLink(event, repo.homepage || "")
                  }
                >
                  Demo en vivo →
                </a>
              )}
            </div>
            <nav className="tabs">
              <button
                className={tab === "readme" ? "active" : ""}
                type="button"
                onClick={() => setTab("readme")}
              >
                README
              </button>
              <button
                className={tab === "files" ? "active" : ""}
                type="button"
                onClick={() => setTab("files")}
              >
                Archivos
              </button>
            </nav>
            {tab === "readme" && (
              <div className="readme">
                {readmeHtml ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: readmeHtml }}
                    ref={readmeRef}
                  />
                ) : (
                  <p className="desc">Este repositorio no tiene README.</p>
                )}
              </div>
            )}
            {tab === "files" && (
              <div className="file-list">
                {contents.map((entry) => (
                  <button
                    className="file-row"
                    key={entry.sha}
                    type="button"
                    onClick={() =>
                      navigate({
                        branch: repo.default_branch,
                        owner: location.owner,
                        path: entry.path,
                        repo: location.repo,
                      })
                    }
                  >
                    <span className="icon">{entry.type === "dir" ? "📁" : "📄"}</span>
                    <span>{entry.name}</span>
                    {entry.type === "file" && (
                      <span className="size">{formatBytes(entry.size)}</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
        {!loading && !error && repo && location.path && fileContent !== null && (
          <div className="file-view">
            <p className="path">{location.path}</p>
            <pre>{fileContent}</pre>
          </div>
        )}
        {!loading &&
          !error &&
          repo &&
          location.path &&
          fileContent === null &&
          contents.length > 0 && (
            <div className="file-list">
              {contents.map((entry) => (
                <button
                  className="file-row"
                  key={entry.sha}
                  type="button"
                  onClick={() =>
                    navigate({
                      branch: repo.default_branch,
                      owner: location.owner,
                      path: entry.path,
                      repo: location.repo,
                    })
                  }
                >
                  <span className="icon">{entry.type === "dir" ? "📁" : "📄"}</span>
                  <span>{entry.name}</span>
                  {entry.type === "file" && (
                    <span className="size">{formatBytes(entry.size)}</span>
                  )}
                </button>
              ))}
            </div>
          )}
      </main>
    </StyledGitHub>
  );
};

export default memo(GitHub);
