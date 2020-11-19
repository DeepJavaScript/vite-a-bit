const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
    assetModuleFilename: 'images/[hash][ext]'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
				test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        
      },
      {
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
					filename: 'font/[hash][name]'
				}
			},
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Vite a bit Bootstrap',
      template: "./src/index.html",
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      "window.jQuery": "jquery",
    }),
    new MiniCssExtractPlugin({
			filename: "style.css",
		}),
  ],
};
