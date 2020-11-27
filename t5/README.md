# t5


## 資料夾結構
```bash
├── dist
│   ├── css
│   │   ├── style.css
│   ├── img
│   │   ├── *.hash.png/jpg/svg
├── src
│   ├── sass
│   │   ├── _*.scss
│   │   ├── style.scss
│   ├── img
│   │   ├── *.png/jpg/svg
├── index.html
├── index.js
├── package.json
├── webpack.config.js
├── README.md
└── .gitignore
```
## npm sass
安裝 sass-loader 後，還需要裝 `Dart Sass` 或 `Node Sass`
[文件](https://webpack.js.org/loaders/sass-loader/#root)推薦 `Dart Sass`，所以指令也包含裝 `Dart Sass`

```
npm install sass-loader sass webpack --save-dev
```

修改 `webpack.config.js`
```javascript
// webpack.config.js

// ...
module.exports = {
		// ...
		// 讓 browser devtool 看到 scss source code
		devtool: 'inline-source-map',
    module: {
      rules: [
				// ...
				{
					//因為需要 import scss 檔跟 bootstrap css 檔
					test: /\.(s[ac]ss|css)$/i,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								publicPath: '../',
							}
						},
						'css-loader',
						'sass-loader'
					]
				},
				// ...
      ]
    }
    // ...
};

```