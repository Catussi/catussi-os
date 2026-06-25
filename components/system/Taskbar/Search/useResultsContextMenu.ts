import { dirname } from "path";
import { useMemo } from "react";
import { OpenFolder } from "components/system/Taskbar/Search/Icons";
import { useMenu } from "contexts/menu";
import { type ContextMenuCapture } from "contexts/menu/useMenuContextState";
import { useProcesses } from "contexts/process";
import { ui } from "utils/i18n";

const useResultsContextMenu = (url: string): ContextMenuCapture => {
  const { contextMenu } = useMenu();
  const { open } = useProcesses();

  return useMemo(
    () =>
      contextMenu?.(() => [
        {
          SvgIcon: OpenFolder,
          action: () => open("FileExplorer", { url: dirname(url) }, ""),
          label: ui.openFileLocation,
        },
      ]),
    [contextMenu, open, url]
  );
};

export default useResultsContextMenu;
