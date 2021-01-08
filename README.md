# vite a bit

## 進度

想要學什麼？

(寫下你要學的關鍵字)

### 預備: 開你的分支上傳到 repo
### webpack 打包

- 原生寫法，選一個渲染出來 + [guide 看到 Asset Management](https://webpack.js.org/guides/output-management/)
  - T1 版
  - cdn 引用 (fontawesome)
  - html 要用 element
  - 圖片可以直接引入
  - [Asset Modules](https://webpack.js.org/guides/asset-modules/#custom-data-uri-generator) for webpack 5
  - [fontmin-webpack](https://www.npmjs.com/package/fontmin-webpack) for min font
  - [purgecss-webpack-plugin](https://www.npmjs.com/package/mini-css-extract-plugin) for link css file, not style tags
- Bootstrap，選一個渲染出來 + [guide 看到 Code Splitting](https://webpack.js.org/guides/code-splitting/)
  - bootstrap 直接引入
  - webpack
    - `HtmlWebpackPlugin` 版本問題，出現 warning，版本要用 `@next`
        ```
        (node:94791) [DEP_WEBPACK_COMPILATION_ASSETS] DeprecationWarning: Compilation.assets will be frozen in future, all modifications are deprecated.
        BREAKING CHANGE: No more changes should happen to Compilation.assets after sealing the Compilation.
          Do changes to assets earlier, e. g. in Compilation.hooks.processAssets.
          Make sure to select an appropriate stage from Compilation.PROCESS_ASSETS_STAGE_*.
        ```
    - `MiniCssExtractPlugin` 要指定 publicPath 才會 work，預設會吃 output 的 publicPath，都沒指定會出錯。
        ```
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './'
            }
          },
        ```
- Sass + PostCSS
    - [引入 npm 的 fontawesome](https://stackoverflow.com/questions/52376720/how-to-make-font-awesome-5-work-with-webpack)
    - 假裝使用[前端框架的寫法](https://vuejs.org/v2/guide/instance.html)
    - [migration bootstrap v4-alpha to v5](https://v5.getbootstrap.com/docs/5.0/migration/)
    - css-loader 前處理器，css to js
    - postcss-loader 後處理器，css to css
        - precss: 用 postCSS 做類似 Sass 的功能
    - sass-loader 前處理器，scss to css
    - 加分技能：快取設定，檔案切分，讓專案最佳化

### webpack, vue-loader, with eslint/prettier

- webpack doc
    - Tree Shaking
    - Production
    - Lazy Loading
- ESlint, Prettier, Babel 獨立練習，先練習完後再裝 `loader`
    - [ESLint - Pluggable JavaScript linter](https://eslint.org/)
    - [Prettier · Opinionated Code Formatter](https://prettier.io/)
    - [Babel · The compiler for next generation JavaScript](https://babeljs.io/)
- eslint-loader, babel-loader + webpack
- browserlist
    - [browserslist/browserslist: 🦔 Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env](https://github.com/browserslist/browserslist)
    - cover TW 90%

### rollupjs 打包 (反思 webpack), with eslint/prettier


不同設定檔可放在 `.config`，可參閱 [popper-core](https://github.com/popperjs/popper-core/tree/master/.config) 的 repo。

可放在 `.config` 的原因是，有在 `package.json` 指定個別設定檔的路徑：

```json
{
  "prettier": {
    "semi": true,
    "trailingComma": "es5",
    "singleQuote": true,
    "proseWrap": "always"
  },
  "babel": {
    "extends": "./.config/babel.config"
  },
  "jest": {
    "preset": "./.config/jest.config"
  },
  "eslintConfig": {
    "extends": "./.config/eslint.config"
  }
}
```

但 Prettier 官方沒有提供類似 `extends` 的設定，所以只能直接寫在 `package.json`。


### vite,


`npm init <name>` 其實就是安裝 `create-<name>`，所以 `npm init vite-app` 就是安裝 [`create-vite-app`](https://github.com/vitejs/create-vite-app)：

```shell
$ npm init vite-app <project-name>
```

資料來源：[npm-init | npm Docs](https://docs.npmjs.com/cli/v6/commands/npm-init)



### ~~vue-cli 環境設定, config 全餐~~

### vue3,
### Composition API (Vue2/3)
### vue-router,
###  vuex,
### [vue 官網沒寫的 vue](https://hackmd.io/zYPD_lQ6R--UbU4jFYWzfw),
### vue-rx,
### vue-typescript,



