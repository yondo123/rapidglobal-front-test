/* @jsxImportSource react */

import { EmotionProvider } from '@libs/emotion/components/EmotionProvider';
import { QueryProvider } from '@libs/react-query/QueryProvider';
import { RootContainer } from './_components/RootContainer';

export const metadata = {
  title: '래피드업',
  description: '여러분의 해외구매대행 사업의 부스터를 달아줄 상품 등록 종합 솔루션 래피드업 입니다.'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ko">
    <EmotionProvider>
      <body>
        <QueryProvider>
          <RootContainer>{children}</RootContainer>
        </QueryProvider>
      </body>
    </EmotionProvider>
  </html>
);

export default RootLayout;
