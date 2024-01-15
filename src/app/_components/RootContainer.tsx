'use client';

import styled from '@emotion/styled';

export const RootContainer = styled.main`
  margin: 0 auto;
  padding: 0 16px;
  height: 100dvh;
  max-width: 1280px;
  background-color: ${({ theme }) => theme.colors.white};
`;
