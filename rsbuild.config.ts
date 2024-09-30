import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";
import { pluginEslint } from "@rsbuild/plugin-eslint";

export default defineConfig({
  plugins: [pluginReact(), pluginTypeCheck(), pluginEslint({
    eslintPluginOptions: {
      cwd: __dirname,
      configType: "flat",
    },
  })],
  output: {
    cssModules: {
      exportLocalsConvention: 'camelCaseOnly'
    }
  }
});
