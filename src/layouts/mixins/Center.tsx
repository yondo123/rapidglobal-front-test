'use client';

import { ReactNode } from 'react';
import { Stack } from '../components/Stack';

export const Center = ({ children }: { children: ReactNode }) => (
  <Stack justify="center" align="center" style={{ height: '100dvh' }}>
    {children}
  </Stack>
);
