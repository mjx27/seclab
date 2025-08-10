import * as Dialog from '@radix-ui/react-dialog';

import { cn } from '@/shared/lib/utils';

import { useModal } from '../lib/hooks/useModal';

export const ModalContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { close } = useModal();

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
      <Dialog.Content
        className={cn(
          'fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg',
          className
        )}
      >
        {children}
        <Dialog.Close asChild onClick={close}>
          <button className="absolute top-4 right-4" aria-label="Close">
            x
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
