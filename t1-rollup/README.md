Rollup.js
===

- [x] Introduction
- [ ] Command Line Interface
- [ ] JavaScript API
- [ ] ES Module Syntax
- [x] Tutorial
- [ ] Plugin Development
- [x] Frequently Asked Questions
- [ ] Integrating Rollup With Other Tools
- [ ] Troubleshooting
- [ ] Big list of options
  - [ ] Core functionality
    - [x] output.plugins
    - [x] plugins
  - [ ] Advanced functionality
  - [ ] Danger zone
  - [ ] Experimental options
  - [ ] Watch options

---

- [Webpack and Rollup: the same but different | by Rich Harris | webpack | Medium](https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c)

---

# 與 webpack 的小比較

- 在 watch 模式下，config 可即時變更，不用重新 build
  - webpack 只能重新 build


---


# 安裝

```shell
$ npm i -D rollup
```

ESM：
- 可靜態分析，幫助 tree-shaking 和 scope-hoisting 之類的優化
- 提供 circular references (循環引用)
- 提供 live bindings

[Tree-shaking](https://rollupjs.org/guide/en/#what-is-tree-shaking)：
- 又稱 live code inclusion
- 拿掉沒未使用的程式碼 (dead code) 的過程
- 從 modules 的 AST (抽象語法樹) 延伸的 (不是 module graph)
- 標記所有相關的陳述句，然後「搖動語法樹」來刪除所有 dead code
  - 類似 mark-and-sweep garbage collection 演算法

輸出格式 ( `output.format` )：
- `cjs`：CommonJS
- `umd`：UMD
- `system`：SystemJS
- `amd`：AMD loader
- `iife`：可在 `script` tag 使用，用 IIFE 封裝，避免衝突


# [在帶有 CommonJS 模組的 Node.js 中使用 Rollup](https://rollupjs.org/guide/en/#how-do-i-use-rollup-in-nodejs-with-commonjs-modules)

Rollup 主要是實作 ESM 的規範，所以 CommonJS 模組的載入和 Node 模組位置解析邏輯的使用均作為可選 plugins 來實作，而 Rollup 核心預設不包含這些 plugin。

所以才需要使用 [commonjs](https://github.com/rollup/plugins/tree/master/packages/commonjs) 和 [node-resolve](https://github.com/rollup/plugins/tree/master/packages/node-resolve) plugins。


# 使用 plugin

## 與 JS 相關

### [`@rollup/plugin-commonjs`](https://github.com/rollup/plugins/tree/master/packages/commonjs)

- 將 CommonJS modules 轉成 ES6
- 由於 import 的大多數 CommonJS 模組可能都是 npm 套件，所以可能需要用 `@rollup/plugin-commonjs`
  - 雖然官方沒有說兩個 plugin 要放的順序，但剛好都是寫這樣：`plugins: [resolve(), commonjs()]`

```shell
$ npm i -D @rollup/plugin-commonjs
```

```javascript
// rollup.config.js
import commonjs from '@rollup/plugin-commonjs';

export default {
  plugins: [
    commonjs()
  ]
};
```


### [`@rollup/plugin-node-resolve`](https://github.com/rollup/plugins/tree/master/packages/node-resolve)

- 教 Rollup 如何找到外部模組
- 由於大多數 npm 套件可能是舊版 CommonJS 而不是 ESM，所以可能需要用 `@rollup/plugin-commonjs`
  - 雖然官方沒有說兩個 plugin 要放的順序，但剛好都是寫這樣：`plugins: [resolve(), commonjs()]`
- 也就是說：
  - 若要 import npm 套件就一定需要此 plugin，因為此 plugin 會幫你 bundle npm 套件
  - 若未使用此 plugin，不會幫你 bundle npm 套件，所以 `import _ from 'lodash'` 只會轉會成其他輸出的 `format` 而已

```shell
$ npm i -D @rollup/plugin-node-resolve
```

```javascript
// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';

export default {
  plugins: [
    resolve()
  ]
};
```


:::info
### 註

為何 Rollup 不內建 `@rollup/plugin-node-resolve`？
- 哲學角度：
  - 因為 Rollup 是 Node 和瀏覽器中 native module loader 的一種 polyfill
  - 在瀏覽器中，無法 `import foo from 'foo'`，因為瀏覽器未使用 Node 的解析演算法
  - 因此要讓 Rollup 自動 bundle `node_modules` 中的東西，會有點誤導。例如：Node 會將 `./bar` 解析成 `./bar/index.js` 和 `./bar/index.json`
- 實際角度：
  - Rollup 的核心處理更重要的東西，且易於修 bug
  - 易於在 node-resolve 中新增功能 (例如：對 `.mjs` 的解析)

資料來源：[Why isn't node-resolve a built-in feature? - rollup.js](https://rollupjs.org/guide/en/#why-isnt-node-resolve-a-built-in-feature)

:::


## 跟 HTML 相關

### [`@rollup/plugin-html`](https://github.com/rollup/plugins/tree/master/packages/html#supported-output-formats)

- 建立 HTML 檔案來 serve Rollup bundles
- 類似 [mini-html-webpack-plugin](https://github.com/styleguidist/mini-html-webpack-plugin)
- 不會自動 inject JS，需手動在 `template` option 設定 inject 位置
  - 竟然要自己寫模板字串！ (若要自動產生 HTML 很適合，但若有準備模板，反而很麻煩)


### [`rollup-plugin-html2`](https://github.com/mentaljam/rollup-plugin-html2)

文件：[IPluginOptions | rollup-plugin-html2](https://mentaljam.github.io/rollup-plugin-html2/interfaces/ipluginoptions.html)

> 跟 HTML 相關的 Rollup plugin 中，最推薦使用的！

- 將 bundled 檔案注入至 HTML 模板
- 此 plugin 類似 [html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin) 和
[rollup-plugin-bundle-html](https://github.com/haifeng2013/rollup-plugin-bundle-html)
- 不會列出輸出目錄，但會從 resulting bundle 中取得 entries
- 會將生成的 HTML 檔案作為 asset emit，以便其他 plugin 可以存取它

```shell
$ npm i -D rollup-plugin-html2
```


```javascript
// rollup.config.js
import html2 from 'rollup-plugin-html2';

export default {
  plugins: [
    html2({
      template: 'index.html',
      // 透過 `type="module"` inject
      modules: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        keepClosingSlash: true,
      }
    })
  ]
};
```


### [`rollup-plugin-html`](https://github.com/bdadam/rollup-plugin-html)

- 用於載入 HTML 檔案的內容以作為 JavaScript 程式碼中的字串變數
- 適合與 Web Components 一起使用
- 包含 `html-minifier`
- 看原始碼後，覺得實作蠻簡單的 XD

```shell
$ npm i -D rollup-plugin-html
```


```javascript
// rollup.config.js
import html from 'rollup-plugin-html';

export default {
  plugins: [
    html({
      include: '**/*.html',
      htmlMinifierOptions: {
				collapseWhitespace: true,
				collapseBooleanAttributes: true,
				conservativeCollapse: true,
				minifyJS: true
			}
		})
  ]
};
```


例如：

```javascript
// main.js
import template from './template.html';

document.querySelector('#mydiv').innerHTML = template;
```


### [`rollup-plugin-generate-html-template`](https://github.com/bengsfort/rollup-plugin-generate-html-template)

- 可用自己的模板生成 HTML (必要的 option)
- 透過 `<script>` ( `<body>` 結尾) 和 `<link>`  ( `<head>` 結尾) 將 resulting bundle 自動 inject 至 HTML 模板中
- 自動 inject 的 `<script>` 可設定 attribute，例如：`async` 和 `defer`
  - 但不知能不能加上 `type="module"`


```shell
$ npm i -D rollup-plugin-generate-html-template
```

```javascript
// rollup.config.js
import htmlTemplate from 'rollup-plugin-generate-html-template';

export default {
  plugins: [
    htmlTemplate({
      template: 'src/index.html',
      target: 'dist/index.html',
    })
  ]
};
```


## 與 CSS 相關

### [`rollup-plugin-postcss`](https://github.com/egoist/rollup-plugin-postcss)

> 跟 CSS 相關的 Rollup plugin 中，最推薦使用的！

整合 Rollup 與 PostCSS。預設會將聲常的 CSS 注入至 `<head>`。

記得要[安裝 `postcss` 套件](https://github.com/postcss/postcss/wiki/PostCSS-8-for-end-users)：

```shell
$ npm i -D postcss rollup-plugin-postcss
```


否則會遇到以下錯誤：

```shell
[!] (plugin postcss) Error: PostCSS plugin postcss-noop-plugin requires PostCSS 8.
Migration guide for end-users:
https://github.com/postcss/postcss/wiki/PostCSS-8-for-end-users
src/main.css
Error: PostCSS plugin postcss-noop-plugin requires PostCSS 8.
Migration guide for end-users:
https://github.com/postcss/postcss/wiki/PostCSS-8-for-end-users
    at Processor.normalize (/home/titan/project/goodidea-frontend/vite-a-bit/t1-rollup/node_modules/postcss/lib/processor.es6:139:15)
    at new Processor (/home/titan/project/goodidea-frontend/vite-a-bit/t1-rollup/node_modules/postcss/lib/processor.es6:38:25)
    at Object.postcss (/home/titan/project/goodidea-frontend/vite-a-bit/t1-rollup/node_modules/postcss/lib/postcss.es6:34:10)
    at /home/titan/project/goodidea-frontend/vite-a-bit/t1-rollup/node_modules/rollup-plugin-postcss/dist/index.js:322:55
    at Generator.next (<anonymous>)
    at asyncGeneratorStep (/home/titan/project/goodidea-frontend/vite-a-bit/t1-rollup/node_modules/rollup-plugin-postcss/dist/index.js:29:24)
    at _next (/home/titan/project/goodidea-frontend/vite-a-bit/t1-rollup/node_modules/rollup-plugin-postcss/dist/index.js:51:9)
```


```javascript
// rollup.config.js
import postcss from 'rollup-plugin-postcss';

export default {
  plugins: [
    postcss({
      extensions: ['.css', '.scss'],
      extract: 'style/main.css',
      sourceMap: true,
      minimize: true
    })
  ]
};
```


### [`rollup-plugin-css-only`](https://github.com/thgh/rollup-plugin-css-only)

- bundle import 的 CSS
- 但不會自動將 CSS inject 至 HTML，所以寧願用 [`rollup-plugin-postcss`](#rollup-plugin-postcss)

```shell
$ npm i -D rollup-plugin-css-only
```

```javascript
// rollup.config.js
import css from 'rollup-plugin-css-only';

export default {
  plugins: [
    css({
      output: 'bundle.css'
    })
  ]
};
```


## 與 assets 相關

### [`@rollup/plugin-url`](https://github.com/rollup/plugins/tree/master/packages/url)

- 將檔案作為 data-URIs 或 ESM import

```shell
$ npm i -D @rollup/plugin-url
```

```javascript
// rollup.config.js
import url from '@rollup/plugin-url';

export default {
  plugins: [
    url({
      publicPath: './images/',
      destDir: 'dist/images',
      sourceDir: 'src/img',
      fileName: '[dirname][hash][extname]'
    })
  ]
};
```


### [`@rollup/plugin-json`](https://github.com/rollup/plugins/tree/master/packages/json)

將 `.json` 檔轉成 ESM

```shell
$ npm i -D @rollup/plugin-json
```

```javascript
// rollup.config.js
import json from '@rollup/plugin-json';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [json()]
};
```


要打包的檔案：

```javascript
// src/main.js
import { version } from '../package.json';

export default function () {
  console.log('version ' + version);
}
```


輸出：沒用到的 JSON 資料會由 tree-shaking 處理

```javascript
'use strict';

var version = "1.0.0";

function main (){
  console.log('version ' + version);
}

module.exports = main;
```


## 跟 Webpack 很像的功能

### [`rollup-plugin-serve`](https://github.com/thgh/rollup-plugin-serve)

- 很像 `webpack-dev-server`
  - 自動開啟瀏覽器，瀏覽指定 host 和 port 的頁面
  - 但不會自動 reload，搭配 [`rollup-plugin-livereload`](https://github.com/thgh/rollup-plugin-livereload) 會更像 `webpack-dev-server`

```shell
$ npm i -D rollup-plugin-serve
```

```javascript
// rollup.config.js
import serve from 'rollup-plugin-serve';

export default {
  plugins: [
    serve({
      open: true,
      contentBase: 'dist',
      port: 5000,
    })
  ]
};
```


### [`rollup-plugin-livereload`](https://github.com/thgh/rollup-plugin-livereload)

- 很像 `webpack-dev-server`
  - 執行 `rollup -c -w` (加上 `-w` watch) 時，會自動 reload
    - 但打包發生錯誤後，就不會自動 reload，需手動 reload
  - 搭配 [`rollup-plugin-serve`](https://github.com/thgh/rollup-plugin-serve) 會更像 `webpack-dev-server`

```shell
$ npm i -D rollup-plugin-livereload
```

```javascript
// rollup.config.js
import livereload from 'rollup-plugin-livereload';

export default {
  plugins: [
    livereload({
      watch: 'dist',
      verbose: true
    })
  ]
};
```


### [`rollup-plugin-clear`](https://github.com/DongShelton/rollup-plugin-clear)

- 很像 `clean-webpack-plugin`，用來自動在 build 之前清空指定目錄，例如：清空 `dist` 目錄

```shell
$ npm i -D rollup-plugin-clear
```

```javascript
// rollup.config.js
import clear from 'rollup-plugin-clear'

export default {
  plugins: [
    clear({
      targets: ['dist'],
      // 在 --watch 模式下重新編譯 rollup 時是否清除目錄
      // watch: true, // default: false
    })
  ]
};
```


# 使用 output plugin

在 nut-shell 中，這些 plugin 只能在完成 Rollup 的主要分析之後才能修改程式碼。若將不相容的 plugin 作為 output-specific plugin，Rollup 會發出警告。

`rollup-plugin-terser`：minified build
- `name`：全域變數的名稱，讓其他程式馬可透過此變數存取 export 的東西

```javascript
// rollup.config.js
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'bundle.js',
      format: 'cjs'
    },
    {
      file: 'bundle.min.js',
      format: 'iife',
      name: 'version',
      plugins: [terser()]
    }
  ],
  plugins: [json()]
};
```


# Code Splitting

- 自動將程式碼分割：動態載入、多個 entry points
- 設定 [`output.manualChunks`](https://rollupjs.org/guide/en/#outputmanualchunks)


用途：
- 希望在使用 expensive features 才載入或解析此 features
- 指定共享某些依賴的 entry point
  - Rollup 不會重複程式碼，而是建立額外的 chunk 來載入最少的必要內容


Rollup 將使用動態導入建立一個只根據需要載入的 separate chunk。為了讓 Rollup 知道將第二個 chunk 放在哪裡，不加上 `--file` option，而是用 `--dir` option 設定輸出目錄：

```shell
$ npx rollup src/main.js -f cjs -d dist
```

可透過 [`output.chunkFileNames`](https://rollupjs.org/guide/en/#outputchunkfilenames) 和 [`output.entryFileNames`](https://rollupjs.org/guide/en/#outputentryfilenames) option 設定命名。

參考範例：[rollup/rollup-starter-code-splitting](https://github.com/rollup/rollup-starter-code-splitting)


# Font Awesome

要使用 `@rollup/plugin-node-resolve` 才能將 Font Awesome 的 SVG 讀進來。

:::warning
### 疑惑
- 明明 Font Awesome 的 SVG 有提供 ESM，為何還要透過 `@rollup/plugin-node-resolve`，是因為用了 npm 套件都需要嗎？
:::

```shell
$ npm i @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
$ npm i -D @rollup/plugin-node-resolve
```


- `@fortawesome/fontawesome-svg-core`：只提供功能，不提供 icon
- `@fortawesome/free-brands-svg-icons`：style 為 solid 的 icon

```javascript
// src/main.js
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebookSquare,
  faGooglePlusSquare,
  faTwitterSquare,
  faPinterestSquare
} from '@fortawesome/free-brands-svg-icons';

// 加入所需的 icon
library.add(
  faFacebookSquare,
  faGooglePlusSquare,
  faTwitterSquare,
  faPinterestSquare
);

// 將所有的 `<i>` 替換成 `<svg>`
// dom.i2svg();

// 指定要搜尋的元素
dom.i2svg({
  node: document.querySelector('.social')
});

// 將所有的 `<i>` 替換成 `<svg>`，並設定 `MutationObserver` 在 DOM 更改時繼續執行此操作
// dom.watch();
```

資料來源：
- [SVG JavaScript Core | Font Awesome](https://fontawesome.com/how-to-use/on-the-web/advanced/svg-javascript-core)
- [Icon Library | Font Awesome](https://fontawesome.com/how-to-use/javascript-api/setup/library)
- [dom.i2svg() | Font Awesome](https://fontawesome.com/how-to-use/javascript-api/methods/dom-i2svg)
- [dom.watch() | Font Awesome](https://fontawesome.com/how-to-use/javascript-api/methods/dom-watch)

