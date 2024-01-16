import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { getColorFromColorScheme, getInvertColor, convertHexToRgba } from '../utils/colorHelpers';
import type { ColorScheme, TableVariants } from '../types';

export const TableContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  padding: 16px;
  border: 1px solid ${getColorFromColorScheme('border')};
  border-radius: 8px;
`;

const baseTableStyle = css`
  border-collapse: collapse;
  border-spacing: 0;
  background-color: transparent;
  caption {
    margin-top: 8px;
    caption-side: bottom;
    display: table-caption;
  }
  thead {
    height: 36px;
    text-align: left;
    color: ${getColorFromColorScheme('font')};
  }
  th,
  td {
    padding: 8px 16px;
    height: 40px;
  }
`;

export const createTableTextAlignStyle = (align: 'left' | 'center' | 'right') => css`
  * {
    text-align: ${align};
  }
`;

export const createTableStyle = (color: ColorScheme, variant: TableVariants) => {
  if (variant === 'striped') {
    return css`
      ${baseTableStyle};
      width: 100%;
      max-width: 100%;
      thead {
        th {
          border-bottom: 1px solid ${getColorFromColorScheme('border')};
        }
      }
      tr:nth-child(even) {
        background-color: ${getColorFromColorScheme(color)};
        color: ${getInvertColor(getColorFromColorScheme(color))};
      }
    `;
  }
  return css`
    ${baseTableStyle};
    width: 100%;
    max-width: 100%;
    thead {
      color: ${getColorFromColorScheme(color)};
      border-bottom: 1px solid ${getColorFromColorScheme(color)};
    }
    tbody tr:hover {
      background-color: ${convertHexToRgba(getColorFromColorScheme(color), 0.3)};
    }
    tr:not(:last-child) {
      th,
      td {
        border-bottom: solid 1px ${getColorFromColorScheme(color)};
      }
    }
  `;
};
