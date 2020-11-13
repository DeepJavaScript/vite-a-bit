const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: './',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash:8][ext]'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
};
