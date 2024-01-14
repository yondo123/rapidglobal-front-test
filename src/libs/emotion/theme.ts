import { Theme } from '@emotion/react';
import { Colors } from '@layouts/colors';
import type { ColorScheme } from '@layouts/types';

type ColorValue = (typeof Colors)[keyof typeof Colors];

export interface ThemeType {
  colors: Record<ColorScheme, ColorValue>;
}

const theme: Theme = Object.freeze({
  colors: Colors
});

export interface ThemeColors {
  theme: Record<keyof typeof theme.colors, string>;
}

export default theme;
