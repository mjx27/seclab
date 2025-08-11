import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';

import { ModalContext } from '../lib/constants/createContext';

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        {children}
      </Dialog.Root>
    </ModalContext.Provider>
  );
};
