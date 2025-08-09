'use client';
import { useFormContext } from 'react-hook-form';

import { cn } from '@/shared/lib/utils';

import type { InputProps } from './Input';
import { Input } from './Input';

type FormInputProps = {
  name: string;
  label?: string;
} & InputProps;

export const FormInput = ({
  name,
  label,
  className,
  ...props
}: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-2">
      {label && <label htmlFor={name}>{label}</label>}
      <Input
        id={name}
        className={cn(className, errors[name] && 'border-red-500')}
        {...register(name)}
        {...props}
      />
      {errors[name] && (
        <p className="text-sm text-red-500">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};
