import { createContext, useMemo, useState } from 'react';

export interface ModalContextValue {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  onOpenModal: (callback?: () => void) => void;
  onCloseModal: (callback?: () => void) => void;
}

export const ModalContext = createContext<ModalContextValue>({
  isOpen: false,
  setOpen: () => {},
  onOpenModal: () => {},
  onCloseModal: () => {}
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setOpen] = useState(false);
  const modalContext = useMemo(
    () => ({
      isOpen,
      setOpen,
      onOpenModal: (callback?: () => void) => {
        setOpen(true);
        callback?.();
      },
      onCloseModal: (callback?: () => void) => {
        setOpen(false);
        callback?.();
      }
    }),
    [isOpen, setOpen]
  );
  return <ModalContext.Provider value={modalContext}>{children}</ModalContext.Provider>;
};
