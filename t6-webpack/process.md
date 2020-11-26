# bundle practice & record

## 20201126
- 複製檔案
- `$ npm install` 安裝 `package.json` 裡的套件
- 建立 `src` 和 `dist` 兩個資料夾，把檔案移到 `src` 裡
- `$ npm install webpack webpack-cli --save-dev`
- `package.json`: `"main": "index.html",` -> `"private": true,`
- 建立 `webpack.config.js`
- `$ npx webpack --config webpack.config.js` -> ✅
- `package.json` `scripts` 加上 `"build": "webpack"`
- `$ npm run build` -> ✅
- `$ npm install --save-dev style-loader css-loader` 安裝 `style-loader` 和 `css-loader`
- 在 `webpack.config.js` 加上：

```js
module: {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
  ],
},
```

- 在 `index.js` 加上：

```js
import './css/main.css';
```

- `$ npm run build` -> ❌ (8 errors)
- `$ npm install sass-loader sass webpack --save-dev` 安裝 `sass-loader`
- `index.js`: `import './css/main.css';` -> `import './scss/main.scss';`
- 在 `webpack.config.js` 加上：

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
```

- `$ npm run build` -> ❌ (1 errors)
- `$ npm install --save-dev html-loader` 安裝 `html-loader`
- `html-loader` 的作用機制 (ref. [Loading Images](https://webpack.js.org/guides/asset-management/#loading-images))：

> Now, when you `import MyImage from './my-image.png'`, that image will be processed and added to your output directory and the `MyImage` variable will contain the final url of that image after processing. 
> 
> When using the css-loader, as shown above, a similar process will occur for `url('./my-image.png')` within your CSS. The loader will recognize this is a local file, and replace the `'./my-image.png'` path with the final path to the image in your output directory. 
> 
> The html-loader handles `<img src="./my-image.png" />` in the same manner.

- 在 `webpack.config.js` 加上：

```js
module: {
  rules: [
    {
      test: /\.html$/i,
      loader: 'html-loader',
    },
  ],
},
```

- `$ npm run build` -> ❌ (1 errors)
- 把 `index.js` 移動到 `src/js` 裡
- `index.js` 改路徑、加上 `script.js`：

```js
import '../scss/main.scss';
import './script.js';
```

- `webpack.config.js` 改 `entry` 和 `filename`：

```js
module.exports = {
  entry: {
    index: './src/js/index.js',
    script: './src/js/script.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

- `$ npm run build` -> ❌ (1 errors)
- `$ npm install --save-dev html-webpack-plugin` 安裝 `html-webpack-plugin`
- 在 `webpack.config.js` 加上：

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
};
```

> Before we do a build, you should know that the `HtmlWebpackPlugin` by default will generate its own `index.html` file, even though we already have one in the `dist/` folder. This means that it will replace our `index.html` file with a newly generated one.

- `$ npm run build` -> ❌ (1 errors)
- 在 `webpack.config.js` 加上：

```js
module: {
  rules: [
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
  ],
},
```

- `$ npm run build` -> ❌ (1 errors)
- `$ npm install --save-dev clean-webpack-plugin` 安裝 `clean-webpack-plugin`
- 在 `webpack.config.js` 加上：

```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  plugins: [
    new CleanWebpackPlugin(),
  ],
};
```

- `$ npm run build` -> ❌ (1 errors)
- 在 `webpack.config.js` 加上：

```js
module.exports = {
  mode: 'development',
};
```

- 在 `webpack.config.js` 加上：

```js
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 't6-webpack-eva',
      template: './src/index.html',
    }),
  ],
};
```

- `$ npm run build` -> ❌ (2 errors: swiper)
- 在 `index.js` 加上：

```js
import 'swiper';
```

- `$ npm run build` -> ❌ (2 errors: swiper)
- 修改 `index.js`：
    - `main.css`
    - `swiper`

```js
import '../../node_modules/swiper/swiper-bundle.min.css';
import '../css/main.css';
import '../../node_modules/swiper/swiper-bundle.min.js';
import './script.js';
```

- 在 `index.html` 註解掉：

```html
<link rel="stylesheet" href="node_modules/swiper/swiper-bundle.min.css">
<script src="node_modules/swiper/swiper-bundle.min.js"></script>
```

- `$ npm run build` -> ❌ (1 errors: publicPath)
- 在 `webpack.config.js` 加上：

```js
module.exports = {
  output: {
    assetModuleFilename: 'img/[hash][ext][query]',
  },
};
```

- `$ npm run build` -> ❌ (1 errors: publicPath)
- 在 `webpack.config.js`
    - 加上 `publicPath: './',`: `ReferenceError: document is not defined`;
    - 不加 `publicPath: './',`: `Error: Automatic publicPath is not supported in this browser`
- 所以要加 `publicPath`，怎麼加才對？

    > `publicPath` 讓我們可以指定所有 assets 的根路徑

    - Documentation [Public Path](https://webpack.js.org/guides/public-path/) 超級看不懂啊。
    - 🔍 Stackoverflow

- 修改 `webpack.config.js`：

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/i,
      },
    ],
  },
};
```

- `$ npm run build` -> ❌ (2 errors)
    - `SassError: Can't find stylesheet to import.`
    - `ReferenceError: document is not defined`

> ###### Ask:
>  
> `/\.s[ac]ss$/i` (4 errors) vs. `/\.(css|scss|sass)$/i` (2 errors)

- 在 `index.html` 註解掉：

```html
<link rel="stylesheet" href="css/main.css">
```

- `$ npm run build` -> ❌ (2 errors)
    - `SassError: Can't find stylesheet to import.`
    - `ReferenceError: Swiper is not defined`
- 在 `index.html` 註解掉：

```html
<script src="js/script.js"></script>
```

- `$ npm run build` -> ❌ (1 errors: Sass)
- 在 `index.html` 註解掉：

```html
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
```

- `$ npm run build` -> ❌ (1 errors: Sass)
- `index.js` 裡的 `import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'` 改成 `import 'bootstrap'` 沒有用 Q_Q
- 在 `main.scss` 註解掉：

```scss
@import "functions";
@import "variables";
@import "mixins";
@import "dropdown";
```

- 在 `index.js` 加上：

```js
import '../../node_modules/bootstrap/scss/bootstrap.scss'
```

- `$ npm run build` -> ✅
- 去 Chrome 看畫面，`swiper` 壞掉惹 T_T
- 🔍 [Stackoverflow](https://stackoverflow.com/questions/55066093/swiper-slider-not-work-when-i-user-webpack-and-import-this-in-app-js)，參考 Swiper API [Custom Build](https://swiperjs.com/api/#custom-build)
- 以下不成功：

```js
import { Swiper } from '../../node_modules/swiper/swiper-bundle.min.js';
```

```js
import { Swiper } from 'swiper';
```

```js
// Import Swiper and modules
import { Swiper, Navigation, Pagination, Scrollbar } from 'swiper';

// Install modules
Swiper.use([Navigation, Pagination, Scrollbar]);
```

- 一半成功(?) 在 `script.js` 加上：

```js
import {Swiper} from 'swiper';
```

> ###### Ask: 
> 
> 為什麼加了 `Swiper.use()` 反而壞掉？

- 可以了 🎉！！！！！

```js
// script.js

import { 
  Swiper,
  Navigation,
} from 'swiper';

Swiper.use([Navigation]);
```

- 修理壞掉的 UI：
    - [x] FEATURED WORKS 原本的 navigation icons 跑出來了；
        - `!important`
    - [x] TESTIMONIALS 的對話框消失了
        - `opacity: 1;`

> ###### Ask: 
> 
> 1. 打包後多出一些我沒寫的樣式？
> 
> 2. 開始打包後無法預處理 (preprocessor) `.scss` -> `.css`？