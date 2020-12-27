# vite

## 建立 vite 專案
vite repo：[create-vite-app](https://github.com/vitejs/create-vite-app)

[參考 vue3 官網](https://v3.vuejs.org/guide/installation.html#vite)

```
npm init vite-app yourProjectName
```

```
npm install
```

因為 vite 建立的 vue 專案沒有 pre-processors sass、vue router、vuex，我們要手動裝

## 安裝 sass 
```
npm install -D sass
```

## 安裝 router (for vue3)
小心不要裝到 vue2 版的 router

repo：[vue-router-next](https://github.com/vuejs/vue-router-next)

```
npm i vue-router@4
```
vuemastery 教學：[Vue Router: A Tutorial for Vue 3](https://www.vuemastery.com/blog/vue-router-a-tutorial-for-vue-3/)

## 安裝 vue3 vuex (for vue3)
小心不要裝到 vue2 版的 vuex

repo：[vuex](https://github.com/vuejs/vuex/blob/4.0/docs/installation.md)

```
npm install vuex@next --save
```