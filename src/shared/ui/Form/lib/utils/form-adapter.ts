import type {
  UseFormReturn,
  FieldValues,
  Path,
  SubmitHandler,
  FieldError,
} from 'react-hook-form';

type FormAdapter<T extends FieldValues> = {
  getFieldProps: (name: Path<T>) => {
    name: Path<T>;
    error?: FieldError | undefined;
  };
  handleSubmit: (handler: SubmitHandler<T>) => () => void;
  formState: {
    isSubmitting: boolean;
    isValid: boolean;
  };
  resetForm: () => void;
};

export function createReactHookFormAdapter<T extends FieldValues>(
  form: UseFormReturn<T>
): FormAdapter<T> {
  return {
    formState: {
      isSubmitting: form.formState.isSubmitting,
      isValid: form.formState.isValid,
    },
    getFieldProps: (name) => ({
      ...form.register(name),
      error: form.formState.errors[name] as FieldError | undefined,
    }),
    handleSubmit: (handler) => form.handleSubmit(handler),
    resetForm: () => form.reset(),
  };
}
