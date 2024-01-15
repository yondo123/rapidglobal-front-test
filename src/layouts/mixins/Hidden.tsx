'use client';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

const hiddenStyle = css`
  visibility: hidden;
  height: 0;
  width: 0;
  overflow: hidden;
  position: absolute;
  left: -9999px;
`;

export const Hidden = styled.div`
  ${hiddenStyle}
`;
export const HiddenLabel = styled.label`
  ${hiddenStyle}
`;
