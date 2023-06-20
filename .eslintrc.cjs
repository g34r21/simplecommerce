module.exports = {
  env: { browser: true, es2020: true, node: true },
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  root: true,
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'prettier',
    'react',
    'simple-import-sort',
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'prettier/prettier': 'error',
    'no-underscore-dangle': 'error',
    'no-use-before-define': 'error',
    'no-restricted-imports': ['error', { patterns: ['**/../*'] }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ],
    'no-console': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      { ts: 'never', tsx: 'never' },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  ignorePatterns: ['vite.config.ts', 'vitest.setup.ts'],
};
