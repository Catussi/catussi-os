const EMBED_BLOCKED_HOSTS = new Set([
  "github.com",
  "www.github.com",
  "linkedin.com",
  "www.linkedin.com",
]);

export const GITHUB_BROWSER_PAGE =
  "/Program Files/Browser/profiles/GitHub.html";
export const LINKEDIN_BROWSER_PAGE =
  "/Program Files/Browser/profiles/LinkedIn.html";

export const isEmbedBlockedUrl = (url?: string): boolean => {
  if (!url) return false;

  try {
    const { hostname } = new URL(url);

    return EMBED_BLOCKED_HOSTS.has(hostname);
  } catch {
    return false;
  }
};

export const resolveEmbedBlockedBrowserUrl = (
  url?: string
): string | undefined => {
  if (!url || !isEmbedBlockedUrl(url)) return undefined;

  try {
    const parsed = new URL(url.replace(/^http:/i, "https://"));
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "linkedin.com") {
      return LINKEDIN_BROWSER_PAGE;
    }

    if (host === "github.com") {
      const parts = parsed.pathname.split("/").filter(Boolean);

      if (!parts.length) return GITHUB_BROWSER_PAGE;

      const [owner, repo, type, branch, ...rest] = parts;

      if (type === "blob" || type === "tree") {
        return `${GITHUB_BROWSER_PAGE}#/${owner}/${repo}/${branch || "main"}/${rest.join("/")}`;
      }

      if (repo) return `${GITHUB_BROWSER_PAGE}#/${owner}/${repo}`;

      return `${GITHUB_BROWSER_PAGE}#/${owner}`;
    }
  } catch {
    return undefined;
  }

  return undefined;
};

export const embedBlockedBrowserTitle = (browserUrl: string): string => {
  if (browserUrl.includes("LinkedIn")) return "LinkedIn";

  if (browserUrl.includes("GitHub")) {
    const hash = browserUrl.split("#")[1];

    if (hash) {
      const parts = hash.replace(/^\//, "").split("/").filter(Boolean);

      if (parts.length >= 2) return `${parts[0]}/${parts[1]}`;
    }

    return "GitHub @Catussi";
  }

  return "Navegador";
};

export const isBrowserEmbedPage = (url?: string): boolean => {
  if (!url) return false;

  const base = url.split("#")[0].split("?")[0];

  return (
    base === GITHUB_BROWSER_PAGE ||
    base === LINKEDIN_BROWSER_PAGE ||
    base.endsWith("/Browser/profiles/GitHub.html") ||
    base.endsWith("/Browser/profiles/LinkedIn.html")
  );
};
