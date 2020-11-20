![](https://i.imgur.com/ZDQMClP.png)

## source map

為了方便 debug，我們需要知道錯誤出在 src 中的哪個資源的哪一行程式碼，可以在 `webpack.config.js` 內設定：
```javascript
module.exports = {
  devtool: 'inline-source-map'
}
```