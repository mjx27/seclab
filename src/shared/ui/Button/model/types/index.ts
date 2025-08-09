import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'filled' | 'bordered';
export type ButtonSize = 'default' | 'sm' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}
