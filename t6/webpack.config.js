// 引入 Html Plugin  
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入清除廢棄檔案 Plugin 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 輸出的路徑
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  },
  module: {
    rules: [
      {
        // 打包時會遍歷所有檔案去查找有設定過的檔案後綴名稱
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        // 打包時會遍歷所有檔案去查找有設定過的檔案後綴名稱
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        // html-loader 指讀取 <src></src>，詳細解析請查閱官網
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        type: 'asset/resource',
        generator: {
          // 可以指定 hash 值的長度 
          filename: 'static/[hash:10][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
  }),
    new CleanWebpackPlugin()
  ]
}