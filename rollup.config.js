import merge from 'deepmerge';
import { createBasicConfig } from '@open-wc/building-rollup';

const baseConfig = createBasicConfig();

export default merge(baseConfig, {
  input: ['./build/yot-button.js', './build/yot-field.js', 'lit-element'],
  output: {
    dir: './dist',
    entryFileNames: '[name].js',
  },
});
//entryFileNames
