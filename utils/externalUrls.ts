const EMBED_BLOCKED_HOSTS = new Set([
  "github.com",
  "www.github.com",
  "linkedin.com",
  "www.linkedin.com",
]);

export const isEmbedBlockedUrl = (url?: string): boolean => {
  if (!url) return false;

  try {
    const { hostname } = new URL(url);

    return EMBED_BLOCKED_HOSTS.has(hostname);
  } catch {
    return false;
  }
};
