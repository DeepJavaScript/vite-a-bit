# vite-a-bit
「vite 一下」聚會記錄

實作步驟：
1. npm i webpack webpack-cli --save-dev。
2. entry、output{filename、path.resolve(__dirname,'dist')}
entry 為 webpack 進入點。
output filename 為檔案名稱，path為設定路徑與資料夾名稱。

3. npm i css-loader、style-loader 
4. type:'asset/resource'，可以產出檔案與 url
    generator，設定產出檔名
5. npm i html-loader，可打包 tag 內的 src
6. npm i html-webpack-plugin，可打包 html 
7. npm i clean-webpack-plugin，預先清除dist內檔案，再重新生成檔案

讀書會學習：
1. miniCssExtractPlugin 可獨立css檔
2. fontmin-webpack 字型最小化
3. PurgeCSSPlugin 清除多餘的 css

<!-- purgeCssplugin使動畫效果消失？ -->
