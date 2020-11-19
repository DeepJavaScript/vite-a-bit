# vite a bit
## 進度

想要學什麼？

(寫下你要學的關鍵字)

1. 預備: 開你的分支上傳到 repo
1. webpack 打包
    - 原生寫法，選一個渲染出來 + [guide 看到 Asset Management](https://webpack.js.org/guides/output-management/)

    * Prior to webpack 5 it was common to use:
        * raw-loader to import a file as a string
        * url-loader to inline a file into the bundle as a data URI
        * file-loader to emit a file into the output directory

    * Asset Modules type replaces all of these loaders by adding 4 new module types:
        * asset/resource emits a separate file and exports the URL. Previously achievable by using file-loader.
        * asset/inline exports a data URI of the asset. Previously achievable by using url-loader.
        * asset/source exports the source code of the asset. Previously achievable by using raw-loader.
        * asset automatically chooses between exporting a data URI and emitting a separate file. Previously achievable by using url-loader with asset size limit.

    * [bootstrap jquery undefine issue](https://stackoverflow.com/questions/62559131/webpack-4-bootstrap-typeerror-cannot-read-property-jquery-of-undefined)

    * [module instantiated once only issue](https://bundlers.tooling.report/code-splitting/multi-entry/)

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



