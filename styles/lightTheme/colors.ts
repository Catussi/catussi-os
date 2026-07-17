import darkColors from "styles/defaultTheme/colors";

const colors: typeof darkColors = {
  background: "#f3f3f3",
  fileEntry: {
    background: "hsla(207, 70%, 48%, 12%)",
    backgroundFocused: "hsla(207, 75%, 45%, 20%)",
    backgroundFocusedHover: "hsla(207, 80%, 42%, 24%)",
    border: "hsla(207, 50%, 40%, 20%)",
    borderFocused: "hsla(207, 65%, 40%, 32%)",
    borderFocusedHover: "hsla(207, 75%, 38%, 42%)",
    text: "#171717",
    textShadow: `
      0 0 1px rgba(0, 0, 0, 75%),
      0 0 2px rgba(0, 0, 0, 50%),

      0 1px 1px rgba(0, 0, 0, 75%),
      0 1px 2px rgba(0, 0, 0, 50%),

      0 2px 1px rgba(0, 0, 0, 75%),
      0 2px 2px rgba(0, 0, 0, 50%)`,
  },
  highlight: "hsla(207, 90%, 42%, 90%)",
  progress: "hsla(113, 60%, 38%, 90%)",
  progressBackground: "hsla(104, 20%, 60%, 60%)",
  progressBarRgb: "rgb(6, 145, 31)",
  selectionHighlight: "hsla(207, 90%, 42%, 90%)",
  selectionHighlightBackground: "hsla(207, 90%, 42%, 18%)",
  taskbar: {
    active: "hsla(0, 0%, 82%, 88%)",
    activeForeground: "hsla(0, 0%, 72%, 88%)",
    ai: darkColors.taskbar.ai,
    background: "hsla(0, 0%, 96%, 88%)",
    button: {
      color: "#171717",
    },
    foreground: "hsla(0, 0%, 84%, 88%)",
    foregroundHover: "hsla(0, 0%, 76%, 88%)",
    foregroundProgress: "hsla(104, 35%, 55%, 35%)",
    hover: "hsla(0, 0%, 88%, 88%)",
    peekBorder: "hsla(0, 0%, 45%, 35%)",
  },
  text: "rgba(23, 23, 23, 92%)",
  titleBar: {
    background: "rgb(250, 250, 250)",
    backgroundHover: "rgb(235, 235, 235)",
    backgroundInactive: "rgb(225, 225, 225)",
    buttonInactive: "rgb(105, 105, 105)",
    closeHover: "rgb(232, 17, 35)",
    text: "rgb(24, 24, 24)",
    textInactive: "rgb(105, 105, 105)",
  },
  window: {
    background: "#f5f5f5",
    outline: "hsla(0, 0%, 45%, 55%)",
    outlineInactive: "hsla(0, 0%, 60%, 80%)",
    shadow: "0 0 16px 0 rgba(0, 0, 0, 25%)",
    shadowInactive: "0 0 10px 0 rgba(0, 0, 0, 18%)",
  },
};

export default colors;
