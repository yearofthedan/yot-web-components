import merge from 'deepmerge';
import typescript from '@rollup/plugin-typescript';
import { createBasicConfig } from '@open-wc/building-rollup';
import copy from 'rollup-plugin-copy';

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
  input: [
    './src/buttons/yot-button.ts',
    './src/fields/yot-textbox.ts',
    './src/layout/yot-scrollview.ts',
    './src/layout/yot-view.ts',
    './src/yot-field.ts',
    './src/indicators/yot-spinner.ts',
    './src/typography/yot-header.ts',
    'lit-element',
    './src/index.ts',
  ],
  output: {
    dir: './dist',
    entryFileNames: '[name].js',
    sourcemap: true,
  },
  plugins: [
    typescript(),
    copy({
      targets: [{ src: 'src/foundational/*.css', dest: 'dist/foundational' }],
    }),
  ],
});
