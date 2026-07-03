import { dirname, join, normalize } from "path";

export const resolveDocumentPath = (
  linkPath: string,
  currentDocumentUrl?: string
): string => {
  if (
    !linkPath ||
    linkPath.startsWith("mailto:") ||
    /^https?:/i.test(linkPath)
  ) {
    return linkPath;
  }

  const withoutOrigin = linkPath.replace(window.location.origin, "");
  let path = decodeURI(withoutOrigin);

  if (path.startsWith("/Users/")) return path;

  const fileName = path.replace(/^\//, "").replace(/^\.\//, "");

  if (currentDocumentUrl?.startsWith("/Users/")) {
    return normalize(join(dirname(currentDocumentUrl), fileName)).replace(
      /\\/g,
      "/"
    );
  }

  return normalize(`/Users/Public/Documents/${fileName}`).replace(/\\/g, "/");
};
