import { forwardRef } from 'react';

import { cn } from '@/shared/lib/utils';

import { buttonSizes, buttonVariants } from '../lib/constants';
import type { ButtonProps } from '../model/types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'filled', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium',
          'transition-all duration-200 focus-visible:outline-none',
          'disabled:opacity-50 disabled:pointer-events-none',
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
