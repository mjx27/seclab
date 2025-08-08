import eslint from '@eslint/js';
import globals from 'globals';

export default {
  ignores: [
    '**/node_modules/',
    '**/.next/',
    '**/*.d.ts',
    '**/coverage/',
    '**/*.config.{js,ts}',
    '**/dist/',
    '**/out/',
  ],
  ...eslint.configs.recommended,
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.es2021,
    },
  },
  rules: {
    'no-unused-vars': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    'object-shorthand': ['error', 'always'],
  },
};
