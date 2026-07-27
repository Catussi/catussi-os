import { useTheme } from "styled-components";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import SidebarButton, {
  type SidebarButtons,
} from "components/system/StartMenu/Sidebar/SidebarButton";
import {
  AllApps,
  Documents,
  Pictures,
  Power,
  SideMenu,
  Videos,
} from "components/system/StartMenu/Sidebar/SidebarIcons";
import StyledSidebar from "components/system/StartMenu/Sidebar/StyledSidebar";
import { useFileSystem } from "contexts/fileSystem";
import { useProcesses } from "contexts/process";
import { useSession } from "contexts/session";
import { HOME, TASKBAR_HEIGHT } from "utils/constants";
import useUi from "hooks/useUi";
import { haltEvent, viewHeight } from "utils/functions";

type SidebarGroupProps = {
  sidebarButtons: SidebarButtons;
};

const SidebarGroup: FC<SidebarGroupProps> = ({ sidebarButtons }) => (
  <ol>
    {sidebarButtons.map((button) => (
      <SidebarButton key={button.name} {...button} />
    ))}
  </ol>
);

type SidebarProps = {
  height?: string;
};

const Sidebar: FC<SidebarProps> = ({ height }) => {
  const { rootFs } = useFileSystem();
  const { open } = useProcesses();
  const { setHaltSession } = useSession();
  const ui = useUi();
  const [collapsed, setCollapsed] = useState(true);
  const expandTimer = useRef(0);
  const sidebarRef = useRef<HTMLElement>(null);
  const clearTimer = (): void => {
    if (expandTimer.current) {
      clearTimeout(expandTimer.current);
      expandTimer.current = 0;
    }
  };
  const topButtons: SidebarButtons = useMemo(
    () => [
      {
        heading: true,
        icon: <SideMenu />,
        name: ui.start,
        ...(collapsed && { tooltip: ui.expand }),
      },
      {
        active: true,
        icon: <AllApps />,
        name: ui.allApps,
        ...(collapsed && { tooltip: ui.allApps }),
      },
    ],
    [collapsed, ui]
  );
  const { sizes } = useTheme();
  const vh = viewHeight();
  const buttonAreaCount = useMemo(
    () => Math.floor((vh - TASKBAR_HEIGHT) / sizes.startMenu.sideBar.width),
    [sizes.startMenu.sideBar.width, vh]
  );
  const bottomButtons = useMemo(
    () =>
      [
        buttonAreaCount > 3
          ? {
              action: () =>
                open(
                  "FileExplorer",
                  { url: `${HOME}/Documents` },
                  "/System/Icons/documents.webp"
                ),
              icon: <Documents />,
              name: ui.documents,
              ...(collapsed && { tooltip: ui.documents }),
            }
          : undefined,
        buttonAreaCount > 4
          ? {
              action: () =>
                open(
                  "FileExplorer",
                  { url: `${HOME}/Pictures` },
                  "/System/Icons/pictures.webp"
                ),
              icon: <Pictures />,
              name: ui.pictures,
              ...(collapsed && { tooltip: ui.pictures }),
            }
          : undefined,
        buttonAreaCount > 5
          ? {
              action: () =>
                open(
                  "FileExplorer",
                  { url: `${HOME}/Videos` },
                  "/System/Icons/videos.webp"
                ),
              icon: <Videos />,
              name: ui.videos,
              ...(collapsed && { tooltip: ui.videos }),
            }
          : undefined,
        {
          action: () => {
            setHaltSession(true);

            import("contexts/fileSystem/functions").then(({ resetStorage }) =>
              resetStorage(rootFs).finally(() => window.location.reload())
            );
          },
          icon: <Power />,
          name: ui.power,
          tooltip: ui.powerTooltip,
        },
      ].filter(Boolean) as SidebarButtons,
    [buttonAreaCount, collapsed, open, rootFs, setHaltSession, ui]
  );

  useEffect(() => clearTimer, []);

  return (
    <StyledSidebar
      ref={sidebarRef}
      className={collapsed ? "collapsed" : undefined}
      onClick={({ target }) => {
        clearTimer();

        if (
          target instanceof HTMLElement &&
          ((target === sidebarRef.current && collapsed) ||
            (sidebarRef.current?.contains(target) &&
              target.textContent === ui.start))
        ) {
          setCollapsed((collapsedState) => !collapsedState);
        }
      }}
      onContextMenu={haltEvent}
      onMouseEnter={() => {
        expandTimer.current = window.setTimeout(() => setCollapsed(false), 700);
      }}
      onMouseLeave={() => {
        clearTimer();
        setCollapsed(true);
      }}
      style={{ height }}
    >
      <SidebarGroup sidebarButtons={topButtons} />
      <SidebarGroup sidebarButtons={bottomButtons} />
    </StyledSidebar>
  );
};

export default memo(Sidebar);
