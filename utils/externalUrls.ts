const EMBED_BLOCKED_HOSTS = new Set([
  "github.com",
  "www.github.com",
  "linkedin.com",
  "www.linkedin.com",
]);

export type EmbedBlockedApp = {
  processId: "GitHub" | "LinkedIn";
  url: string;
};

export const isEmbedBlockedUrl = (url?: string): boolean => {
  if (!url) return false;

  try {
    const { hostname } = new URL(url);

    return EMBED_BLOCKED_HOSTS.has(hostname);
  } catch {
    return false;
  }
};

export const resolveEmbedBlockedApp = (
  url?: string
): EmbedBlockedApp | undefined => {
  if (!url || !isEmbedBlockedUrl(url)) return undefined;

  try {
    const parsed = new URL(url.replace(/^http:/i, "https://"));
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "github.com") {
      return { processId: "GitHub", url: parsed.href };
    }

    if (host === "linkedin.com") {
      return { processId: "LinkedIn", url: parsed.href };
    }
  } catch {
    return undefined;
  }

  return undefined;
};

export const embedBlockedAppTitle = (app: EmbedBlockedApp): string => {
  if (app.processId === "GitHub") {
    try {
      const { pathname } = new URL(app.url);
      const parts = pathname.split("/").filter(Boolean);

      if (parts.length >= 2) return `${parts[0]}/${parts[1]}`;

      return "GitHub @Catussi";
    } catch {
      return "GitHub";
    }
  }

  return "LinkedIn";
};
