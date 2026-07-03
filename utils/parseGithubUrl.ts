export type GithubLocation = {
  branch?: string;
  owner: string;
  path?: string;
  repo?: string;
};

export const DEFAULT_GITHUB_URL = "https://github.com/Catussi";

export const parseGithubUrl = (url?: string): GithubLocation | undefined => {
  if (!url) return undefined;

  try {
    const parsed = new URL(url.replace(/^http:/i, "https://"));

    if (parsed.hostname.replace(/^www\./, "") !== "github.com") {
      return undefined;
    }

    const parts = parsed.pathname.split("/").filter(Boolean);

    if (!parts.length) return undefined;

    const [owner, repo, type, branch, ...rest] = parts;

    if (!owner) return undefined;

    if (type === "blob" || type === "tree") {
      return {
        branch: branch || "main",
        owner,
        path: rest.join("/") || undefined,
        repo,
      };
    }

    return {
      owner,
      repo: repo || undefined,
    };
  } catch {
    return undefined;
  }
};

export const githubUrl = ({
  branch,
  owner,
  path,
  repo,
}: GithubLocation): string => {
  if (!repo) return `https://github.com/${owner}`;

  if (path) {
    return `https://github.com/${owner}/${repo}/blob/${branch || "main"}/${path}`;
  }

  return `https://github.com/${owner}/${repo}`;
};
