# vite a bit

## Getting Started - letter

### Basic Setup

```json
{
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
+   "private": true, // 改成私人狀態，防止意外發布程式代碼
-   "main": "index.js", // 移除此行代碼，配合上方 private 機制
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    ...
}
  
package.json 設定檔
```

▼ 疑惑：為何簡易設定就能完成機制，進行 [npm documentation](https://docs.npmjs.com/cli/v6/configuring-npm/package-json) 查詢，得到以下說明：

> **If you set "private": true in your package.json, then npm will refuse to publish it.** 
>> This is a way to prevent accidental publication of private repositories. If you would like to ensure that a given package is only ever published to a specific registry (for example, an internal registry), then use the publishConfig dictionary described below to override the registry config param at publish-time. 

---

### Creating a Bundle

First we'll tweak our directory structure slightly, separating the **"source" code (/src)** from our **"distribution" code (/dist)**. The "source" code is the code that we'll write and edit. The "distribution" code is the minimized and optimized output of our build process that will eventually be loaded in the browser. 

主要將**源代碼**與**發布代碼**分離：
- 源代碼：編寫編輯功能 (input)
- 發布代碼：最小化與優化輸出 (output)

```
  webpack-demo
  |- package.json
+ |- /dist
+   |- index.html
- |- index.html
  |- /src
    |- index.js
```

▼ 疑惑：npx 可以運行 webpack 二進制文件，進行 [wikipedia](https://zh.wikipedia.org/wiki/%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%96%87%E4%BB%B6) 查詢
> The npx command, which ships with Node 8.2/npm 5.2.0 or higher, runs the webpack binary
>> 二進位檔案（英語：Binary file）一般指包含ASCII及擴充ASCII字元中編寫的資料或程式指令（Program instructions）的檔案。廣義的二進位檔案即為檔案，由檔案在外部儲存裝置的存放方式為二進位而得名。狹義的二進位檔案即指除文字檔案以外的檔案。

---

### Using a Configuration

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js', // 主要進入點
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), // 打包後位置
  },
};

webpack.config.js 設定檔
```
---

### Conclusion
If you're using **npm 5**, you'll probably also see a **package-lock.json** file in your directory.

### 
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 

module.exports = {
  entry: ['./src/index'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], 
        // 右至左行為，先進行 CSS 編譯過程，再把 CSS 編譯過後，透過 style-loader 放置在 HTML header 區
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // webpack5 新作法，可透過 type 映射其 loader 方法
        generator: {
          filename: 'images/[hash:10][ext]' // ext 表示為各種檔名的總稱，[query] 尚未了解，後續補充
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/, // 編譯文字格式過程
        type: 'asset/resource',
        generator: {
          filename: 'typeface/[hash:10][ext]'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  //   new webpack.optimize.UglifyJsPlugin({
  //     compressor: {
  //       warnings: false,
  //     },
  //   }),
  //   new webpack.optimize.OccurrenceOrderPlugin()
  // ], 註解區塊為優化機制，尚未實作
  ],
  mode: 'development'
}

編寫 webpack.config.js 設定檔
```

**CleanWebpackPlugin** : 每次打包前都會重新清除 dist 資料夾再重新打包，使用 hash 是為了防止快取機制，但因此產生每次打包後 dist 資料夾殘留先前未使用檔案，就可以利用 CleanWebpackPlugin 統一刪除後再打包。

**type: asset/resource** : emits a separate file and exports the URL. Previously achievable by using

**html-loader** : By default every loadable attributes (for example - `<img src="image.png">`) is imported (const img = require('./image.png') or import img from "./image.png""). You may need to specify loaders for images in your configuration (recommended file-loader or url-loader).

**HtmlWebpackPlugin** : The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags. Just add the plugin to your webpack configuration as follows:

---

補充說明：webpack 預設只能夠打包 JavaScript 和 json 的資料，所以額外皆需透過 loader 機制

```
$ npm install --save @fortawesome/fontawesome-free
```

```javascript
import '@fortawesome/fontawesome-free/css/all.css'; 
// 需要額外確認 fontawesome 引入方式 css 或 js

index.js 設定檔
```


