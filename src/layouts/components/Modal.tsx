'use client';

import { useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';
import { Button, Stack } from '@layouts/components';
import { useOutsideClick } from '@shared/hooks/useOutsideClick';

interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
  isOpen: boolean;
}

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: modalRef,
    handler() {
      onClose?.();
    }
  });

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <ModalContainer role="dialog">
      <ModalContent ref={modalRef}>
        <Stack justify="between" style={{ height: '100%', padding: '16px' }}>
          {children}
          <Button colorScheme="info" onClick={onClose}>
            닫기
          </Button>
        </Stack>
      </ModalContent>
    </ModalContainer>,
    document.getElementById('root-modal') as HTMLElement
  );
};

const ModalContainer = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0;
  z-index: 900;
`;

const ModalContent = styled.div`
  max-width: 720px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-x: auto;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 8px;
  z-index: 1000;
`;
