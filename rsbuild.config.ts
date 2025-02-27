import { defineConfig } from '@rsbuild/core';
import { pluginCheckSyntax } from '@rsbuild/plugin-check-syntax';
import { pluginEslint } from '@rsbuild/plugin-eslint';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';

export default defineConfig({
  output: {
    cssModules: {
      exportLocalsConvention: 'camelCaseOnly',
    },
  },
  source: {
    decorators: {
      version: 'legacy',
    },
  },
  plugins: [
    pluginReact(),
    pluginEslint({
      eslintPluginOptions: {
        cwd: process.cwd(),
        configType: 'flat',
      },
    }),
    pluginTypeCheck(),
    pluginCheckSyntax(),
  ],
});
