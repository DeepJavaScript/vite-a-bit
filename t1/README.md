Ti Webpack 打包
===

> Webpack 是將後端 code，變成前端可以用的 code

---

# 準備

安裝：

```shell
$ npm i -D webpack webpack-cli \
           css-loader style-loader \
           html-loader \
           clean-webpack-plugin \
           html-webpack-plugin@next
```


設定 `package.json` 的 `script`：

```diff
  {
    // ...
-   "main": "index.js",
+   "private": true,
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
+     "build": "webpack"
    }
  }
```


# build

執行：

```shell
$ npm run build
```

或

```shell
$ npx webpack
```


# Webpack config 設定

下面是完整的 Webpack config 設定：

```javascript
// webpack.config.js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:8][ext]'
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ]
  }
};
```


## Mode

文件：[Mode | webpack](https://webpack.js.org/configuration/mode/)

預設為 `production`，若在開發時設為 `development`，不會 minify JS 和 HTML。

```javascript
module.exports = {
  mode: 'development'
};
```


## Entry

文件：[Entry and Context | webpack](https://webpack.js.org/configuration/entry-context/#entry)

開始 bundle App 的一個或多個起始點。

```javascript
module.exports = {
  entry: './src/main.js'
};
```

```javascript
module.exports = {
  entry: {
    home: './home.js',
    about: './about.js'
  }
};
```


## Output

- [`path`](https://webpack.js.org/configuration/output/#outputpath)：輸出目錄的絕對路徑
- [`publicPath`](https://webpack.js.org/configuration/output/#outputpublicpath)：指定在瀏覽器中引用時輸出目錄的 pubilc URL，會影響每個按需載入或載入的外部資源 (例如：圖片、檔案等)
  - 相對 URL 相對於 HTML 頁面 (或 `<base>` tag)
  - 也可能是相對於 server 的 URL、相對於 protocol 的 URL 或絕對 URL (例如：在 CDN 上 hosting asset 時)
  - 此 option 的值以 runtime 或 loader 建立的每個 URL 為前綴，大部分此值都以 `/` 為結尾
  - 簡單規則：HTML 頁面 view 中的 `output.path` 的 URL

```javascript
const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  }
}
```


## Plugins

- [`CleanWebpackPlugin`](https://github.com/johnagan/clean-webpack-plugin)：在每次成功 rebuild 後，刪除 Webpack 的 `output.path` 目錄中的所有檔案 (但不包含 `output.path` 目錄)，以及所有未使用的 Webpack asset
- [`MiniCssExtractPlugin`](https://webpack.js.org/plugins/mini-css-extract-plugin/)：為每個包含 CSS 的 JS 檔案建立一個將 CSS 提取到單獨的檔案
- [`HtmlWebpackPlugin`](https://github.com/jantimon/html-webpack-plugin)：生成 HTML 檔案
  - entry point 會 inject 至 HTML 的 `<script>` tag 中
  - 若 Webpack 的輸出包含 CSS asset (例如：用 `MiniCssExtractPlugin` 提取的 CSS)，會將此 CSS asset inject 至 HTML 的 `<head>` tag 中的 `<link>` tag 中

```javascript
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      scriptLoading: 'blocking'
    })
  ]
}
```


## Rules

下面說明如何用各種 Assets Module 和 loader 來載入 HTML、Font Awesome、圖片、CSS。

## 載入 HTML

文件：[html-loader | webpack](https://webpack.js.org/loaders/html-loader/)

- 將 HTML 匯出成字串
- 預設會自動 import 每個可載入的 attribute
  - [可載入的 attribute](https://webpack.js.org/loaders/html-loader/#attributes)，例如：`<img src="image.png">)`
  - 很像是自動在 JS 使用 `const img = require('./image.png')` 或 `import img from "./image.png"` import asset
  - 需在 Webpack config 配置為圖片指定 loader

處理機制：
1. 透過 `html-loader` 將 HTML 轉成字串
2. 將其中可載入的 attribute 的 asset 自動轉為 `const img = require('./image.png')` 或 `import img from "./image.png"`
3. 各種 asset 會找到對應處理的 `module.rules` 所設定的 loader 來處理

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ]
  }
};
```


## 載入 Font Awesome

安裝：

```shell
$ npm i @fortawesome/fontawesome-free
```


觀察當前使用了哪些 Font Awesome icon：

```html
<div class="social">
  <a href="##">
    <i class="fab fa-facebook-square"></i>
  </a>
  <a href="##">
    <i class="fab fa-google-plus-square"></i>
  </a>
  <a href="##">
    <i class="fab fa-twitter-square"></i>
  </a>
  <a href="##">
    <i class="fab fa-pinterest-square"></i>
  </a>
</div>
```


我只用了 `.fab` class，代表只使用 Brands 的 icon style (其他可參閱 [Basic Use | Font Awesome](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use))，所以我只需要載入 Brands 的 `@font-face` 和這幾個 icon 的 class (例如：`.fa-facebook-square` )。

接著在 JS 引入所需的 css：
- `brands.css`：Brands 的 `@font-face`
- `fontawesome.css`：各 icon 的 class (對應到字體內的字元)

```javascript
import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
```


下面是 `brands.css` 的原始碼，裡面包含各種 web font 和 SVG：

```css
/* node_modules/@fortawesome/fontawesome-free/css/brands.css */
@font-face {
  font-family: 'Font Awesome 5 Brands';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url("../webfonts/fa-brands-400.eot");
  src: url("../webfonts/fa-brands-400.eot?#iefix") format("embedded-opentype"),
    url("../webfonts/fa-brands-400.woff2") format("woff2"),
    url("../webfonts/fa-brands-400.woff") format("woff"),
    url("../webfonts/fa-brands-400.ttf") format("truetype"),
    url("../webfonts/fa-brands-400.svg#fontawesome") format("svg");
}

.fab {
  font-family: 'Font Awesome 5 Brands';
  font-weight: 400;
}
```


為了要讓 Webpack 將這些 web font 和 SVG 打包進輸出目錄，需要加上以下設定：
- `test`：指定 `node_modules/@fortawesome/fontawesome-free` 內的 web font 和 SVG
- `type`：選擇 `asset/resource`，將檔案 emit 至輸出目錄
- `generator.filename`：指定輸出至指定目錄

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /fontawesome.*\.(svg|eot|ttf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'vendor/fort-awesome/[name].[hash:8][ext]'
        }
      }
    ]
  }
};
```

> `[name]`、`[hash:8]` 和 `[ext]` 可參閱 [Output - Template strings | webpack](https://webpack.js.org/configuration/output/#template-strings)。


## 載入圖片

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash:8][ext]'
        }
      }
    ]
  }
};
```


## 載入 CSS

- [`css-loader`](https://webpack.js.org/loaders/css-loader/)：會像 `import/require()` 一樣解譯成 `@import` 和 `url()`，並 resolve 它們
- [`MiniCssExtractPlugin.loader`](https://webpack.js.org/plugins/mini-css-extract-plugin/)：為每個包含 CSS 的 JS 檔案建立一個將 CSS 提取到單獨的檔案，
  - 若用了 `MiniCssExtractPlugin.loader`，就不應使用 `style-loader`

```javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  }
};
```


若要將 CSS 提取至指定目錄，就需為 CSS 內引入的 asset 變更 `publicPath`。例如：將 CSS 提取至 `dist/style` 目錄下，asset 的 `publicPath` 需改為 `../`：

```javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/main.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader'
        ]
      }
    ]
  }
};
```


### 部署環境使用 `MiniCssExtractPlugin`，其他環境使用 `style-loader`

在未使用 `MiniCssExtractPlugin` 之前，使用的是 `style-loader`：

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
```

但 `MiniCssExtractPlugin` 雖然方便，但需要提取多個 CSS 時，build 的時間會相對慢。

若要改完只由在部署時才使用 `MiniCssExtractPlugin`，開發環境或測試環境使用 `style-loader`，可將 Webpack config 改為這樣：

```javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProdMode = process.env.NODE_ENV === 'production';

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    scriptLoading: 'blocking'
  })
];

if (isProdMode) {
  plugins.push(new MiniCssExtractPlugin({
    filename: 'style/main.css'
  }));
}

module.exports = {
  plugins,

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          isProdMode
            ? {
              loader: MiniCssExtractPlugin.loader,
              options: { publicPath: '../' }
            }
            : 'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
```

> 以上設定因 `process.env.NODE_ENV` 的值為 `undefined` 而失敗，不管是預設值所認知的 `production`、在 config 加上 `mode: 'production'` 或者在 CLI 加上 `--mode production` 都不行，所以目前無解。


# 其他

## 可不設定 `output.filename`

```javascript
module.exports = {
  output: {
    filename: 'main.js'
  }
};
```

若只有一個 entry point，且未設定 `output.filename` 時，`output.filename` 等同於 `main.js` (文件沒說，但實驗出來的結論)。

```javascript
module.exports = {
  entry: './src/main.js'
};
```


若是多個 entry point，且未設定 `output.filename` 時，`output.filename` 等同於 `[name].js`：

```javascript
module.exports = {
  entry: {
    other: './src/other.js',
    index: './src/main.js',
  }
};
```


# 疑難雜症

## `clean-webpack-plugin` 沒有作用

沒有如期在每次執行 `npx webpack` build 之前，自動清空 `dist` 目錄。

若要知道為何會這樣，可在 `CleanWebpackPlugin()` 加上 `verbose: true` 的 option，用來將 log 輸出在 console 上，便於 debug：

```javascript
// webpack.config.js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    // ...
  ]
}
```


再次執行 `npx webpack` 時，就會顯示類似以下訊息：

```shell
$ npm run build

> t1@1.0.0 build /home/titan/project/goodidea-frontend/vite-a-bit/t1
> webpack

clean-webpack-plugin: options.output.path not defined. Plugin disabled...
[webpack-cli] Compilation finished
assets by status 126 KiB [cached] 2 assets
assets by path . 8.76 KiB
  asset main.js 6.21 KiB [compared for emit] [minimized] (name: main)
  asset index.html 2.55 KiB [compared for emit]
runtime modules 657 bytes 3 modules
orphan modules 325 bytes [orphan] 1 module
cacheable modules 11.5 KiB
  modules by path ./src/ 3.31 KiB
    ./src/main.js + 1 modules 345 bytes [built] [code generated]
    ./node_modules/css-loader/dist/cjs.js!./src/main.css 2.98 KiB [built] [code generated]
  modules by path ./node_modules/ 8.23 KiB
    ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js 6.67 KiB [built] [code generated]
    ./node_modules/css-loader/dist/runtime/api.js 1.57 KiB [built] [code generated]
webpack 5.4.0 compiled successfully in 697 ms
```


重要的是這一行訊息：

```shell
clean-webpack-plugin: options.output.path not defined. Plugin disabled...
```

原來是沒有設定 `options.output.path`，所以 `clean-webpack-plugin` 才會被 disable，沒有清空 `dist` 目錄。

所以只要加上 `options.output.path` 就能自動清空 `dist` 目錄了：

```javascript
// webpack.config.js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // ...
  output: {
    path: path.resolve(__dirname, 'dist')
    // ...
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true })
    // ...
  ]
}
```


debug 完，就能把 `verbose: true` 的 option 刪掉了：

```javascript
// webpack.config.js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // ...
  output: {
    path: path.resolve(__dirname, 'dist')
    // ...
  },
  plugins: [
    new CleanWebpackPlugin()
    // ...
  ]
}
```

資料來源：[CleanWebpackPlugin does not clean in Webpack 4.0.1 · Issue #76 · johnagan/clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin/issues/76)


## `html-loader` 出現 `Error: Automatic publicPath is not supported in this browser` 錯誤

使用 `html-loader` 時遇到以下錯誤訊息：

```shell
ERROR in   Error: /home/titan/project/goodidea-frontend/vite-a-bit/t1/src/index.html:121
  /******/  if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
                            ^
  Error: Automatic publicPath is not supported in this browser

  - index.html:121
    /home/titan/project/goodidea-frontend/vite-a-bit/t1/src/index.html:121:33

  - index.html:124
    /home/titan/project/goodidea-frontend/vite-a-bit/t1/src/index.html:124:12

  - index.js:128 HtmlWebpackPlugin.evaluateCompilationResult
    [t1]/[html-webpack-plugin]/index.js:128:28

  - index.js:323
    [t1]/[html-webpack-plugin]/index.js:323:26

  - task_queues.js:97 processTicksAndRejections
    internal/process/task_queues.js:97:5

  - async Promise.al
  - async Promise.all
```


只要設定 `options.output.publicPath` 就能解決此錯誤：

```javascript
// webpack.config.js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // ...
  output: {
    publicPath: './'
    // ...
  }
}
```

## `html-webpack-plugin@next` 版不會自動將 JS inject 至 HTML 的 `body`，而是 `head`

> 當時我安裝的 `html-webpack-plugin@next` 的版本是 `v5.0.0-alpha.14`。

一開始看 [html-webpack-plugin 的 README 文件](https://github.com/jantimon/html-webpack-plugin) 內提到，Webpack 5 建議安裝 `npm i -D html-webpack-plugin@next` 版，Webpack 4 則是建議安裝 `npm i -D html-webpack-plugin` 版。

雖然兩個版本的 README 文件相同，但兩者的預設 option 設定不同。

例如：因為 `scriptLoading` option 的預設值不同，所以影響到 `inject` option 的預設值：

```javascript
// html-webpack-plugin 的 option 預設值
{
  inject: userOptions.scriptLoading !== 'defer' ? 'body' : 'head',
  scriptLoading: 'blocking'
}
```

```javascript
// html-webpack-plugin@next 的 option 預設值
{
  inject: userOptions.scriptLoading === 'blocking' ? 'body' : 'head',
  scriptLoading: 'defer',
}
```

> 主要是在這個 commit 找到新版的預設值變更：[feat: use defer as default script loading mechanism · jantimon/html-webpack-plugin@428ec49](https://github.com/jantimon/html-webpack-plugin/commit/428ec499d52993b7dd7039d0345894b13d4402a7#diff-e727e4bdf3657fd1d798edcd6b099d6e092f8573cba266154583a746bba0f346)

所以我使用的 `html-webpack-plugin@next` 版本的預設值，會在 `<script>` 上面才會自動加上 `defer`，且將 `<script>` inject 至 `<head>`。

若要改為 inject 至 `<body>`，可改為 `scriptLoading: blocking` 或 `inject: body` (依所需決定)。

後來透過 [jantimon/html-webpack-plugin@428ec49](https://github.com/jantimon/html-webpack-plugin/commit/428ec499d52993b7dd7039d0345894b13d4402a7#diff-e727e4bdf3657fd1d798edcd6b099d6e092f8573cba266154583a746bba0f346) 這個 commit 找到對應的 PR：[next by jantimon · Pull Request #1528 · jantimon/html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin/pull/1528)，看來要等待新版的正式版 release 才會更新完整吧！
