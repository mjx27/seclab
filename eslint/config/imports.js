import pluginImport from 'eslint-plugin-import';

export default {
  plugins: {
    import: pluginImport,
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: '../../tsconfig.json',
      },
    },
    'import/extensions': ['.ts', '.tsx'],
  },
  rules: {
    'import/no-cycle': ['error', { maxDepth: Infinity }],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          { pattern: '@/**', group: 'internal' },
          { pattern: '@entities/**', group: 'internal' },
          { pattern: '@features/**', group: 'internal' },
          { pattern: '@widgets/**', group: 'internal' },
          { pattern: '@shared/**', group: 'internal' },
          { pattern: '@models/**', group: 'internal' },
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/no-default-export': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      { ts: 'never', tsx: 'never' },
    ],
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
  },
};
