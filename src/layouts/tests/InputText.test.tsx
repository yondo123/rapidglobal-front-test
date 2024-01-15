import { render, screen } from '@testing-library/react';
import { EmotionThemeProviderMock } from '@mocks/contexts/EmotionProviderMock';
import { InputText } from '@layouts/components';

const renderInputText = (props?: any) => {
  render(
    <EmotionThemeProviderMock>
      <InputText {...props} />
    </EmotionThemeProviderMock>
  );
};

describe('InputText UI 컴포넌트 테스트', () => {
  it('InputText의 초기 값은 빈 문자열이다.', () => {
    renderInputText();
    const $inputText = screen.getByRole('textbox');
    expect($inputText).toBeInTheDocument();
    expect($inputText).toHaveValue('');
  });

  it('"outlined" 형태의 InputText는 4개의 외곽선을 갖는다.', () => {
    renderInputText({ variant: 'outlined' });
    const $inputText = screen.getByRole('textbox');
    expect($inputText).toHaveStyle({
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: '4px'
    });
  });

  it('"flushed" 형태의 InputText는 한개의 외곽선을 갖는다.', () => {
    renderInputText({ variant: 'flushed' });
    const $inputText = screen.getByRole('textbox');
    expect($inputText).toHaveStyle({
      borderBottomStyle: 'solid',
      borderBottomWidth: '2px'
    });
  });

  it('htmlSize를 통해 input size 속성을 부여할 수 있다.', () => {
    renderInputText({ htmlSize: 40 });
    const $inputText = screen.getByRole('textbox');
    expect($inputText).toHaveAttribute('size', '40');
  });
});
