module.exports = {
	'env': {
		'browser': true,
		'node': true,
		'es2021': true
	},
	// 'extends': 'eslint:recommended',
	"extends": [
		"eslint:recommended",
		"prettier",
		"prettier/babel",
		"prettier/prettier"
	],
	'parserOptions': {
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	// 'rules': {
	// 	'indent': [
	// 		'error',
	// 		'tab'
	// 	],
	// 	'linebreak-style': [
	// 		'error',
	// 		'unix'
	// 	],
	// 	'quotes': [
	// 		'error',
	// 		'double'
	// 	],
	// 	'semi': [
	// 		'error',
	// 		'always'
	// 	]
	// }
};
