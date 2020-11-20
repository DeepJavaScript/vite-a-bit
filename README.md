# vite a bit

## 進度

想要學什麼？

(寫下你要學的關鍵字)

1. 預備: 開你的分支上傳到 repo
1. webpack 打包
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
1. webpack, vue-loader, with eslint/prettier
1. rollupjs 打包 (反思 webpack), with eslint/prettier
1. vite,
1. vue-cli 環境設定, config 全餐
1. vue3,
1. Composition API (Vue2/3)
1. vue-router,
1. vuex,
1. [vue 官網沒寫的 vue](https://hackmd.io/zYPD_lQ6R--UbU4jFYWzfw),
1. vue-rx,
1. vue-typescript,



