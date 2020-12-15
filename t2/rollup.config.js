// rollup.config.js
import json from '@rollup/plugin-json';

export default {
  input: 'src/main.js',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [ json() ]
};