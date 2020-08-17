import merge from 'deepmerge';
import typescript from '@rollup/plugin-typescript';
import { createBasicConfig } from '@open-wc/building-rollup';

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
  input: ['./src/buttons/yot-button.ts', './src/yot-field.ts', 'lit-element'],
  output: {
    dir: './dist',
    entryFileNames: '[name].js',
    sourcemap: true,
  },
  plugins: [
    typescript()
  ]
});
