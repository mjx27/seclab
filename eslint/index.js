import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

import baseConfig from './config/base.js';
import importsConfig from './config/imports.js';
import reactConfig from './config/react.js';
import typescriptConfig from './config/typescript.js';

export default tseslint.config(
  typescriptConfig,
  importsConfig,
  eslintConfigPrettier,
  reactConfig,
  baseConfig,
  {
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      curly: ['error', 'all'],
    },
  },
);
