import { m as motion } from "motion/react";
import styled, { type DefaultTheme } from "styled-components";
import StyledLoading from "components/system/Apps/StyledLoading";
import { type WindowChrome } from "contexts/process/types";

type StyledWindowProps = {
  $backgroundBlur?: string;
  $backgroundColor?: string;
  $isForeground: boolean;
  $windowChrome?: WindowChrome;
};

const titleBarHeight = (
  { $windowChrome = "app" }: StyledWindowProps,
  theme: DefaultTheme
): number =>
  $windowChrome === "document"
    ? theme.sizes.titleBar.documentHeight
    : theme.sizes.titleBar.height;

const StyledWindow = styled(motion.section)<StyledWindowProps>`
  background-color: ${({ $backgroundColor, theme }) =>
    $backgroundColor || theme.colors.window.background};
  border-radius: ${({ theme }) => theme.sizes.window.borderRadius}px;
  box-shadow: ${({ $isForeground, $windowChrome = "app", theme }) => {
    if ($windowChrome === "document") {
      const { shadow, shadowInactive } = theme.colors.window.document;

      return $isForeground ? shadow : shadowInactive;
    }

    return $isForeground
      ? theme.colors.window.shadow
      : theme.colors.window.shadowInactive;
  }};
  contain: strict;
  height: 100%;
  outline: ${({ $isForeground, $windowChrome = "app", theme }) => {
    const outlineWidth = theme.sizes.window.outline;
    let outlineColor = $isForeground
      ? theme.colors.window.outline
      : theme.colors.window.outlineInactive;

    if ($windowChrome === "document") {
      outlineColor = $isForeground
        ? theme.colors.window.document.outline
        : theme.colors.window.document.outlineInactive;
    }

    return `${outlineWidth} solid ${outlineColor}`;
  }};
  overflow: hidden;
  position: absolute;
  width: 100%;

  header + * {
    height: ${(props) => `calc(100% - ${titleBarHeight(props, props.theme)}px)`};
  }

  ${StyledLoading} {
    backdrop-filter: ${({ $backgroundBlur }) =>
      $backgroundBlur ? `blur(${$backgroundBlur})` : undefined};
  }
`;

export default StyledWindow;
