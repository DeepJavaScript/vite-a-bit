# T6 webpack 學習筆記

### sass loader 失敗問題
解決方法：在 webpack.config.js 檔內的路徑要填寫正確，不然 lader 會無法存取該資料夾內的檔案。

### Bootstrap 打包
1. 安裝 Bootstrap
```
npm install bootstrap --save
```
2. Bootstrap 需要使用 jQuery 來執行 JS 功能，因此要安裝 `jQuery`  跟 `popper.js`
```
npm install jquery popper.js --save
```
> require('bootstrap') 會將 Bootstrap’s jQuery 的 plugin 載入 jQuery Object 中，或是我們也可以透過在 Bootstrap 資料夾內的 js 找到我們要的 jQuery plugin 手動載入檔案。
3. index.js 檔案內 `import 'bootstrap';`
4. web-main.scss 檔案內 `@use './node_modules/bootstrap/scss/bootstrap.scss';`

### swiper 打包
1. 安裝 awiper 
>  踩雷：這邊我照官網 `npm install swiper` 安裝，結果不知道 swiper 被安裝到哪裡去了（被黑洞吸走了），要用 `$ npm install swiper --save` 安裝在該專案資料夾下才行。
2. 將原本寫在 HTML 內的 Swiper 拆分成一隻獨立的檔案
3. 在 index.js 內 `import 'swiper';`
4. **記得要獨立解析 Swiper 的 CSS**，因此在 webpack.config 內要特別寫一組 CSS 的 rules

