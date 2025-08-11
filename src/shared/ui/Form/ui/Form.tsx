'use client';
import type { ReactNode } from 'react';
import type {
  UseFormReturn,
  FieldValues,
  SubmitHandler,
} from 'react-hook-form';
import { FormProvider } from 'react-hook-form';

import { cn } from '@/shared/lib/utils';

import { createReactHookFormAdapter } from '../lib/utils/form-adapter';

type FormProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  children: ReactNode;
  className?: string;
};

export const Form = <T extends FieldValues>({
  form,
  onSubmit,
  children,
  className,
}: FormProps<T>) => {
  const adapter = createReactHookFormAdapter(form);
  return (
    <FormProvider {...form}>
      <form
        onSubmit={adapter.handleSubmit(onSubmit)}
        className={cn('space-y-4', className)}
        noValidate
      >
        <fieldset
          disabled={adapter.formState.isSubmitting}
          className="space-y-4"
        >
          {children}
        </fieldset>
      </form>
    </FormProvider>
  );
};
