const colors = {
  background: "#000",
  fileEntry: {
    background: "hsla(207, 30%, 72%, 25%)",
    backgroundFocused: "hsla(207, 60%, 72%, 35%)",
    backgroundFocusedHover: "hsla(207, 90%, 72%, 30%)",
    border: "hsla(207, 30%, 72%, 30%)",
    borderFocused: "hsla(207, 60%, 72%, 35%)",
    borderFocusedHover: "hsla(207, 90%, 72%, 40%)",
    text: "#FFF",
    textShadow: `
      0 0 1px rgba(0, 0, 0, 75%),
      0 0 2px rgba(0, 0, 0, 50%),

      0 1px 1px rgba(0, 0, 0, 75%),
      0 1px 2px rgba(0, 0, 0, 50%),

      0 2px 1px rgba(0, 0, 0, 75%),
      0 2px 2px rgba(0, 0, 0, 50%)`,
  },
  highlight: "hsla(207, 100%, 72%, 90%)",
  progress: "hsla(113, 78%, 56%, 90%)",
  progressBackground: "hsla(104, 22%, 45%, 70%)",
  progressBarRgb: "rgb(6, 176, 37)",
  selectionHighlight: "hsla(207, 100%, 45%, 90%)",
  selectionHighlightBackground: "hsla(207, 100%, 45%, 30%)",
  taskbar: {
    active: "hsla(220, 12%, 28%, 78%)",
    activeForeground: "hsla(220, 10%, 42%, 78%)",
    ai: {
      balanced: ["rgb(112, 203, 255)", "rgb(40, 112, 234)", "rgb(0, 95, 184)"],
      creative: [
        "rgb(215, 167, 187)",
        "rgb(145, 72, 135)",
        "rgb(139, 37, 126)",
      ],
      precise: ["rgb(167, 224, 235)", "rgb(0, 104, 128)", "rgb(0, 83, 102)"],
    },
    background: "hsla(0, 0%, 10%, 70%)",
    button: {
      color: "#FFF",
    },
    foreground: "hsla(0, 0%, 35%, 70%)",
    foregroundHover: "hsla(0, 0%, 45%, 70%)",
    foregroundProgress: "hsla(104, 22%, 45%, 30%)",
    hover: "hsla(0, 0%, 25%, 70%)",
    peekBorder: "hsla(0, 0%, 50%, 50%)",
  },
  text: "rgba(255, 255, 255, 90%)",
  titleBar: {
    background: "#232323",
    backgroundHover: "#383838",
    backgroundInactive: "#4d4d4d",
    border: "#141414",
    borderInactive: "#3a3a3a",
    buttonInactive: "rgba(255, 255, 255, 0.48)",
    closeHover: "rgb(232, 17, 35)",
    document: {
      accent: "#3d4f5f",
      background: "#fafafa",
      backgroundHover: "#efefef",
      backgroundInactive: "#ececea",
      border: "#d6d6d4",
      borderInactive: "#d0d0ce",
      buttonInactive: "#7a7a7a",
      text: "#1c1c1c",
      textInactive: "#6b6b6b",
    },
    text: "rgb(255, 255, 255)",
    textInactive: "rgb(190, 190, 190)",
  },
  window: {
    background: "#6e6e6e",
    document: {
      outline: "rgba(0, 0, 0, 0.14)",
      outlineInactive: "rgba(0, 0, 0, 0.09)",
      shadow:
        "0 10px 32px rgba(0, 0, 0, 0.14), 0 1px 0 rgba(255, 255, 255, 0.65) inset",
      shadowInactive: "0 4px 16px rgba(0, 0, 0, 0.1)",
    },
    outline: "rgba(0, 0, 0, 0.28)",
    outlineInactive: "rgba(0, 0, 0, 0.18)",
    shadow: "0 12px 36px rgba(0, 0, 0, 0.28)",
    shadowInactive: "0 6px 18px rgba(0, 0, 0, 0.2)",
  },
};

export default colors;
