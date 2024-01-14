/* @jsxImportSource react */

import { EmotionProvider } from '@libs/emotion/components/EmotionProvider';

export const metadata = {
  title: 'RapidGlobal Product Management',
  description: '손 쉬운 제품 관리'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ko">
    <EmotionProvider>
      <body>{children}</body>
    </EmotionProvider>
  </html>
);

export default RootLayout;
