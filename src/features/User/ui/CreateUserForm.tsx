'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import type { UserFormData } from '@/entities/User';
import { userSchema } from '@/entities/User';
import { Button } from '@/shared/ui/Button';
import { createReactHookFormAdapter, Form } from '@/shared/ui/Form';
import { FormInput } from '@/shared/ui/Input';

import { UserFormInputs } from '../lib/constants';

export const CreateUserForm = ({
  onSubmit,
}: {
  onSubmit: (data: UserFormData) => void;
}) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: '',
      email: '',
      role: 'user',
      age: 18,
    },
    mode: 'onChange',
  });

  const adapter = createReactHookFormAdapter(form);

  const handleSubmit = (data: UserFormData) => {
    onSubmit(data);
    adapter.resetForm();
  };

  return (
    <Form form={form} onSubmit={handleSubmit}>
      <div className="space-y-4">
        {UserFormInputs.map((input) => (
          <FormInput
            {...input}
            key={input.name}
            {...adapter.getFieldProps(input.name)}
          />
        ))}
        <div className="flex justify-end space-x-2">
          <Button
            type="submit"
            disabled={
              !adapter.formState.isValid || adapter.formState.isSubmitting
            }
          >
            Create
          </Button>
        </div>
      </div>
    </Form>
  );
};
