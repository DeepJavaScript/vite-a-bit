const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '../', dir);
}

module.exports = {
  entry: [
    './src/main.js',
    './src/assets/css/reset.css',
  ],
  plugins: [
    // new ESLintPlugin({
    //   // for CD/CI report
    //   fix: true,
    //   outputReport: true, // not work
    // }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:4].css',
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'JS30-30',
      template: './public/index.html',
      // meta: {
      //   viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      // },
    }),
    // version must @next
    // (node:94791) [DEP_WEBPACK_COMPILATION_ASSETS] DeprecationWarning:
    // Compilation.assets will be frozen in future, all modifications are deprecated.
    // BREAKING CHANGE: No more changes should happen to Compilation.assets after sealing
    // the Compilation.
    // Do changes to assets earlier, e. g. in Compilation.hooks.processAssets.
    // Make sure to select an appropriate stage from Compilation.PROCESS_ASSETS_STAGE_*.
    // (node:37394) [DEP_WEBPACK_TEMPLATE_PATH_PLUGIN_REPLACE_PATH_VARIABLES_HASH]
    // DeprecationWarning: [hash] is now [fullhash]
    // (also consider using [chunkhash] or [contenthash], see documentation for details)
  ],
  output: {
    filename: '[name].[hash:4].bundle.js',
    path: resolve('dist'),
    publicPath: './',
  },
  resolve: {
    symlinks: false,
    alias: {
      '@': resolve('src'),
    },
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      type: 'asset',
      generator: {
        filename: 'img/[name].[hash:4][ext]',
      },
      parser: {
        dataUrlCondition: {
          maxSize: 4 * 1024, // 4kb
        },
      },
    }, {
      test: /\.(css|s[ac]ss)$/i,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '../',
        },
      }, {
        loader: 'css-loader', // translates CSS into CommonJS modules
      }, {
        loader: 'postcss-loader', // Run post css actions
        options: {
          postcssOptions: {
            plugins: [
              [
                'precss',
                'autoprefixer',
              ],
            ],
          },
        },
      }, {
        loader: 'sass-loader', // compiles Sass to CSS
      }],
    },
    ],
  },
};
