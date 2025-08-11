'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { cn } from '@/shared/lib/utils';

import { useModal } from '../lib/hooks/useModal';

interface ModalContentProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const ModalContent = ({
  children,
  className,
  title = 'Modal Dialog',
}: ModalContentProps) => {
  const { close } = useModal();

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50" />
      <Dialog.Content
        className={cn(
          'fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg',
          'text-black p-2!',
          className
        )}
      >
        <VisuallyHidden asChild>
          <Dialog.Title>{title}</Dialog.Title>
        </VisuallyHidden>

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
