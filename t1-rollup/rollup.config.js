// import css from 'rollup-plugin-css-only'
import html2 from 'rollup-plugin-html2'
import postcss from 'rollup-plugin-postcss'
import image from '@rollup/plugin-image'
import copy from 'rollup-plugin-copy'
import clear from 'rollup-plugin-clear'

export default {
  input: 'src/main.js',
  output: {
		// file: 'bundle.js',//build 出一隻 js 檔
		dir: 'dist',//build 出 dist 資料夾
    // format: 'cjs'//輸出 commonJS 模組
    format: 'es'//輸出 ES6 模組
  },
  plugins: [
		// css({ output: 'bundle.css' }),//只能 build 出 css 檔，不會自動注入到 <head>
		postcss({
			// extract: 'style/style.css',//build 出的檔名只能叫 main.css 才會注入到 <head>，否則不會注入
			extract: 'style/main.css',
			minimize: true
		}),
    html2({
			template: 'src/index.html'
		}),
		image(),
    copy({
      targets: [
				{ src: 'src/index.html', dest: 'dist' },
        { src: 'src/img/*', dest: 'dist/img' }
      ]
		}),
		clear({
				targets: ['dist']
		})
  ]
};