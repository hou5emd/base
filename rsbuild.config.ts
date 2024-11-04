import { defineConfig } from '@rsbuild/core';
import { pluginEslint } from '@rsbuild/plugin-eslint';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';

export default defineConfig({
  plugins: [pluginReact(), pluginEslint({
    eslintPluginOptions: {
      cwd: process.cwd(),
      configType: 'flat',
    },
  }), pluginTypeCheck()],
});
