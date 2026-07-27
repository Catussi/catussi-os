import { useMemo } from "react";
import { useMenu } from "contexts/menu";
import { type ContextMenuCapture } from "contexts/menu/useMenuContextState";
import { useSession } from "contexts/session";
import useUi from "hooks/useUi";

const useClockContextMenu = (
  toggleCalendar: (showCalendar?: boolean) => void
): ContextMenuCapture => {
  const { contextMenu } = useMenu();
  const { clockSource, setClockSource } = useSession();
  const ui = useUi();

  return useMemo(
    () =>
      contextMenu?.(() => {
        toggleCalendar(false);

        const isLocal = clockSource === "local";

        return [
          {
            action: () => setClockSource("local"),
            label: ui.localTime,
            toggle: isLocal,
          },
          {
            action: () => setClockSource("ntp"),
            label: ui.serverTime,
            toggle: !isLocal,
          },
        ];
      }),
    [clockSource, contextMenu, setClockSource, toggleCalendar, ui]
  );
};

export default useClockContextMenu;
