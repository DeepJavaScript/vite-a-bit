import del from 'rollup-plugin-delete'
import postcss from 'rollup-plugin-postcss';
import { terser } from "rollup-plugin-terser";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import globals from "rollup-plugin-node-globals";
import resolve from "@rollup/plugin-node-resolve";
import htmlTemplate from 'rollup-plugin-generate-html-template';

export default {
  input: "./main.js",
  output: {
    dir: 'dist',
    format: "iife",
    sourcemap: true,
    entryFileNames: '[name].[hash].js',
    chunkFileNames: '[name].[hash][extname]',
  },
  plugins: [
    terser(),
    sizeSnapshot(),
    del({ targets: 'dist/*' }), // delete useless file before bundle
    resolve({ browser: true }), // tells Rollup how to find date-fns in node_modules
    globals(),
    postcss({
      extensions: ['.scss', '.css', '.sass'],
      extract: true,
      sourceMap: true,
      minimize: true
    }),
    htmlTemplate({
      template: './index.html',
      target: 'dist/index.html',
    }),
  ],
};
