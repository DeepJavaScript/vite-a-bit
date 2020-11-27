const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
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
							// sourceMapContents: false
							// resolve-url-loader 的文件有寫需要這個，但 sass-loader 文件說不需要，當設置 sourceMap 時就部不需要設Contents
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