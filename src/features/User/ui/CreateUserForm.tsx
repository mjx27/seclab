'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import type { UserFormData } from '@/entities/User';
import { userSchema } from '@/entities/User';
import { Button } from '@/shared/ui/Button';
import { Form } from '@/shared/ui/Form';
import { FormInput } from '@/shared/ui/Input';

import { UserFormInputs } from '../lib/constants';

export const CreateUserForm = ({
  onSubmit,
  onCancel,
}: {
  onSubmit: (data: UserFormData) => void;
  onCancel?: () => void;
}) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: '',
      email: '',
      role: 'user',
      age: 18,
    },
  });

  const handleSubmit = (data: UserFormData) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <Form form={form} onSubmit={handleSubmit}>
      <div className="space-y-4">
        {UserFormInputs.map((input) => (
          <FormInput {...input} key={input.name} />
        ))}
        <div className="flex justify-end space-x-2">
          {onCancel && (
            <Button type="button" variant="bordered" onClick={onCancel}>
              Cancel
            </Button>
          )}
          <Button type="submit">Create</Button>
        </div>
      </div>
    </Form>
  );
};
