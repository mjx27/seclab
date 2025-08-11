import type { UserFormData } from '@/entities/User';

import type { InputProps } from '../interfaces';

export type FormInputProps = {
  name: keyof UserFormData;
  label?: string;
} & InputProps;
