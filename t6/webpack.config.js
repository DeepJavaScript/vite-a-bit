const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 
 module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: '8888',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'T6',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    }),
  ],
  module: {
    rules: [
      // css loader 是為了 swiper 而設定的， swiper 的樣式是用 css 寫的
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader']
      // },
      // scss loader 要放在前面，這裡有先後順序的必要，會按照 use 的順序執行(由下往上)，所以一開始定要先 compile scss 接著 load css 然後才拆出檔案
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../'
              }
            },
            "css-loader",
            // "resolve-url-loader",
            "sass-loader"
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash:8][ext]'
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      }
    ]
  }
};