import { basename, extname, join } from "path";
import { useCallback } from "react";
import { useFileSystem } from "contexts/fileSystem";
import { useProcesses } from "contexts/process";
import processDirectory from "contexts/process/directory";
import { useSession } from "contexts/session";
import { useProcessesRef } from "hooks/useProcessesRef";
import {
  DESKTOP_PATH,
  FOLDER_BACK_ICON,
  PROCESS_DELIMITER,
} from "utils/constants";
import { isYouTubeUrl } from "utils/functions";
import {
  resolveEmbedBlockedBrowserUrl,
  embedBlockedBrowserTitle,
} from "utils/externalUrls";
import { localizePortfolioDocumentUrl } from "utils/portfolioLocale";

type UseFile = (pid: string, icon?: string) => Promise<void>;

const useFile = (url: string, path: string): UseFile => {
  const { locale, setForegroundId, updateRecentFiles } = useSession();
  const { createPath, updateFolder } = useFileSystem();
  const { minimize, open, url: setUrl } = useProcesses();
  const processesRef = useProcessesRef();

  return useCallback(
    async (pid: string, icon?: string) => {
      const {
        preferProcessIcon,
        singleton,
        icon: processIcon,
      } = processDirectory[pid] || {};
      const activePid = singleton
        ? Object.keys(processesRef.current).find(
            (id) => id === pid || id.startsWith(`${pid}${PROCESS_DELIMITER}`)
          )
        : "";
      let runUrl = localizePortfolioDocumentUrl(url, locale);
      let runPid = pid;

      if (url.startsWith("ipfs://")) {
        const { getIpfsFileName, getIpfsResource } = await import("utils/ipfs");
        const ipfsData = await getIpfsResource(url);

        runUrl = join(
          DESKTOP_PATH,
          await createPath(
            await getIpfsFileName(url, ipfsData),
            DESKTOP_PATH,
            ipfsData
          )
        );

        updateFolder(DESKTOP_PATH, basename(runUrl));
      }

      if (isYouTubeUrl(runUrl)) {
        const browserUrl = resolveEmbedBlockedBrowserUrl(runUrl);

        if (browserUrl) {
          runPid = "Browser";
          runUrl = browserUrl;
        }
      }

      if (activePid) {
        setUrl(activePid, runUrl);
        if (processesRef.current[activePid].minimized) minimize(activePid);
        setForegroundId(activePid);
      } else {
        open(
          runPid || "OpenWith",
          runPid === "Browser" && isYouTubeUrl(url)
            ? { initialTitle: embedBlockedBrowserTitle(runUrl), url: runUrl }
            : { url: runUrl },
          singleton || icon === FOLDER_BACK_ICON || preferProcessIcon
            ? processIcon
            : icon
        );

        const recentUrl = runUrl || path;

        if (recentUrl && runPid) {
          updateRecentFiles(
            recentUrl,
            runPid,
            isYouTubeUrl(recentUrl) ? basename(path, extname(path)) : undefined
          );
        }
      }
    },
    [
      createPath,
      locale,
      minimize,
      open,
      path,
      processesRef,
      setForegroundId,
      setUrl,
      updateFolder,
      updateRecentFiles,
      url,
    ]
  );
};

export default useFile;
