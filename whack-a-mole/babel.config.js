module.exports = {
	presets: [
		[
			// README.md Q1
			'@babel/env',
			{
				// default value is "{}", if wanna set it to default, you have to explicitly pass it: "default".
				// will be change in babel v8
				// "targets": {
				// "edge": "17",
				// "firefox": "60",
				// "chrome": "67",
				// "safari": "11.1"
				// },
				useBuiltIns: 'usage',
				corejs: '3',
				// bugfixes defaults to false, but enabled by default in bable 8, how about babel-loader ^8 ??
				bugfixes: false,
				debug: true,
			},
		],
	],
}