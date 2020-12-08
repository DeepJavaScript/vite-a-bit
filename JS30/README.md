### background image 解析問題
- 問題：
原始 css 內的 background url 是 `(dirt.svg)`。
但是打包時我將 圖片檔案整理在 `src/image` 內，路徑改變後 webpack 就解析不到檔案。
- 解決方法：
將 css 內的 background url 路徑修正過來。