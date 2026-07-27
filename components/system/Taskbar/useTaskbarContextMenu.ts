import { useMemo } from "react";
import { useMenu } from "contexts/menu";
import {
  type ContextMenuCapture,
  type MenuItem,
} from "contexts/menu/useMenuContextState";
import { useProcesses } from "contexts/process";
import { useSession } from "contexts/session";
import { useViewport } from "contexts/viewport";
import { useProcessesRef } from "hooks/useProcessesRef";
import { AI_TITLE, MENU_SEPERATOR } from "utils/constants";
import useUi from "hooks/useUi";
import { toggleShowDesktop } from "utils/functions";
import { useWebGPUCheck } from "hooks/useWebGPUCheck";
import { useWindowAI } from "hooks/useWindowAI";

const useTaskbarContextMenu = (onStartButton = false): ContextMenuCapture => {
  const { contextMenu } = useMenu();
  const { minimize, open } = useProcesses();
  const { aiEnabled, setAiEnabled, stackOrder } = useSession();
  const processesRef = useProcessesRef();
  const { fullscreenElement, toggleFullscreen } = useViewport();
  const hasWebGPU = useWebGPUCheck();
  const hasWindowAI = useWindowAI();
  const ui = useUi();

  return useMemo(
    () =>
      contextMenu?.(() => {
        const processArray = Object.entries(processesRef.current);
        const allWindowsMinimized =
          processArray.length > 0 &&
          !processArray.some(([, { minimized }]) => !minimized);
        const toggleLabel = allWindowsMinimized
          ? ui.showOpenWindows
          : ui.showDesktop;
        const menuItems: MenuItem[] = [
          {
            action: () =>
              toggleShowDesktop(processesRef.current, stackOrder, minimize),
            label: onStartButton ? ui.desktop : toggleLabel,
          },
        ];

        if (onStartButton) {
          menuItems.unshift(
            {
              action: () => open("Terminal"),
              label: "Terminal",
            },
            MENU_SEPERATOR,
            {
              action: () => open("FileExplorer"),
              label: "Explorador de archivos",
            },
            {
              action: () => open("Run"),
              label: "Ejecutar",
            },
            MENU_SEPERATOR
          );
        } else {
          menuItems.unshift(
            {
              action: () => toggleFullscreen(),
              label:
                fullscreenElement === document.documentElement
                  ? ui.exitFullscreen
                  : ui.enterFullscreen,
            },
            MENU_SEPERATOR,
            ...(hasWebGPU && !hasWindowAI
              ? [
                  {
                    action: () => setAiEnabled(!aiEnabled),
                    checked: aiEnabled,
                    label: ui.showAiButton(AI_TITLE),
                  },
                  MENU_SEPERATOR,
                ]
              : [])
          );
        }

        return menuItems;
      }),
    [
      aiEnabled,
      contextMenu,
      fullscreenElement,
      hasWebGPU,
      hasWindowAI,
      minimize,
      onStartButton,
      open,
      processesRef,
      setAiEnabled,
      stackOrder,
      toggleFullscreen,
      ui,
    ]
  );
};

export default useTaskbarContextMenu;
