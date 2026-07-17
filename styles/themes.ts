import { type DefaultTheme } from "styled-components";
import defaultTheme from "styles/defaultTheme";
import lightTheme from "styles/lightTheme";

const themes = { defaultTheme, lightTheme };

export type ThemeName = keyof typeof themes;

export default themes as Record<ThemeName, DefaultTheme>;
