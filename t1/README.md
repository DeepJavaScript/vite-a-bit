# t1

## 遇到的錯誤

### question 1
```
/******/  if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");                            ^
  Error: Automatic publicPath is not supported in this browser
```

解決方法： 在 webpack.config.js 裡多加 output.publicPath: ""
publicPath 預設值是 "auto"，


### question 2
```
Multiple chunks emit assets to the same filename main.js
```
![](./README-image/error-some-name.png)

解決方法： 改掉寫死的 output.filename ("main.js"), 改為動態的名稱 ("[name].js")

## 嘗試使用 purgecss-webpack-plugin 幫 只用了裡面四個 icon 的 fontawesome 減肥

* 跟 mini-css-extract-plugin 一起搭配服用

* before

![](./README-image/before.png)

* after

![](./README-image/after.png)
