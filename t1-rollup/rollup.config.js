import clear from 'rollup-plugin-clear'
// import html from 'rollup-plugin-html';
// import htmlTemplate from 'rollup-plugin-generate-html-template';
import html2 from 'rollup-plugin-html2';
// import css from 'rollup-plugin-css-only';
import postcss from 'rollup-plugin-postcss';
// import smartAsset from 'postcss-smart-asset';
// import smartAsset from 'rollup-plugin-smart-asset';
import url from '@rollup/plugin-url';
import image from '@rollup/plugin-image';
// import image from 'rollup-plugin-img';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
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
      sourcemap: true
    },
    // {
    //   // file: 'dist/bundle.min.js',
    //   dir: 'dist',
    //   format: 'es',
    //   sourcemap: true,
    //   plugins: [terser()]
    // }
  ],
  // watch: {
  //   buildDelay: 1000
  // },
  plugins: [
    // css({ output: 'bundle.css' }),
    postcss({
      extract: true,
      // plugins: [
      //   smartAsset({ url: 'rebase' })
      // ]
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
    // htmlTemplate({
    //   template: 'src/index.html',
    //   target: 'dist/index.html',
    // }),
    image(),
    // url({
    //   destDir: 'dist/images',
    //   sourceDir: 'src/img',
    //   fileName: '[dirname][hash][extname]'
    // }),
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
    nodeResolve(),
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