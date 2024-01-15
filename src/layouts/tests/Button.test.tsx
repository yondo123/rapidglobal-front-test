import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Button } from '@layouts/components';
import { EmotionThemeProviderMock } from '@mocks/contexts/EmotionProviderMock';
import { MOCK_BUTTONS_SIZE } from '@mocks/constants/LayoutsMocks';

const renderButton = (props?: any) =>
  render(
    <EmotionThemeProviderMock>
      <Button {...props}>Button</Button>
    </EmotionThemeProviderMock>
  );
describe('Button UI 컴포넌트 테스트', () => {
  it('Button을 클릭하면 클릭 이벤트가 실행된다.', async () => {
    const handleClick = jest.fn();
    renderButton({ onClick: handleClick });
    const $button = screen.getByRole('button');
    await userEvent.click($button);
    expect(handleClick).toHaveBeenCalled();
  });

  it('비활성화된 Button은 클릭을 수행하지 않는다. ', async () => {
    const handleClick = jest.fn();
    renderButton({ onClick: handleClick, disabled: true });
    const $button = screen.getByRole('button');
    await userEvent.click($button);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it.each(MOCK_BUTTONS_SIZE)('Button은 크기에 따라 다른 높이를 갖는다. ($size)', ({ size, height }) => {
    renderButton({ size });
    const $button = screen.getByRole('button');
    expect($button).toHaveStyle({ height });
  });
});
