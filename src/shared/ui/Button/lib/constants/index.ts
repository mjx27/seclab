export const buttonVariants = {
  filled: [
    'bg-blue-600 text-white',
    'hover:bg-blue-700',
    'active:bg-blue-800',
    'shadow-sm',
  ].join(' '),

  bordered: [
    'border border-blue-600 text-blue-600 bg-transparent',
    'hover:bg-blue-50/50',
    'active:bg-blue-100',
    'dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-900/20',
  ].join(' '),
};

export const buttonSizes = {
  default: 'h-10 px-4 py-2 text-sm',
  sm: 'h-8 px-3 text-xs',
  lg: 'h-12 px-6 text-base',
};
