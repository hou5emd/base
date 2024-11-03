import { fixupConfigRules } from '@eslint/compat';
import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import importPath from 'eslint-plugin-no-relative-import-paths';
import reactJsx from 'eslint-plugin-react/configs/jsx-runtime.js';
import react from 'eslint-plugin-react/configs/recommended.js';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

const config = [
  js.configs.recommended,
  ...fixupConfigRules([
    {
      ...react,
      settings: {
        react: { version: 'detect' },
      },
    },
    reactJsx,
  ]),
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      'react-hooks': reactHooks,
      import: importPlugin,
      'no-relative-import-paths': importPath,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-base-to-string': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-redundant-type-constituents': 'off',
      '@typescript-eslint/no-restricted-imports': [
        'error',
        { paths: ['preact'], patterns: ['preact/*'] },
      ],
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/no-unsafe-enum-comparison': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-use-before-define': 'warn',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      'class-methods-use-this': 'off',
      'eol-last': ['error', 'always'],
      'eslint-comments/no-unlimited-disable': 'off',
      'func-names': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'import/extensions': 'off',
      'import/no-absolute-path': 'error',
      'import/no-extraneous-dependencies': 'off',
      'import/no-self-import': 'off',
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
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },
        },
      ],
      'import/prefer-default-export': 'off',
      'lines-between-class-members': ['error', 'always'],
      'max-classes-per-file': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-continue': ['off'],
      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        { allowSameFolder: true, rootDir: 'src' },
      ],
      'no-shadow': 'off',
      'no-use-before-define': 'off',
      'react/function-component-definition': 'off',
      'react/jsx-filename-extension': [
        'error',
        { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      ],
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-no-useless-fragment': ['off'],
      'react/no-array-index-key': 'off',
      'react/no-unstable-nested-components': 'off',
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'react-hooks/exhaustive-deps': 'off',
    },
  },
  { ignores: ['dist/'] },
];

export default config;
