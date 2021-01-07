import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/main.js',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      sourcemap: true
    },
    {
      dir: 'dist/es',
      format: 'es',
      sourcemap: true
    },
    // {
    //   file: 'bundle.min.js',
    //   format: 'iife',
    //   name: 'version',
    //   plugins: [terser()]
    // }
  ],
  // plugins: [json()]
};