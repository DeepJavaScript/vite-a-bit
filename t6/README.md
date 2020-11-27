# T6 webpack 學習筆記

### sass loader 失敗問題
解決方法：在 webpack.config.js 檔內的路徑要填寫正確，不然 lader 會無法存取該資料夾內的檔案。

### Bootstrap 打包
1. 安裝 Bootstrap
```
npm install bootstrap --save
```
> require('bootstrap') 會將 Bootstrap’s jQuery 的 plugin 載入 jQuery Object 中，或是我們也可以透過在 Bootstrap 資料夾內的 js 找到我們要的 jQuery plugin 手動載入檔案。
2. index.js 檔案內 `import 'bootstrap';`
3. web-main.scss 檔案內 `@use './node_modules/bootstrap/scss/bootstrap.scss';`

