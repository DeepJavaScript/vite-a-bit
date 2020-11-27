const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    assetModuleFilename: 'img/[hash][ext][query]',
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    open: true,
    port: 5050,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 't6-webpack-eva',
      template: './src/index.html',
    }),
  ],
};
