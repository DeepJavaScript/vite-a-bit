# Vue3 form 練習

## 使用 Vite⚡ 打包工具

[Vite⚡ 官方網站](https://vitejs.dev/)出了！

## 專案初始化

### 方法一

```shell
npm init @vitejs/app
```

會進入對話方式，決定專案名稱和套件，建立 package.json

### 方法二

```shell
chris $ npm init @vitejs/app vue3-form --template vue
npx: 5 安裝成功，花費 1.19 秒
Scaffolding project in /Users/chris/case/vite-a-bit/vue3-form/vue3-form...

Done. Now run:

  cd vue3-form
  npm install (or `yarn`)
  npm run dev (or `yarn dev`)
```

直接建立好資料來，只要照下面提供的指令即可完成專案初始化。

## 執行 dev-serve

```shell
npm run dev
```

出現 Hello world 頁面，點一下 button 出現下面的問題

![](https://i.imgur.com/iP39JQu.png)

```
Failed to load url /sw.js. Does the file exist?

Error: Failed to load url /sw.js. Does the file exist?
    at transformRequest (/Users/chris/case/vite-a-bit/vue3-form/node_modules/vite/dist/node/chunks/dep-85227760.js:66195:15
-----------------------------------------------------------------------------
Click outside or fix the code to dismiss.
You can also disable this overlay with hmr: { overlay: false } in vite.config.js.
```

但是再繼續點擊就沒有再出現了。

shell 出現錯誤訊息

```shell
19:15:18 [vite] Internal server error:
  Error: Failed to load url /sw.js. Does the file exist?
      at transformRequest (/Users/chris/case/vite-a-bit/vue3-form/node_modules/vite/dist/node/chunks/dep-85227760.js:66195:15) (x4)
```

### 關閉錯誤訊息

依錯誤息的提示 `hmr: { overlay: false }` 找到官網設定 [hmr 的介紹](https://vitejs.dev/config/#server-hmr)

關閉覆蓋版面的錯誤訊息。

```javascript
export default {
  //...
  server: {
    hmr: {
      overlay: false
    }
  }
}
```

## 看 Vue3 語法

看 [Vue3 官網](https://v3.vuejs.org/)
