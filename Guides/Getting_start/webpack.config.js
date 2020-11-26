const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, 'dist')
  }
}