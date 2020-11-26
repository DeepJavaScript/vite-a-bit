const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '' // ! live server
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.s(c|a)ss$/i,
        use: [
          {
            // MiniCssExtractPlugin 單一為每個 JS 建立一個 css 文件
            loader: MiniCssExtractPlugin.loader,
            options: {
              // ! 重要
              // 當設置時需要設置 publicPath 否則會出現路徑錯誤：Automatic publicPath is not supported in this browser
              // publicPath 預設值為 webpackOptions.output.publicPath，所以只需要設置 webpackOptions.output.publicPath 後便不會出現上述錯誤
              // publicPath: '' // ! 不一定需要在此設置
            }
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        // 分成 asset/inline asset/resource 兩種
        type: 'asset',
        // 生成檔名以及位置設定
        // hash 雜湊 可指定生成數量
        // ext 副檔名 Extension with leading
        generator: {
          filename: 'image/[hash:8][ext]'
        },
        parser: {
          dataUrlCondition: {
            // 預設是 8kb 以上的圖片會使用 resource 小於 8kb 則使用 inline 減少 http 請求次數，小圖片及文字建議可以使用 inline
            maxSize: 4 * 1024 // 4kb
          }
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    // CleanWebpackPlugin 清除每次的生成檔案，由於 webpack 只負責生成，所以設定過程中生成的非必要檔案透過該 plugin 清除
    new CleanWebpackPlugin(),
    // MiniCssExtractPlugin 單一為每個 JS 引入的 css 建立一個 css 文件
    new MiniCssExtractPlugin(),
    // 生成 HTML 檔案
    new HtmlWebpackPlugin({
      title: 'T5',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      template: './index.html'
    })
  ],
  optimization: {
    // 若是 development 模式，CssMinimizerPlugin 需要設定 minimize: true 才有作用
    minimize: true,
    minimizer: [
      // CssMinimizerPlugin 最小化 css 檔案
      // 最小化後和沒有最小化的 css 檔案相比為 5.8KB vs 5.87KB
      new CssMinimizerPlugin()
    ]
  }
}
