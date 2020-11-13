# 20201113 
## 一、安裝 webpack
## 二、設定 entry、output
webpack.config.js
```javascript
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  }
};
```

## Loading CSS
1. 安裝 style-loader、css-loader
  注意順序，use 陣列執行順序是由後往前。
2. 在 main.js import CSS


## Loading Images
- 處理圖片資源(不包含)
webpack4: file-loader、url-loader
webpack5: `asset/resource`

- 處理 HTML 中的圖片資源
html-loader

## 自動 build HTML 檔
安裝 html-webpack-plugin


## 每次 build 時，先清空 dist 資料夾
安裝 clean-webpack-plugin



