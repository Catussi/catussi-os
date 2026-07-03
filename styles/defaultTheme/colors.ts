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
    active: "hsla(174, 55%, 32%, 75%)",
    activeForeground: "hsla(174, 50%, 42%, 75%)",
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
    background: "linear-gradient(90deg, #0f766e 0%, #0d9488 50%, #14b8a6 100%)",
    backgroundHover: "rgba(255, 255, 255, 0.12)",
    backgroundInactive: "linear-gradient(90deg, #334155 0%, #475569 100%)",
    border: "#0d9488",
    borderInactive: "#64748b",
    buttonInactive: "rgba(255, 255, 255, 0.55)",
    closeHover: "rgb(232, 17, 35)",
    document: {
      accent:
        "linear-gradient(90deg, #0d9488 0%, #14b8a6 35%, #38bdf8 70%, #818cf8 100%)",
      background: "#f1f5f9",
      backgroundHover: "rgba(13, 148, 136, 0.1)",
      backgroundInactive: "#e2e8f0",
      border: "#0f766e",
      borderInactive: "#cbd5e1",
      buttonInactive: "#64748b",
      text: "#0f172a",
      textInactive: "#64748b",
    },
    text: "rgb(255, 255, 255)",
    textInactive: "rgb(203, 213, 225)",
  },
  window: {
    background: "#1e293b",
    document: {
      outline: "rgba(13, 148, 136, 0.22)",
      outlineInactive: "rgba(148, 163, 184, 0.35)",
      shadow:
        "0 16px 48px rgba(15, 23, 42, 0.14), 0 0 0 1px rgba(13, 148, 136, 0.1)",
      shadowInactive: "0 10px 28px rgba(15, 23, 42, 0.1)",
    },
    outline: "rgba(13, 148, 136, 0.35)",
    outlineInactive: "rgba(148, 163, 184, 0.35)",
    shadow:
      "0 12px 40px rgba(15, 23, 42, 0.28), 0 0 0 1px rgba(13, 148, 136, 0.12)",
    shadowInactive: "0 8px 24px rgba(15, 23, 42, 0.18)",
  },
};

export default colors;
