## webpack

### background image 解析問題
- 問題：
  原始 css 內的 background url 是 `(dirt.svg)`。
  但是打包時我將 圖片檔案整理在 `src/image` 內，路徑改變後 webpack 就解析不到檔案。
- 解決方法：
  將 css 內的 background url 路徑修正過來。

## ESLint
### 自動格式修正問題
- 問題：想讓 ESLint 自動修正格式錯誤問題。
- 解決方法：
在 package.json 內 新增指令 [Command Line Interface](https://eslint.org/docs/user-guide/command-line-interface)
`eslint [options] file.js [file.js] [dir]`

> Fixing problems:
> --fix Automatically fix problems
> --fix-dry-run Automatically fix problems without saving the changes to the file system
> --fix-type Array Specify the types of fixes to apply (problem, suggestion, layout)

## Prettier
與 ESLint 不同，Prettier 僅僅只是修正格式錯誤，並不檢查程式碼問題。
相較 ESLint，Prettier 的強制性更強。
通常 ESLint 與 Prettier 會一起使用。

## babel
### 編譯程式碼沒有成功
使用 babel cli 時，發現編譯過的檔案是舊檔案直接吐出來的東西。
> 因為 Babel 是個通用型的編譯器，有各式各樣的使用方式。在預設的情況下，它不會做任何事。你得明確告訴 Babel 該做些什麼。

可藉由安裝 **外掛程式(plugin)** 或 **presets(某種官方提供外掛程式)** 來指示 Babel 該做些什麼。

參考了 [Babel 第一次接觸](https://dwatow.github.io/2018/03-08-babel-cli/)

或是直接修改瀏覽器相容程度：[Usage Guide](https://babeljs.io/docs/en/usage)


