const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		// 依照內容的 hash ，如果內容不變，再次產出 hash 不會改變, 官網 "Caching" 章節
		filename: '[name].[contenthash]].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: ""
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		// Enable gzip compression for everything served:
		// compress: true,
		port: 9000,
		hot: true,
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		}),
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'resolve-url-loader',
					{
						loader: 'sass-loader',
						options:
						{
							sourceMap: true,
							// resolve-url-loader 的文件有寫需要這個，但 sass-loader 文件說不需要，當設置 sourceMap 時就部不需要設Contents
							// sourceMapContents: false
						}
					}
				]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'image/[name][hash:5][ext]'
				}
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
		]
	},
}