import { StyleSheetManager, ThemeProvider } from "styled-components";
import { memo, useEffect } from "react";
import { type FeatureBundle, LazyMotion } from "motion/react";
import { useSession } from "contexts/session";
import GlobalStyle from "styles/GlobalStyle";
import themes from "styles/themes";
import { DEFAULT_THEME } from "utils/constants";

const motionFeatures = async (): Promise<FeatureBundle> =>
  (
    await import(
      /* webpackMode: "eager" */
      "styles/motionFeatures"
    )
  ).default;

const StyledApp: FC = ({ children }) => {
  const { themeName } = useSession();
  const activeTheme = themes[themeName] || themes[DEFAULT_THEME];

  useEffect(() => {
    document.documentElement.dataset.theme =
      activeTheme.name === "Dark" ? "dark" : "light";
  }, [activeTheme.name]);

  return (
    <StyleSheetManager enableVendorPrefixes>
      <ThemeProvider theme={activeTheme}>
        <GlobalStyle />
        <LazyMotion features={motionFeatures} strict>
          {children}
        </LazyMotion>
      </ThemeProvider>
    </StyleSheetManager>
  );
};

export default memo(StyledApp);
