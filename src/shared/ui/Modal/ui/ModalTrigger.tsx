import * as Dialog from '@radix-ui/react-dialog';

import { useModal } from '../lib/hooks/useModal';

export const ModalTrigger = ({ children }: { children: React.ReactNode }) => {
  const { open } = useModal();

  return (
    <Dialog.Trigger asChild onClick={open}>
      {children}
    </Dialog.Trigger>
  );
};
