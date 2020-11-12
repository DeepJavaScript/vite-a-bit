//nodejs 要指定任何檔案路徑都要靠叫 path 的 api 來做，用 require 的方式來引入 path 的模組
const path = require('path');

module.exports = {
    // entry:進入點，專案執行時先從 index.js 開始
    entry: './src/index.js',

    // output:輸出點，專案打包後輸出的檔名和檔案路徑
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    }
};