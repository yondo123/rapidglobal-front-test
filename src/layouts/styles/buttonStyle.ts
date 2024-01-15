import { css } from '@emotion/react';
import { getInvertColor, convertHexToRgba } from '../utils/colorHelpers';
import type { ButtonVariant, Size } from '../types';

export const createBaseStyle = (borderColor: string, width?: string) => css`
  margin: 0;
  padding: 0 16px;
  width: ${width || 'fit-content'};
  min-width: 128px;
  border: 1px solid ${borderColor};
  border-radius: 32px;
  background-color: transparent;
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const createButtonSizeStyle = (size: Size) => {
  switch (size) {
    case 'sm':
      return css`
        min-width: 64px;
        height: 32px;
      `;
    case 'lg':
      return css`
        padding: 0 24px;
        min-width: 128px;
        height: 48px;
      `;
    case 'xl':
      return css`
        padding: 0 24px;
        min-width: 128px;
        height: 56px;
      `;
    case '2xl':
      return css`
        padding: 0 48px;
        min-width: 256px;
        height: 64px;
      `;
    default:
      return css`
        min-width: 128px;
        height: 40px;
      `;
  }
};

export const createVariantStyle = (variant: ButtonVariant, color: string) => {
  switch (variant) {
    case 'ghost':
      return css`
        min-width: 24px;
        width: auto;
        height: auto;
        padding: 0;
        background-color: transparent;
        border-style: none;
      `;

    case 'outline':
      return css`
        background-color: '#ffffff';
        border: 1px solid ${color};
        p {
          color: ${color};
        }
        :hover {
          background-color: ${convertHexToRgba(color, 0.1)};
        }
      `;

    default:
      return css`
        background-color: ${color};
        p {
          color: ${getInvertColor(color)};
        }
      `;
  }
};
