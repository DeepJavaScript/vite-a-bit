const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style/main.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash:8][ext]'
        }
      },
      {
        test: /@fortawesome\/fontawesome-free.*\.(svg|eot|ttf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'vendor/font-awesome/[name].[hash:8][ext]'
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ]
  }
};