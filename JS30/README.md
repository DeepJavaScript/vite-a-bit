## webpack

### background image 解析問題
- 問題：
  原始 css 內的 background url 是 `(dirt.svg)`。
  但是打包時我將 圖片檔案整理在 `src/image` 內，路徑改變後 webpack 就解析不到檔案。
- 解決方法：
  將 css 內的 background url 路徑修正過來。

## ESLint
本專案我使用了 Airbnb 的 Style Guide，該 Style Guide 的介紹(中文)：[Airbnb JavaScript Style Guide](https://github.com/jigsawye/javascript)

舉例來說關於 **箭頭函式** 的規範：
若我們需要在箭頭函式寫建構式，那麼就需要使用 `return`，除非你是想要整個物件 return 出去。
原本語法：
```javascript
[1, 2, 3].map(number => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});
```
應該要改成：
```javascript
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}.`;
});
```

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

vs code 也有 Prettier 套件可以安裝 [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## babel
### 編譯程式碼沒有成功
使用 babel cli 時，發現編譯過的檔案是舊檔案直接吐出來的東西。
> 因為 Babel 是個通用型的編譯器，有各式各樣的使用方式。在預設的情況下，它不會做任何事。你得明確告訴 Babel 該做些什麼。

可藉由安裝 **外掛程式(plugin)** 或 **presets(某種官方提供外掛程式)** 來指示 Babel 該做些什麼。

參考了 [Babel 第一次接觸](https://dwatow.github.io/2018/03-08-babel-cli/)

或是直接修改瀏覽器相容程度：[Usage Guide](https://babeljs.io/docs/en/usage)

## browserslist
官方簡介：
> Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env.
> 也就是說可以透過 browserslist 指定在不同瀏覽器支援舊版語法相關設定的工具。

browserslist 指定的瀏覽器支援度是建立在 Can I Use 上的。因此也可以去 Can I Use 上查詢語法支援度問題。

```
"browserslist": [
    //所有全球使用率 1% 以上的瀏覽器
    "> 1%",
    //所有瀏覽器最新的 2 個版本
    "last 2 versions",
  ],
```

```
"browserslist": [
  //使用 TW 使用率 90% 的瀏覽器
    "cover 90% in TW",
  //所有瀏覽器最新的 2 個版本
    "last 2 versions",
  //不要 IE 11 版本的瀏覽器
    "not IE 11"
  ],
```
**注意，規則順序有差。後面的規則會覆蓋前面的規則**
