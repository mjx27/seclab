'use client';
import type { UserFormData } from '@/entities/User';
import { Button } from '@/shared/ui/Button';
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalFooter,
} from '@/shared/ui/Modal';

import { CreateUserForm } from './CreateUserForm';

export const CreateUserModal = ({
  onSuccess,
  trigger,
}: {
  onSuccess?: () => void;
  trigger?: React.ReactNode;
}) => {
  const handleSubmit = (data: UserFormData) => {
    console.warn('User created:', data);
    onSuccess?.();
  };

  return (
    <Modal>
      <ModalTrigger>{trigger ?? <Button>Create User</Button>}</ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <h2 className="text-lg font-semibold">Create New User</h2>
        </ModalHeader>
        <CreateUserForm onSubmit={handleSubmit} />
        <ModalFooter>created by mjx27</ModalFooter>
      </ModalContent>
    </Modal>
  );
};
