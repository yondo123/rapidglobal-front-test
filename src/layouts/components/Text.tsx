'use client';

import { createBaseFontStyle } from '../styles/typography';
import { getColorFromColorScheme } from '../utils/colorHelpers';
import type { ColorScheme, Size, FontBold, FontAlign, FontDecoration, FontStyle } from '../types';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  as?: 'p' | 'span';
  size?: Size;
  colorScheme?: ColorScheme;
  bold?: FontBold;
  align?: FontAlign;
  decoration?: FontDecoration;
  fontStyle?: FontStyle;
}
export const Text = ({ children, colorScheme = 'font', as = 'p', ...restProps }: TextProps) => {
  const {
    size = 'md',
    bold = 500,
    align = 'start',
    decoration = 'none',
    fontStyle = 'normal',
    ...textProps
  } = restProps;
  const Component = as;
  const color = getColorFromColorScheme(colorScheme);
  const baseFontStyle = createBaseFontStyle(size, color, bold, decoration, align, fontStyle);

  return (
    <Component role="paragraph" css={baseFontStyle} {...textProps}>
      {children}
    </Component>
  );
};
