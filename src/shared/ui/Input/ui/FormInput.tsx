'use client';
import { useFormContext } from 'react-hook-form';

import { cn } from '@/shared/lib/utils';

import type { FormInputProps } from '../model/types';

import { Input } from './Input';

export const FormInput = ({
  name,
  label,
  type,
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
        {...register(name, {
          valueAsNumber: type === 'number',
        })}
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
