import clear from 'rollup-plugin-clear'
import html2 from 'rollup-plugin-html2';
import postcss from 'rollup-plugin-postcss';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
// import { terser } from 'rollup-plugin-terser';

// import path from 'path';

export default {
  input: 'src/main.js',
  output: [
    {
      // file: 'dist/bundle.js',
      dir: 'dist',
      format: 'es',
      // entryFileNames: '[name].[hash].js',
      // sourcemap: true
    },
    // {
    //   // file: 'dist/bundle.min.js',
    //   dir: 'dist',
    //   format: 'es',
    //   sourcemap: true,
    //   plugins: [terser()]
    // }
  ],
  watch: {
    buildDelay: 1000
  },
  plugins: [
    postcss({
      extract: 'style/main.css',
      minimize: true,
      // sourceMap: true
    }),
    html2({
      template: 'src/index.html',
      modules: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        keepClosingSlash: true,
      }
    }),
    copy({
      targets: [
        { src: 'src/img/*', dest: 'dist/img' },
        // { src: 'src/img/*', dest: 'dist/images' },
        // {
        //   src: 'src/index.html',
        //   dest: 'dist',
        //   transform: (contents) => contents.toString().replace('./img', './images')
        // }
      ]
    }),
    resolve(),
    clear({
      targets: ['dist'],
      // 在 --watch 模式下重新編譯 rollup 時是否清除目錄
      // watch: true, // default: false
    }),
    serve({
      open: true,
      contentBase: 'dist',
      port: 5000,
    }),
    livereload({
      watch: 'dist',
      verbose: true
    })
  ]
};