const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  // devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:4].css',
    }),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: "./src/index.html",
      // meta: {
      //   viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      // },
    }),
    // version must @next
//     (node:94791) [DEP_WEBPACK_COMPILATION_ASSETS] DeprecationWarning: Compilation.assets will be frozen in future, all modifications are deprecated.
// BREAKING CHANGE: No more changes should happen to Compilation.assets after sealing the Compilation.
//         Do changes to assets earlier, e. g. in Compilation.hooks.processAssets.
//         Make sure to select an appropriate stage from Compilation.PROCESS_ASSETS_STAGE_*.
  ],
  output: {
    filename: '[name].[hash:4].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: "img/[name].[hash:4][ext]"
        }
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './'
            }
          }, {
            loader: 'css-loader', // translates CSS into CommonJS modules
          }, {
            loader: 'postcss-loader', // Run post css actions
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "precss",
                    "autoprefixer",
                  ],
                ]
              }
            }
          }, {
            loader: 'sass-loader' // compiles Sass to CSS
          }],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};