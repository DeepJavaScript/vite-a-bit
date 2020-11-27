# Vue-a-bit 用 Webpack 專案渲染 T6
## 引入 Swiper 輪播套件
### Step1：安裝
```shell
$ npm install swiper
```
### Step2：引用
於 `swiper.js` （功能模組）寫入：
```javascript
// 因為 Swiper 只導入核心版本，所以要額外導入其他 module
import Swiper, { Navigation, Pagination } from 'swiper';
// 同時也要導入 Swiper 樣式
import 'swiper/swiper-bundle.css';
```
> Swiper 樣式也可以在 SCSS 檔內 import
```css
@import "swiper/swiper";
@import "swiper/components/navigation/navigation";  /*只引入需要的樣式*/
```
### Step3：引入 index.js
於 `index.js` 寫入：
```javascript
import './swiper.js';
```
### Step4：解決 Swiper CSS 樣式 loader
於 webpack.config.js 內寫入
```javascript
module: {
    rules: [
      css loader 是為了 swiper 而設定的， swiper 的樣式是用 css 寫的
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
}
```
## 編譯 SCSS
### Step1：安裝
安裝 sass-loader 跟 dart-sass，文件不建議用 node-sass
```shell
$ npm install sass-loader sass webpack --save-dev
```
### Step2：引入 main.scss
於 `index.js` 寫入：
```javascript
import './scss/main.scss';
```
### Step3： sass-loader 設定
```javascript
module: {
    rules: [
      // scss loader 要放在前面，這裡有先後順序的必要，會按照 use 的順序執行(由下往上)
      // 所以一開始定要先 compile scss 接著 load css 然後才拆出檔案
      // 如果這邊的正則有包含 .css，那上述的 css loader 就不需要單獨設定
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../'
              }
            },
            "css-loader",
            "sass-loader"
        ],
      }
    ]
}
```
### Step4：解決 background url 路徑問題
background 的 url 路徑問題，有[兩個解決方式](https://webpack.js.org/loaders/sass-loader/)：
  - `resolve-url-loader` （這個要搭配 source map） 才會有效
  - 或是相對路徑要符合 entry file （`main.scss`）

