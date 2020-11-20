# t2

## 遇到的疑惑

1. 不必在 index.js 裡面 import jquery 只需要安裝就可以妥當的包好並且運作正常? (npm)
	20201118.Lo.t2.1
2. 直接在 index.js 裡面寫  `import "bootstrap"`, 結果是根據 bootstrap module 裡面的 package.json 的 main 所聲明的檔案 (npm)
3. 瀏覽器出現 `DevTools failed to load SourceMap: Could not load content for webpack://t2/node_modules/bootstrap/dist/js/bootstrap.bundle.js.map: HTTP error: status code 404, net::ERR_UNKNOWN_URL_SCHEME`
	1. ![]("./screenShot.png")

	1. 根據 [stack over flow] (https://stackoverflow.com/questions/61767538/devtools-failed-to-load-sourcemap-for-webpack-node-modules-js-map-http-e)可以透過 source-map-loader 來解決