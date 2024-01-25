import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { AppRouterContextProviderMock } from '@mocks/contexts/NextAppRouterMock';
import { EmotionThemeProviderMock } from '@mocks/contexts/EmotionProviderMock';
import { ProductListPagination } from '../components/ProductListPagination';
import { PRODUCT_TABLE_PAGE_LENGTH } from '../constants';

const PAGINATION_LIST = [
  { currentPage: 1 },
  { currentPage: 5 },
  { currentPage: 10 },
  { currentPage: 20 },
  { currentPage: 100 }
];

const renderComponent = ({ push, hasNext, currentPage }: any) => {
  render(
    <AppRouterContextProviderMock router={{ push }}>
      <EmotionThemeProviderMock>
        <ProductListPagination currentPage={currentPage} hasNext={hasNext} />
      </EmotionThemeProviderMock>
    </AppRouterContextProviderMock>
  );
};

describe('상품 페이지네이션 컴포넌트 테스트', () => {
  it.each(PAGINATION_LIST)(
    `현재 페이지($currentPage)를 기준으로 ${PRODUCT_TABLE_PAGE_LENGTH} 개의 페이지 번호가 출력된다. `,
    ({ currentPage }) => {
      renderComponent({ push: jest.fn(), hasNext: true, currentPage });
      const $pageLink = screen.getAllByRole('link');
      expect($pageLink).toHaveLength(PRODUCT_TABLE_PAGE_LENGTH);
    }
  );

  it('"이전" 버튼을 클릭하면 이전 페이지로 이동한다.', async () => {
    const push = jest.fn();
    renderComponent({ push, hasNext: true, currentPage: 10 });
    const $prevButton = screen.getByRole('button', { name: '이전' });
    await userEvent.click($prevButton);
    expect(push).toHaveBeenCalledTimes(1);
  });

  it('"다음" 버튼을 클릭하면 이전 페이지로 이동한다.', async () => {
    const push = jest.fn();
    renderComponent({ push, hasNext: true, currentPage: 10 });
    const $nextButton = screen.getByRole('button', { name: '다음' });
    await userEvent.click($nextButton);
    expect(push).toHaveBeenCalledTimes(1);
  });

  it('마지막 페이지라면 "다음" 버튼이 비활성화된다.', async () => {
    const push = jest.fn();
    renderComponent({ push, hasNext: false, currentPage: 10 });
    const $nextButton = screen.getByRole('button', { name: '다음' });
    await userEvent.click($nextButton);
    expect(push).toHaveBeenCalledTimes(0);
  });
});
