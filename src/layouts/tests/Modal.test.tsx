import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { EmotionThemeProviderMock } from '@mocks/contexts/EmotionProviderMock';
import { Modal } from '../components/Modal';

interface ModalProps {
  onClose?: () => void;
  isOpen: boolean;
}
const renderModal = ({ onClose, isOpen }: ModalProps) => {
  render(
    <EmotionThemeProviderMock>
      <Modal onClose={onClose} isOpen={isOpen}>
        <h2>Modal Contents</h2>
      </Modal>
    </EmotionThemeProviderMock>
  );
};

describe('Modal 컴포넌트 테스트', () => {
  it('Modal이 열렸을 때, 외부 영역을 클릭하면 "onClose" 이벤트가 호출된다.', async () => {
    const onClose = jest.fn();
    renderModal({ isOpen: true, onClose });
    const $overlay = screen.getByRole('none');
    await userEvent.click($overlay);
    expect(onClose).toHaveBeenCalled();
  });

  it('Modal이 열렸을 때, "닫기" 버튼을 클릭하면 "onClose" 이벤트가 호출된다.', async () => {
    const onClose = jest.fn();
    renderModal({ isOpen: true, onClose });
    const $closeButton = screen.getByRole('button');
    await userEvent.click($closeButton);
    expect(onClose).toHaveBeenCalled();
  });
});
