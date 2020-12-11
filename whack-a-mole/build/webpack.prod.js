// const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
  ],
  optimization: {
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          filename: '[name].[hash:4][ext]',
          reuseExistingChunk: true,
        },
        default: {
          reuseExistingChunk: true,
        },
      },
    },
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...`
      // syntax to extend existing minimizers
      // (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`
      new CssMinimizerPlugin(),
    ],
  },
});
