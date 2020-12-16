# rollup
###### tags: `bundler`

## <img src="https://rollupjs.org/images/twitter-card.jpg">rollup 簡介：

* 中文翻譯：`捲起`
* 下一代 bundler 工具，**Use webpack for apps, and Rollup for libraries**，`rollup` 是為構建 `libraries` 而生。 [^比較]
* 作者 `Rich harris` 也是 `svelte`（斯費歐特）作者，在紐約時報負責圖像工作，Vue 的作者也有對其框架評價。 [^評價]
* `tree-shaking` 一詞，於前端 `bundler` 工具中特有的概念出自於該工具，`Rich harris` 本人提過在 `Dart` 社區初次認識該名詞。 [^first]
* `Rich harris` 說明 `tree-shaking` 概念為打包有用的東西，**而非去除無用的東西**。
    * 去除無用程式碼是在一坨混亂中去除不要的，`tree-shaking` 是在製作東西前只挑出需要的然後加入製作。[^first]

[^first]:
    [Tree-shaking versus dead code elimination | by Rich Harris | Medium](https://medium.com/@Rich_Harris/tree-shaking-versus-dead-code-elimination-d3765df85c80)
[^比較]:
    [Webpack and Rollup: the same but different | by Rich Harris | webpack | Medium](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c)
[^評價]:
    [Evan you 評價 svelte](https://www.zhihu.com/question/53150351/answer/133912199)

## 使用 rollup bundle

基礎使用方法：

安裝：
```
yarn add rollup -D
```

設定 `rollup.config.js` 檔案：
* `input`：入口點，請設置要打包的 `.js`檔案位置
* `output`：出口點
```javascript=
export default {
  input: './main.js',
  output: {
    dir: 'dist',
    format: 'iife',
    sourcemap: true,
    entryFileNames: '[name].[hash].js', // ! why
    chunkFileNames: '[name].[hash][extname]'
  },
}
```

使用 `rollup cli` 打即完成最簡單設置
```
# 請先在 package.json 中設置 `scripts: { 'build': 'rollup'`
# 接著便可以打包， -c 是指要按照 rollup.config.js 設定打包
yarn build -c
```

### 使用 rollup 插件：
rollup 擁有眾多插件，可以完成許多功能。使用方法如同 `webpack` `loader` 都是作為生產工具安裝，安裝時請記得寫下 `--dev`。

所有的 `plugin` 都會在 `config` 中 `plugons` 設置。

```javascript=
import del from 'rollup-plugin-delete'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import resolve from '@rollup/plugin-node-resolve'

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
    })
  ]
}
```

#### rollup-plugin-delete
> [vladshcherbin/rollup-plugin-delete: Delete files and folders using Rollup](https://github.com/vladshcherbin/rollup-plugin-delete)
用途：每次 bundler `./dist` 後，幫助我們刪除原有的 `dist` 檔案夾，重新生成新的 `dist`

* `targets`：要刪除的檔案夾名稱
```
// rollup.config.js
import del from 'rollup-plugin-delete'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/app.js',
    format: 'cjs'
  },
  plugins: [
    del({ targets: 'dist/*' })
  ]
}
```

#### rollup-plugin-postcss
> [egoist/rollup-plugin-postcss: Seamless integration between Rollup and PostCSS.](https://github.com/egoist/rollup-plugin-postcss)

使用方法：
* 請安裝 `postCSS` 在 `--dev` 但不需要引入
* 若使用 `sass` 請安裝 `node-sass`，目前測試安裝 `dart-sass` 會出問題。

```
yarn add postcss rollup-plugin-postcss node-sass --dev
```

```javascript=
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
    postcss({
      // 預設為處理 ['.css', '.sss', '.pcss'] 結尾，`sass` 請設置如下
      extensions: ['.scss', '.css', '.sass'],
      // 預設為 fasle ，設置為 true 會將 css 生成到 js 相同位置
      extract: true,
      // 是否啟動 sourcemap 預設為 false
      sourceMap: true,
      // 最小化 css
      minimize: true
    })
  ]
}
```

#### @rollup/plugin-commonjs
用於在 rollup 中引用 commonjs 的 module。

用法：
```
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'cjs',
  },
  plugins: \[commonjs()\],
};
```
#### rollup-plugin-terser
用於在解析 node_module 的路徑依賴。

#### rollup-plugin-node-globals
用在解決 `process` `ERROR` 問題。

#### rollup-plugin-size-snapshot
打包檔案大小快照。

#### rollup-plugin-generate-html-template
生成 html 文件。

#### rollup-plugin-visualizer
分析打包檔案。

---

## 參考文章、等待研究：

[無法添加CSS文件（plugin-html）·問題＃382·匯總/插件](https://github.com/rollup/plugins/issues/382)
[尋覓 webpack - 藉由 webpack 學習網頁前端工程的精妙之處 :: 第 12 屆 iT 邦幫忙鐵人賽](https://ithelp.ithome.com.tw/users/20107789/ironman/3332)
[尋覓 webpack - 02 - 認識 webpack - JavaScript 的模組化之路 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10238241)
[Rollup vs. Parcel vs. webpack: Which Is the Best Bundler? | by Manisha Sharma | Better Programming | Medium](https://medium.com/better-programming/the-battle-of-bundlers-6333a4e3eda9#:~:text=Parcel%20wins%20here%20as%20it,a%20config%20file%20at%20all.&text=webpack%20and%20Rollup%20both%20require,%2C%20but%20webpack%20doesn't.)