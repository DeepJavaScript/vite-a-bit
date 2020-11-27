# vite a bit

> 發音小教室
> vite [vɪt] ([KK音標](https://zh.wikipedia.org/wiki/KK%E9%9F%B3%E6%A8%99))

## 基本資訊

活動型式: workshop

> 每週有一個進度，依進度實作或進行研究
> 每一週活動日，進行一週實作互評與經驗&ISSUE分享

時間: 每週選一天下午到晚上來進行活動

> 每週日

git: [vite-a-bit](https://github.com/DeepJavaScript/vite-a-bit)


## 規則

這是一個實作學習，所以要做練習。
不開放旁聽。

- 沒實作
- 缺席
- 不小心上傳到 `main` 分支

罰則: 就可以不用來了

## git 記錄型式

分支: 每一個人一個分支，每一個都要寫 README.md
tag: `聚會日期.英文名字.專案資料夾名稱.版號` (ex: `20201113.chris.2`)
資料夾: 做了幾個練習 project

不能上傳到 main 分支

tags

- `20201113.chris.t2.1`
- `20201113.chris.t2_t3.2` 一次做兩個專案
- `20201126.chris.t4.1`

## 進度

想要學什麼？

(寫下你要學的關鍵字)

1. 預備: 開你的分支上傳到 repo
1. webpack 打包
    - 原生寫法，選一個渲染出來 + [guide 看到 Asset Management](https://webpack.js.org/guides/output-management/)
    - Bootstrap，選一個渲染出來 + [guide 看到 Code Splitting](https://webpack.js.org/guides/code-splitting/)
    - Sass 選一個渲染出來 + [Environment Variables](https://webpack.js.org/guides/environment-variables/) + [Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/)
    - 下次: Tree Shaking、Production
1. webpack, vue-loader, with eslint/prettier
   - [guide 看到 Lazy Loading](https://webpack.js.org/guides/lazy-loading/)
   - ESlint, Prettier, Babel 獨立練習，先練習完後再裝 `loader`
       - [ESLint - Pluggable JavaScript linter](https://eslint.org/)
       - [Prettier · Opinionated Code Formatter](https://prettier.io/)
       - [Babel · The compiler for next generation JavaScript](https://babeljs.io/)
   - eslint-loader, babel-loader + webpack
   - browserlist
       - [browserslist/browserslist: 🦔 Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env](https://github.com/browserslist/browserslist)
       - cover TW 90%
2. rollupjs 打包 (反思 webpack), with eslint/prettier
3. vite,
4. vue-cli 環境設定, config 全餐
5. vue3,
6. Composition API (Vue2/3)
7. vue-router,
8. vuex,
9. [vue 官網沒寫的 vue](https://hackmd.io/zYPD_lQ6R--UbU4jFYWzfw),
10. vue-rx,
11. vue-typescript,



