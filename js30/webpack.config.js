const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: "",
	},
	devtool: 'inline-source-map',
	// devServer: {
	// 	contentBase: path.join(__dirname, 'dist'),
	// 	port: 9000,
	// 	hot: true,
	// },
	plugins: [
		new CleanWebpackPlugin({
			// cleanStaleWebpackAssets: false,
		}),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: require('./babel.config.js'),
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader',
				]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'image/[name][ext]'
				}
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
		]
	},
}
