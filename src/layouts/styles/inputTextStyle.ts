import { css } from '@emotion/react';
import { getColorFromColorScheme } from '../utils/colorHelpers';
import { createFontSizeStyle } from './typography';
import type { FormVariants, ColorScheme, Size } from '../types';

export const baseStyle = css`
  margin: 0;
  padding: 0 8px;
  width: fit-content;
  height: 28px;
  background-color: transparent;
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  :focus {
    outline: none;
  }
`;

export const createInputSizeStyle = (size: Size) => {
  const fontSizeStyle = createFontSizeStyle(size);
  switch (size) {
    case 'sm':
      return css`
        ${fontSizeStyle}
        height: 24px;
      `;
    case 'lg':
      return css`
        ${fontSizeStyle}
        height: 40px;
      `;
    default:
      return css`
        ${fontSizeStyle}
        height: 32px;
      `;
  }
};

export const createInputVariantStyle = (variant: FormVariants, colorScheme: ColorScheme = 'primary') => {
  const color = getColorFromColorScheme(colorScheme);
  if (variant === 'outlined') {
    return css`
      border: 2px solid ${color};
      border-radius: 4px;
    `;
  }
  return css`
    border: none;
    border-bottom: 2px solid ${color};
  `;
};
