# vite-a-bit - 用 webpack 專案做 T1 渲染

## 安裝 webpack 並建立專案
```shell
$ mkdir webpack-demo
$ cd webpack-demo
$ npm init -y
$ npm install webpack webpack-cli --save-dev
```

## Package.json 設定
```json
{
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
+   "private": true,     // 新增：防止程式碼暴露
-   "main": "index.js",  // 刪除：防止程式碼暴露
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build": "webpack" // 加進 webpack 指定，就不用一直用 npx 執行
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "webpack": "^4.20.2",
      "webpack-cli": "^3.1.2"
    },
    "dependencies": {}
  }
```

## webpack.config.js 基本設定
`webpack.config.js`
```js
const path = require('path');  // import path 來設定打包的路徑

module.exports = {
  entry: './src/index.js', // 設定入口檔案
  output: {
    filename: 'main.js',  // 打包後的檔案名稱
    path: path.resolve(__dirname, 'dist'),  // 打包後會路徑會是 __dirname(專案名)/dist/
  },
  mode: "development"  // 讓 build 出來的 js 檔不是 minify，會易於開發
};
```
這邊設定入口是 `index.js`，所以很多 plugin 跟資源都可以透過 `index.js` 引入。
當然就要記得在 `index.html` 引入 `index.js`，這樣頁面才吃得到。

`index.html`
```html
<!doctype html>
  <html>
   <head>
     <meta charset="utf-8"/>
     <title>Getting Started</title>
   </head>
   <body>
    <script src="./src/index.js"></script>  <!-- 引入入口程式 -->
   </body>
  </html>
```

## 引入 css
安裝 `style.loader` 跟 `css.loader`。
```shell
$ npm install --save-dev style-loader css-loader
```
一樣把靜態資源放在 `src/` 裡面。

![](https://i.imgur.com/I67Ovbpm.png)

接著在 `webpack.config.js` 設定：
`webpack.config.js`
```js
module.exports = {
  // 在 module 內寫入 css 打包規則
  module: {
    rules: [
      {
        test: /\.css$/i, // 只要是 .css 檔，就會被編譯
        use: ['style-loader', 'css-loader'], // 將 loader 工具寫入使用欄
      }
    ],
  }
};
```
接著，在程式入口 index.js 引入 .css 檔
```javascript
import './style.css';
```

都設定好了，就可以 build 了
```shell
$ npm run build
```
如果打開 devtool 來看，就可以看到 css 樣式被寫入 `<head><style></style></head>` 內


## 打包圖片（靜態資源）
在 `webpack.config.js` 內設定：
```javascript
module.exports = {
  output: {
    assetModuleFilename: 'images/[hash:5][ext][query]',  // 指定打包後的資料夾路徑，如果沒有設定就會直接散落在 dist/
  },
  // 在 module 內寫入 圖片檔打包規則
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ],
  },
  mode: "development"
};
```
接著 build
```shell
$ npm run build
```
結果：

![](https://i.imgur.com/Ie8FxrOm.png)

## 透過 `HtmlWebpackPlugin` 打包 HTML
透過 `HtmlWebpackPlugin` 自動 build dist/index.html，而且也會自動吃到打包好的資源（圖片）路徑。

先安裝：
```shell
$ npm install --save-dev html-webpack-plugin
```

接著設定參數：
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入 HtmlWebpackPlugin

  module.exports = {
   // 在 plugin 內 new HtmlWebpackPlugin 實例
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Output Management',
       template: 'index.html' // 指定來源
     }),
   ],
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'images/[hash:5][ext][query]',
      publicPath: './'      // 指定 source 的基本路徑，否則可能會抓錯相對路徑
    },
  };
```
接著跑 build 指令，就可以看到結果了：
```shell
$ npm run build
```
![](https://i.imgur.com/MsXUJ2qm.png)

可以看到 img src 直接抓到對的資源路徑：
![](https://i.imgur.com/LzeTMo8.png)

## 解決 FontAwsome 的引入問題
原本的 T1 的 font 是用 FontAwsome 的 cdn 來取得資源，可是一到 webpack 專案內會抓不到，在這個練習中，我用 npm 安裝 FontAwsome 來解決這個問題。
```shell
$ npm install --save @fortawesome/fontawesome-free
```
接著在入口程式 `index.js` 引入 fontawsome 資源
```javascript
import '@fortawesome/fontawesome-free/js/all.js';
```
接著 HTML 內的 <i> 就會被 build 成 svg，稍微修改一下原本的 css 樣式，就可以正常顯示了。

> 如果是用 `font-family` 的方式引用 icon 的話，那就可以在 css 內 import FontAwsome。

>如果是下載 icon 在靜態資源的話，可以設定一下 font 靜態資源，跟圖片的做法一樣
```javascript
module.exports = {
   module: {
     rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
     ],
   },
 };
```

## 清理 Dist/
當我們想要重新 build dist/，會發現，上一次 build 的用不到的檔案還會在，因為它不會自動幫我們偵測哪些是用不到的，所以我每可以在每次 build 之前，清掉上一次的，就可以只留下我們當次要的版本：

安裝：
```shell
$ npm install --save-dev clean-webpack-plugin
```
在 `webpack.config.js` 設定：
```javascript
 const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 引入套件

  module.exports = {
    // 寫入 plugin 內
    plugins: [
     new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Output Management',
      }),
    ]
  };
```
這樣就會自動刪掉上一個版本再 build 新的。
