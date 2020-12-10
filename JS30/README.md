## webpack

### background image 解析問題

- 問題：
  原始 css 內的 background url 是 `(dirt.svg)`。
  但是打包時我將 圖片檔案整理在 `src/image` 內，路徑改變後 webpack 就解析不到檔案。
- 解決方法：
  將 css 內的 background url 路徑修正過來。

## ESLint
### 自動格式修正問題
在 package.json 內 新增指令 [Command Line Interface](https://eslint.org/docs/user-guide/command-line-interface)
`eslint [options] file.js [file.js] [dir]`

> Fixing problems:
> --fix Automatically fix problems
> --fix-dry-run Automatically fix problems without saving the changes to the file system
> --fix-type Array Specify the types of fixes to apply (problem, suggestion, layout)
