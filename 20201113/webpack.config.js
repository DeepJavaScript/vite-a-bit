const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "yachen-t1",
      template: 'index.html'
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
        loader: "url-loader",
        options: {
          limit: 8192,
          esModule: false
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
};
