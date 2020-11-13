// 引入 Html Plugin  
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 輸出的路徑
const path = require('path');

module.exports = {
  // 設定入口文件
  entry: './src/index.js',
  // 設定輸出文件
  output: {
    filename: 'main.js',
    // __dirname 為 node.js 的一個指令，代表當前檔案的絕對路徑
    path: path.resolve(__dirname, 'dist'),
    // 指定打包資源輸出後的根目錄資料夾
    publicPath: './'
  },
  // loader 的設定
  module: {
    rules: [
      {
        // 打包時會遍歷所有檔案去查找有設定過的檔案後綴名稱
        test: /\.css$/i,
        // 使用了哪些 loader
        use: [
          // 執行順序：從右到左、從下到上
          // 建立 style tag，將 js 內的樣式寫入 html 的 head 中 
          'style-loader',
          // 將 css 檔案轉換成 CommonJS 的 module 寫入 js 中，裡面內容為模板字串
          'css-loader'
        ]
      },
      {
        // 打包時會遍歷所有檔案去查找有設定過的檔案後綴名稱
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
        generator: {
          // 可以指定 hash 值的長度 
          filename: 'static/[hash:10][ext][query]'
        }
      }
    ]
  },
  // plugins 的設定    
  plugins: [
    // 清除 build 過的舊資料
    new CleanWebpackPlugin(),
    // 透過 plugins 自動幫我們產生一個 html 檔
    new HtmlWebpackPlugin({
        template: 'src/cathy_t1v2.html'
      })
  ],
  // 環境模式
  mode: 'development'
};
