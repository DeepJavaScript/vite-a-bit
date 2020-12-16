import del from 'rollup-plugin-delete'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import resolve from '@rollup/plugin-node-resolve'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'
import htmlTemplate from 'rollup-plugin-generate-html-template'
import visualizer from 'rollup-plugin-visualizer'

export default {
  input: './main.js',
  output: {
    dir: 'dist',
    format: 'iife',
    sourcemap: true,
    entryFileNames: '[name].[hash].js', // ! why
    chunkFileNames: '[name].[hash][extname]'
  },
  plugins: [
    sizeSnapshot(),
    del({ targets: 'dist/*' }), // delete useless file before bundle
    terser(), // minify javascript file
    resolve({ browser: true }), // tells Rollup how to find date-fns in node_modules
    commonjs(), // converts date-fns to ES modules
    globals(),
    postcss({
      extensions: ['.scss', '.css', '.sass'],
      extract: true,
      sourceMap: true,
      minimize: true
    }),
    htmlTemplate({
      template: './index.html',
      target: 'dist/index.html'
    }),
    visualizer({
      gzipSize: true
    })
  ]
}
