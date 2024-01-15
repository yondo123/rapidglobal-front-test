import { Stack } from '@layouts/components';
import { EmotionThemeProviderMock } from '@mocks/contexts/EmotionProviderMock';
import { render, screen } from '@testing-library/react';

const renderStack = (props?: any) =>
  render(
    <EmotionThemeProviderMock>
      <Stack {...props}>
        <div>Stack Item</div>
        <div>Stack Item</div>
      </Stack>
    </EmotionThemeProviderMock>
  );

describe('Stack UI 컴포넌트 테스트', () => {
  it('Stack의 기본 방향은 수직으로 렌더링된다.', () => {
    renderStack();
    const $stack = screen.getByRole('list');
    expect($stack).toBeInTheDocument();
    expect($stack).toHaveStyle({
      flexDirection: 'column'
    });
  });

  it('"horizontal" 속성을 갖는 Stack은 수평으로 렌더링된다.', () => {
    renderStack({ direction: 'horizontal' });
    const $stack = screen.getByRole('list');
    expect($stack).toBeInTheDocument();
    expect($stack).toHaveStyle({
      flexDirection: 'row'
    });
  });
});
