HTML Webpack Plugin
===

# 安裝

```shell
# Webpack 5
$ npm i --save-dev html-webpack-plugin@next

# Webpack 4
$ npm i --save-dev html-webpack-plugin
```

若在 Webpack 5 安裝 `html-webpack-plugin` (我在 2020-11-13 安裝的版本是 4.5.0)，而不是 `html-webpack-plugin@next` (我在 2020-11-13 安裝的版本是 5.0.0-alpha.14)，在 `npm run build` 後會顯示警告的訊息如下：

```shell
(node:9436) [DEP_WEBPACK_COMPILATION_ASSETS] DeprecationWarning: Compilation.assets will be frozen in future, all modifications are deprecated.
BREAKING CHANGE: No more changes should happen to Compilation.assets after sealing the Compilation.
        Do changes to assets earlier, e. g. in Compilation.hooks.processAssets.
        Make sure to select an appropriate stage from Compilation.PROCESS_ASSETS_STAGE_*.
```

若安裝 `html-webpack-plugin@next` 就不會顯示此警告訊息。
