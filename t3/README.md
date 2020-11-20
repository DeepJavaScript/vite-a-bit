# t3

## npm bootstrap
```
npm install bootstrap
```

>根據[文件](https://getbootstrap.com/docs/4.0/getting-started/webpack/)
>
>Bootstrap is dependent on jQuery and Popper, these are defined as peerDependencies, this means that you will have to make sure to add both of them to your package.json using npm install --save jquery popper.js.

Bootstrap 依賴 jQuery 和 Popper，我們也需要加到 `package.json`
```
npm install --save jquery popper.js
```

因為 t3 版還不需要 sass-loader，所以 import Bootstrap 到 `main.js` 只要加入下面兩行 
```javascript
// main.js

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

```

那 jQuery 不用 import 嗎？

我們打開 `bootstrap.js` 看看（檔案路徑 `node_module > bootstrap > dist > js > bootstrap.js`）
一開頭就可以看到 `require('jquery'), require('popper.js')`
```javascript
//bootstrap.js

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('popper.js')) :
  ......
```
當執行 `bootstrap.js` 時，就會 import jQuery，所以我們不需要自己寫


## npm fontawesome
根據[文件](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers)，把 fontawesome 加到 `package.json`
```
npm install --save @fortawesome/fontawesome-free
```

import fontawesome css 到 `main.js`
```javascript
// main.js

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./css/style.css";

import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
```
怎麼知道要引入這三隻 fontawesome css 呢？
我的 `index.html` 用到 `fas`、`fab`
```html
<!-- index.html -->
...
<div><i class="fas fa-envelope"></i><span>Email us</span></div>
<div><i class="fab fa-facebook-square"></i><span>Facebook</span></div>
...
```
查[文件](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use)後，知道對應的 style
- `fas` >> Solid
- `fab` >> Brands

接著看 `node_module > @fortawesome/fontawesome-free > css` 可以找到上面 style 對應的 css
- `fas` >> Solid，`solid.css`
- `fab` >> Brands，`brands.css`

引入完成～
但是出現編譯錯誤！
```
ERROR in ./node_modules/@fortawesome/fontawesome-free/css/brands.css
Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):
ModuleParseError: Module parse failed: Unexpected character '' (1:1)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
```

注意到這句
```
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file
```

因為我 webpack.config 沒有設定字體字型的 loader，所以編譯錯誤
根據[文件](https://webpack.js.org/guides/asset-management/#loading-fonts)，加上如下設定，就通過了～
並且把字體資源集中在 `font` 資料夾，讓編譯後的 `dist` 不要太亂，加入
 `filename: 'font/[name].[hash:8][ext]'`
```javascript
// webpack.config.js

// ...
module.exports = {
    // ...
    module: {
      rules: [
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					type: 'asset/resource',
					generator: {
						filename: 'font/[name].[hash:8][ext]'
					}
				}
      ]
    }
    // ...
};

```

## 處理 css 檔案中的圖片 url
我的資料夾結構如下

```bash
├── dist
│   ├── css
│   │   ├── style.css
│   ├── img
│   │   ├── *.hash.png/jpg/svg
├── src
│   ├── css
│   │   ├── style.css
│   ├── img
│   │   ├── *.png/jpg/svg
├── index.html
├── index.js
├── package.json
├── webpack.config.js
├── README.md
└── .gitignore
```

圖片路徑現在有兩種寫法，css 跟 html
```css
/* style.css */

.banner_photo{
  background-image: url(../img/banner_900x431.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 50%;
}
```

```html
<!-- index.html -->

<img src="img/logo_421x65.png" />

```
webpack.config 設定如下

```javascript
// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
				path: path.resolve(__dirname, 'dist'),
				publicPath: './',
		},
		module: {
			rules: [
				{
					test: /\.(jpe?g|png|gif|svg)$/,
					type: 'asset/resource',
					generator: {
						filename: 'img/[name].[hash:8][ext]'
					}
				},
				{
					test: /\.css$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
						},
						'css-loader'
					]
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					type: 'asset/resource',
					generator: {
						filename: 'font/[name].[hash:8][ext]'
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
			}),
			new MiniCssExtractPlugin({
				filename: 'css/style.css'
			})
		],
};

```

編譯後是 css 裡圖片路徑出問題，顯示如下
```css
/* style.css */

.banner_photo{
  background-image: url(./img/banner_900x431.b0d5433d.jpg);
  /* ... */
}
```
因為 css 路徑吃到 webpack.config 的 `publicPath: './'`
所以要針對 `MiniCssExtractPlugin` 修改路徑
webpack.config 修改如下

```javascript
// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
				path: path.resolve(__dirname, 'dist'),
				publicPath: './',
		},
		module: {
			rules: [
				{
					test: /\.(jpe?g|png|gif|svg)$/,
					type: 'asset/resource',
					generator: {
						filename: 'img/[name].[hash:8][ext]'
					}
				},
				{
					test: /\.css$/,
					use: [
						{
              loader: MiniCssExtractPlugin.loader,
              // 修改 css 編譯後路徑
							options: {
								publicPath: '../',
							}
						},
						'css-loader'
					]
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					type: 'asset/resource',
					generator: {
						filename: 'font/[name].[hash:8][ext]'
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
			}),
			new MiniCssExtractPlugin({
				filename: 'css/style.css'
			})
		],
};

```

編譯後顯示如下
```css
/* style.css */

.banner_photo{
  background-image: url(../img/banner_900x431.b0d5433d.jpg);
  /* ... */
}
```

<!-- 
markdown 資料夾結構語法，搜尋關鍵字`markdown Syntax  folder structure`，
[範例寫法](https://github.com/aerobatic/markdown-content/edit/master/docs/directory-structure.md)，打開 README 編輯模式看語法
 -->