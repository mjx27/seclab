'use client';
import { FormProvider, useForm } from 'react-hook-form';

import { FormInput } from '@/shared/ui/Input';

export const MyForm = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form>
        <FormInput
          name="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
        />
      </form>
    </FormProvider>
  );
};
