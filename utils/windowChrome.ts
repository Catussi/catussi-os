import { type WindowChrome } from "contexts/process/types";

export const resolveWindowChrome = (
  processId: string,
  windowChrome?: WindowChrome
): WindowChrome => {
  if (windowChrome) return windowChrome;

  if (processId === "Marked" || processId === "PDF") return "document";

  return "app";
};
