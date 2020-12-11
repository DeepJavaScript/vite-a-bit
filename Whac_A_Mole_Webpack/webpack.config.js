const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    }),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: 'index.html'
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // assetModuleFilename: 'images/[hash:5][ext][query]',
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // 把 css 打包出去 https://webpack.js.org/plugins/mini-css-extract-plugin/
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        generator: {
          filename: 'css/[hash][ext][query]'
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash:8][ext][query]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'vender/[hash:8][ext][query]'
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  mode: "development"
};