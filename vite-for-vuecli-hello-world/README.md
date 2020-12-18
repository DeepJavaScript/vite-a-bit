# Vite

## [安裝 sass](https://github.com/vitejs/vite#css-pre-processors)

pre-processors 要透過 `postcss-nesting` 來處理

```shell
npm install -D sass
```

就可以這樣寫 scss

```html
<style lang="scss">
/* use scss */
</style>
```

或引用 scss

```javascript
import './style.scss'
```

[其它設定](https://github.com/vitejs/vite#passing-options-to-pre-processor)

[If I upgrade to Vue 3, will I also have to upgrade Vuex and Vue Router?](https://vue3js.cn/docs/guide/migration/introduction.html#if-i-upgrade-to-vue-3-will-i-also-have-to-upgrade-vuex-and-vue-router)

## vue router

安裝 [vue-router-next](https://github.com/vuejs/vue-router-next)

```shell
npm install vue-router@4
```

[初始教學](https://next.router.vuejs.org/guide/#javascript)

## vuex

安裝 [vuex@next](https://github.com/vuejs/vuex/blob/4.0/docs/installation.md)

```shell
npm install vuex@next --save
```

使用 [sample code](https://github.com/vuejs/vuex/blob/4.0/examples/composition/counter/app.js)
