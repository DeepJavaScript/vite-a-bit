# Vue-a-bit 用 Webpack 專案渲染 T3
## 設定 Boostrap 渲染環境
參考自 [Boostrp 官網](https://getbootstrap.com/docs/4.0/getting-started/webpack/)

原本是用 cdn 來連到 Boostrap 的資源，這邊改用 npm 安裝來練習：
```shell
$ npm install bootstrap
```

接著在 `index.js` 內 import `Boostrap.js`：
```javascript
import 'bootstrap';
```

最後樣式的部分要能夠正常顯示，要記得也在 `index.js` 內引入編譯好的 css 檔：
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

`Boostrap.js` 它裡頭有需要 required `jQuery` 跟 `popper`，所以也要再安裝這兩個，這樣一些有用到 JS 碼的 component 才能正常互動。
```shell
$ npm install --save jquery popper.js
```
## Background url 路徑問題
因為我 build 出來的 css 檔是包在 `css/` 檔案夾底下，所以照全域的設定 `publicPath: './'` 來吃路徑的話，會發現是無法正常渲染的。所以要多設定的 `publicPath`：
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'  // 要設定 css 的相對路徑
            }
          },
          'css-loader'
        ],
      }
    ]
  }
}
```
## Source map
為了方便 debug，我們需要知道錯誤出在 src 中的哪個資源的哪一行程式碼，可以在 `webpack.config.js` 內設定：
```javascript
module.exports = {
  devtool: 'inline-source-map'
}
```
如此一來，程式錯誤的部分就會明確顯示--檔案名稱跟程式碼的行數：
![](https://i.imgur.com/ZDQMClP.png)

## Webpack server
安裝：
```shell
$ npm install --save-dev webpack-dev-server
```
設定 `webpack.config.js`：
```javascript
module.exports = {
  devServer: {
    contentBase: './dist',  // 指定要 server 的檔案
    port: '5500'   // 指定 port 號，沒有的話預設就是 8080
  }
}
```
在 `package.json` 內設定 script
```json
"scripts": {
  "server": "webpack serve --open 'google chrome'", // 指定要用 chrome 自動開啟
}
```