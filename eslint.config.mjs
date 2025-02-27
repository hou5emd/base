import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin';
import typeScriptPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import destructuringPlugin from 'eslint-plugin-destructuring';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPath from 'eslint-plugin-no-relative-import-paths';
import prettier from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], ignores: ['src/api/generated/**/*.ts'] },
  { languageOptions: { globals: { ...globals.node, ...globals.browser } } },
  pluginJs.configs.recommended,
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      import: importPlugin,
      'no-relative-import-paths': importPath,
      'jsx-a11y': jsxA11y,
      destructuring: destructuringPlugin,
      reactPlugin,
      '@stylistic': stylisticJs,
      typeScriptPlugin,
      prettier,
    },
    settings: {
      'import/resolver': {
        typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
      },
    },
    rules: {
      'typeScriptPlugin/ban-ts-comment': 'off',
      'typeScriptPlugin/no-base-to-string': 'off',
      'typeScriptPlugin/no-explicit-any': 'off',
      'typeScriptPlugin/no-floating-promises': 'off',
      'typeScriptPlugin/no-misused-promises': 'off',
      'typeScriptPlugin/no-non-null-assertion': 'error',
      'typeScriptPlugin/no-redundant-type-constituents': 'off',
      'typeScriptPlugin/no-restricted-imports': [
        'error',
        { paths: ['preact'], patterns: ['preact/*'] },
      ],
      'typeScriptPlugin/no-unsafe-enum-comparison': 'off',
      'typeScriptPlugin/no-unused-vars': 'warn',
      'typeScriptPlugin/no-use-before-define': 'warn',
      'typeScriptPlugin/restrict-template-expressions': 'off',
      'typeScriptPlugin/switch-exhaustiveness-check': 'error',
      'class-methods-use-this': 'off',
      'destructuring/in-methods-params': 'error',
      'destructuring/in-params': ['error', { 'max-params': 0 }],
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
      'no-unused-vars': 'off',
      'reactPlugin/display-name': 'off',
      'reactPlugin/function-component-definition': 'off',
      'reactPlugin/jsx-filename-extension': [
        'error',
        { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      ],
      'reactPlugin/jsx-props-no-spreading': 'off',
      'reactPlugin/jsx-no-useless-fragment': ['off'],
      '@stylistic/jsx-wrap-multilines': ['error', { return: 'parens-new-line' }],
      'reactPlugin/no-array-index-key': 'off',
      'reactPlugin/no-unstable-nested-components': 'off',
      'reactPlugin/prop-types': 'off',
      'reactPlugin/require-default-props': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'reactPlugin/react-in-jsx-scope': 'off',
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          printWidth: 100,
          tabWidth: 2,
        },
      ],
    },
  },
];
