import type { FormInputProps } from '@/shared/ui/Input/model/types';

export const UserFormInputs: FormInputProps[] = [
  { name: 'name', label: 'name' },
  { name: 'email', label: 'email', type: 'email' },
  { name: 'age', label: 'age', type: 'number' },
];
