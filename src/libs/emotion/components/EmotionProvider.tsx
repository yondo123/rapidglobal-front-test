'use client';

import { Global, ThemeProvider } from '@emotion/react';
import theme from '../theme';
import globalStyle from '../resetStyle';

interface Props {
  children: React.ReactNode;
}

export const EmotionProvider = ({ children }: Props) => (
  <>
    <Global styles={globalStyle} />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);
