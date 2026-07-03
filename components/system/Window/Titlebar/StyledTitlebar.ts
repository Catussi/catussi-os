import styled, { type DefaultTheme } from "styled-components";
import { type WindowChrome } from "contexts/process/types";

type StyledTitlebarProps = {
  $foreground: boolean;
  $windowChrome?: WindowChrome;
};

const getTitleBarBorder = ({
  $foreground,
  $windowChrome = "app",
  theme,
}: StyledTitlebarProps & { theme: DefaultTheme }): string => {
  if ($windowChrome === "document") {
    return `1px solid ${theme.colors.titleBar.document.borderInactive}`;
  }

  return `1px solid ${
    $foreground
      ? theme.colors.titleBar.border
      : theme.colors.titleBar.borderInactive
  }`;
};

const StyledTitlebar = styled.header<StyledTitlebarProps>`
  background: ${({ $foreground, $windowChrome = "app", theme }) => {
    if ($windowChrome === "document") {
      const { background, backgroundInactive } = theme.colors.titleBar.document;

      return $foreground ? background : backgroundInactive;
    }

    return $foreground
      ? theme.colors.titleBar.background
      : theme.colors.titleBar.backgroundInactive;
  }};
  border-bottom: ${getTitleBarBorder};
  display: flex;
  height: ${({ $windowChrome = "app", theme }) =>
    $windowChrome === "document"
      ? theme.sizes.titleBar.documentHeight
      : theme.sizes.titleBar.height}px;
  position: relative;
  top: 0;
  z-index: 2;

  > button {
    align-items: center;
    color: ${({ $foreground, $windowChrome = "app", theme }) => {
      if ($windowChrome === "document") {
        const { text, textInactive } = theme.colors.titleBar.document;

        return $foreground ? text : textInactive;
      }

      return $foreground
        ? theme.colors.titleBar.text
        : theme.colors.titleBar.textInactive;
    }};
    display: flex;
    flex-grow: 1;
    font-size: ${({ theme }) => theme.sizes.titleBar.fontSize};
    font-weight: ${({ $windowChrome = "app" }) =>
      $windowChrome === "document" ? 500 : 400};
    letter-spacing: ${({ $windowChrome = "app" }) =>
      $windowChrome === "document" ? "0.01em" : "normal"};
    min-width: 0;

    figure {
      align-items: center;
      display: flex;
      margin-left: 10px;
      min-width: inherit;
      pointer-events: none;
      position: relative;
      top: -1px;

      picture {
        height: ${({ theme }) => theme.sizes.titleBar.iconSize};
        margin-right: ${({ theme }) => theme.sizes.titleBar.iconMarginRight};
        width: ${({ theme }) => theme.sizes.titleBar.iconSize};
      }

      img,
      picture {
        pointer-events: all;
      }

      figcaption {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  nav {
    display: flex;

    button {
      border-left: ${getTitleBarBorder};
      box-sizing: content-box;
      display: flex;
      place-content: center;
      place-items: center;
      width: ${({ theme }) => theme.sizes.titleBar.buttonWidth};

      svg {
        fill: ${({ $foreground, $windowChrome = "app", theme }) => {
          if ($windowChrome === "document") {
            const { text, buttonInactive } = theme.colors.titleBar.document;

            return $foreground ? text : buttonInactive;
          }

          return $foreground
            ? theme.colors.titleBar.text
            : theme.colors.titleBar.buttonInactive;
        }};
        margin: 0 1px 2px 0;
        width: ${({ theme }) => theme.sizes.titleBar.buttonIconWidth};
      }

      &.minimize {
        svg {
          margin-bottom: 1px;
          margin-right: 0;
        }
      }

      &:hover {
        background-color: ${({ $windowChrome = "app", theme }) =>
          $windowChrome === "document"
            ? theme.colors.titleBar.document.backgroundHover
            : theme.colors.titleBar.backgroundHover};

        svg {
          fill: ${({ $windowChrome = "app", theme }) =>
            $windowChrome === "document"
              ? theme.colors.titleBar.document.text
              : theme.colors.titleBar.text};
        }

        &.close {
          background-color: ${({ theme }) => theme.colors.titleBar.closeHover};
          transition: background-color 0.25s ease;

          svg {
            fill: ${({ theme }) => theme.colors.titleBar.text};
          }
        }
      }

      &:active {
        background-color: ${({ $windowChrome = "app" }) =>
          $windowChrome === "document"
            ? "rgba(13, 148, 136, 0.16)"
            : "rgb(51 51 51)"};

        &.close {
          background-color: rgb(139 10 20);
        }
      }

      &:disabled {
        svg {
          fill: ${({ $foreground, $windowChrome = "app" }) => {
            if ($windowChrome === "document") {
              return $foreground ? "#cbd5e1" : "#d1d5db";
            }

            return $foreground ? "rgb(50, 50, 50)" : "rgb(60, 60, 60)";
          }};
        }

        &:hover {
          background-color: inherit;
        }
      }
    }
  }
`;

export default StyledTitlebar;
