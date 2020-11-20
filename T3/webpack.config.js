const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const PurgeCSSPlugin = require('purgecss-webpack-plugin');
// const glob = require('glob');
// const PATHS = {
//     src: path.join(__dirname, 'src')
// }

module.exports = {
    entry: './src/index.js',
    // entry: {
    //     app: './src/index.js',
    //     print: './src/print.js',
    // },
    // entry: {
    //     // index: './src/index.js',
    //     // another: './src/another-module.js',
    //     index: {
    //         import: './src/index.js',
    //         // dependOn: 'shared',
    //     },
    //     another: {
    //         import: './src/another-module.js',
    //         // dependOn: 'shared',
    //     },
    //     // shared: 'lodash',
    // },
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './',
    },
    // optimization: {
    //     // runtimeChunk: 'single',
    //     splitChunks: {
    //         name: 'styles',
    //         chunks: 'all',
    //     },
    // },
    mode: 'development',
    //看不出差異
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        // true 會打開 src 資料夾
        open: 'Google Chrome'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            // {
            //     test: /\.(eot|ttf|woff|woff2)$/,
            //     type: 'asset/resource',
            //     generator: {
            //         filename: 'font/[hash:10][ext]'
            //     }
            // },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[hash:10][ext]'
                }
            },
            {
                exclude: /\.(html|css|js|png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[hash:10][ext]'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].bundle.css",
            chunkFilename: '[id].css',
        }),
        // new PurgeCSSPlugin({
        //     paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
        // }),
    ]
}