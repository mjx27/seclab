import type { UseFormReturn, FieldValues } from 'react-hook-form';
import { FormProvider } from 'react-hook-form';

type FormProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  onSubmit: (data: T) => void;
  children: React.ReactNode;
  className?: string;
};

export const Form = <T extends FieldValues>({
  form,
  onSubmit,
  children,
  className,
}: FormProps<T>) => {
  return (
    <FormProvider {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit(onSubmit)(e).catch(console.error);
        }}
        className={className}
      >
        {children}
      </form>
    </FormProvider>
  );
};
