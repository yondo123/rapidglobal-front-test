import { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';

export const useModal = () => {
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error('ModalContext is not provided');
  }
  return {
    isOpen: modalContext?.isOpen,
    onCloseModal: modalContext?.onCloseModal,
    onOpenModal: modalContext?.onOpenModal
  };
};
