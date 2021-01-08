module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['@babel', 'prettier'],
  extends: ['eslint:recommended', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    requireConfigFile: false
  },
  rules: {
    'prettier/prettier': 'warn'
    // 'indent': ['error', 2],
    // 'linebreak-style': ['error', 'unix'],
    // 'quotes': ['error', 'single'],
    // 'semi': ['error', 'always']
  }
};
