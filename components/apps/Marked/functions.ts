import processDirectory from "contexts/process/directory";
import { loadFiles } from "utils/functions";

export const MARKED_LIBS = processDirectory.Marked.libs ?? [];

export const isMarkedReady = (): boolean =>
  typeof window.marked?.parse === "function" &&
  typeof window.DOMPurify?.sanitize === "function";

export const ensureMarkedLibs = async (libs: string[] = []): Promise<boolean> => {
  const files = libs.length > 0 ? libs : MARKED_LIBS;

  if (files.length === 0) return false;

  const load = async (force?: boolean): Promise<void> => {
    await loadFiles(files, undefined, force);
  };

  try {
    await load();

    if (!isMarkedReady()) {
      await load(true);
    }
  } catch {
    try {
      await load(true);
    } catch {
      return false;
    }
  }

  return isMarkedReady();
};
