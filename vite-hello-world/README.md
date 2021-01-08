Vite Hello World
===

- [Getting Started | Vite⚡](https://vitejs.dev/guide/)
- [vitejs/awesome-vite: ⚡️ A curated list of awesome things related to Vite.js](https://github.com/vitejs/awesome-vite)
- [Introduction | Rollup Plugin Vue](https://rollup-plugin-vue.vuejs.org/)
- [備戰 2021：vite 工程化實踐](https://juejin.cn/post/6910014283707318279)

---

# CSS pre-processor

原本 Vite 只針對現代瀏覽器，所以建議將 native CSS 變數與實作 CSSWG 草案 (例如：[postcss-nesting](https://github.com/jonathantneal/postcss-nesting)) 並寫符合未來標準的 CSS 的 PostCSS plugin 一起使用。

若想改用 CSS pre-processor，需安裝對應的 pre-processor。

例如：我想用 Sass：

```shell
npm i -D sass
```


在 SFC 使用 Sass：

```html
<style lang="scss">
/* use scss */
</style>
```


或在 JS import：

```javascript
import './style.scss'
```


如果想對 CSS pre-processor 做額外的設定，需在 `vite.config.js` 的 `cssPreprocessOptions` option 內設定：

```javascript
// vite.config.js
export default {
  cssPreprocessOptions: {
    scss: {
      // ...
    }
  }
}
```

詳情可參閱：
- [vitejs/vite | Passing Options to Pre-Processor](https://github.com/vitejs/vite#passing-options-to-pre-processor)
- [vitejs/vite | Config File](https://github.com/vitejs/vite#config-file)
- [vite/config.ts at master · vitejs/vite](https://github.com/vitejs/vite/blob/master/src/node/config.ts)


## 在每個 SCSS 前加上樣式

需在 `scss` option 內設定 `additionalData`：

```javascript
// vite.config.js
export default {
  cssPreprocessOptions: {
    scss: {
      additionalData: `
        @import "./src/assets/scss/shared.scss";
      `
    }
  }
};
```


要注意的是，千萬不要將會產生 CSS 的 SCSS 檔設定在 `additionalData`！否則只要使用 Sass 或 import 的 Sass 都會在前面加上 `additionalData` 提供的樣式，編譯後的 CSS 就會爆多 XD。


資料來源：
- [vitejs/vite: Native-ESM powered web dev build tool. It's fast.](https://github.com/vitejs/vite#css-pre-processors)
- [Global SCSS Imports · Issue #832 · vitejs/vite](https://github.com/vitejs/vite/issues/832#issuecomment-712448467)


> 疑問：與 Vue CLI 的 `sass-loader` 設定一樣嗎？還是不同？

為何可以設定 `additionalData`？為何 `additionalData` 可以自動在每個 SCSS 檔前面加上樣式？我找到證據的過程如下：

```typescript
// https://github.com/vitejs/vite/blob/master/src/node/config.ts
import { SFCStyleCompileOptions } from '@vue/compiler-sfc'

export type PreprocessLang = NonNullable<
  SFCStyleCompileOptions['preprocessLang']
>

export type PreprocessOptions = SFCStyleCompileOptions['preprocessOptions']

export type CssPreprocessOptions = Partial<
  Record<PreprocessLang, PreprocessOptions>
>

export interface SharedConfig {
  // ...
  cssPreprocessOptions?: CssPreprocessOptions
}
```

接著看 [`@vue/compiler-sfc`](https://github.com/vuejs/vue-next/tree/master/packages/compiler-sfc) 原始碼：

```typescript
// https://github.com/vuejs/vue-next/blob/master/packages/compiler-sfc/src/index.ts
export { SFCStyleCompileOptions } from './compileStyle'
```

```typescript
// https://github.com/vuejs/vue-next/blob/master/packages/compiler-sfc/src/compileStyle.ts
import { processors, PreprocessLang } from './stylePreprocessors'

export interface SFCStyleCompileOptions {
  // ...
  preprocessLang?: PreprocessLang
  preprocessOptions?: any
}

export function compileStyle(
  options: SFCStyleCompileOptions
): SFCStyleCompileResults {
  return doCompileStyle({
    ...options,
    isAsync: false
  }) as SFCStyleCompileResults
}

export function doCompileStyle(
  options: SFCAsyncStyleCompileOptions
): SFCStyleCompileResults | Promise<SFCStyleCompileResults> {
  const {
    // ...
    preprocessLang
  } = options
  const preprocessor = preprocessLang && processors[preprocessLang]
  const preProcessedSource = preprocessor && preprocess(options, preprocessor)
  // ...
}
```

```typescript
// https://github.com/vuejs/vue-next/blob/master/packages/compiler-sfc/src/stylePreprocessors.ts

// .scss/.sass processor
const scss: StylePreprocessor = (source, map, options, load = require) => {
  // 這邊很有趣，明明 `sass` 套件已將是 Dart Sass 了，命名還是用 `nodeSass`
  const nodeSass = load('sass')
  const finalOptions = {
    ...options,
    data: getSource(source, options.filename, options.additionalData),
    file: options.filename,
    outFile: options.filename,
    sourceMap: !!map
  }

  try {
    const result = nodeSass.renderSync(finalOptions)
    const dependencies = result.stats.includedFiles
    if (map) {
      return {
        code: result.css.toString(),
        map: merge(map, JSON.parse(result.map.toString())),
        errors: [],
        dependencies
      }
    }

    return { code: result.css.toString(), errors: [], dependencies }
  } catch (e) {
    return { code: '', errors: [e], dependencies: [] }
  }
}

// 重點就是 `additionalData` 可以自動在每個 SCSS 檔前面加上樣式的關鍵
// `additionalData + source` 就是這個證據！
function getSource(
  source: string,
  filename: string,
  additionalData?: string | ((source: string, filename: string) => string)
) {
  if (!additionalData) return source
  if (isFunction(additionalData)) {
    return additionalData(source, filename)
  }
  return additionalData + source
}

export type PreprocessLang = 'less' | 'sass' | 'scss' | 'styl' | 'stylus'

export const processors: Record<PreprocessLang, StylePreprocessor> = {
  less,
  sass,
  scss,
  styl,
  stylus: styl
}
```


後來在測試看到 [`compileStyle()`](https://github.com/vuejs/vue-next/blob/master/packages/compiler-sfc/src/compileStyle.ts#L65) 的使用範例：

```typescript
// https://github.com/vuejs/vue-next/blob/master/packages/compiler-sfc/__tests__/compileStyle.spec.ts#L319
describe('SFC style preprocessors', () => {
  // ...
  test('scss respect user-defined string options.additionalData', () => {
    const res = compileStyle({
      preprocessOptions: {
        additionalData: `
          @mixin square($size) {
            width: $size;
            height: $size;
          }`
      },
      source: `
        .square {
          @include square(100px);
        }
      `,
      filename: path.resolve(__dirname, './fixture/test.scss'),
      id: '',
      preprocessLang: 'scss'
    })

    expect(res.errors.length).toBe(0)
  })
  // ...
})
```


看以上原始碼，可以知道 Vue 3 的 compiler 是用 `@vue/compiler-sfc`，那 Vue 2 呢？看 [`@vue/cli-service`](https://github.com/vuejs/vue-cli/tree/master/packages/%40vue/cli-service) 原始碼就知道了！

```javascript
// https://github.com/vuejs/vue-cli/blob/master/packages/%40vue/cli-service/lib/config/base.js#L71

module.exports = (api, options) => {
  api.chainWebpack(webpackConfig => {
    // vue-loader --------------------------------------------------------------
    // try to load vue in the project
    // fallback to peer vue package in the instant prototyping environment
    const vue = loadModule('vue', api.service.context) || loadModule('vue', __dirname)

    if (vue && semver.major(vue.version) === 2) {
      // for Vue 2 projects
      const vueLoaderCacheConfig = api.genCacheConfig('vue-loader', {
        'vue-loader': require('vue-loader/package.json').version,
        '@vue/component-compiler-utils': require('@vue/component-compiler-utils/package.json').version,
        'vue-template-compiler': require('vue-template-compiler/package.json').version
      })
      // ...
    } else if (vue && semver.major(vue.version) === 3) {
      // for Vue 3 projects
      const vueLoaderCacheConfig = api.genCacheConfig('vue-loader', {
        'vue-loader': require('vue-loader-v16/package.json').version,
        '@vue/compiler-sfc': require('@vue/compiler-sfc/package.json').version
      })
      // ...
    }
  })
}
```


可以看到 Vue 2 用了兩個與 compiler 相關的套件：
- `@vue/component-compiler-utils`
- `vue-template-compiler`


# 強制開啟 Vue devtools

> 後來發現會自己啟用，所以不需要了！

[Vue devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg) 的 [README](https://github.com/vuejs/vue-devtools/tree/next#force-enable-the-devtools) 是這樣說的：

```javascript
// Before you create app
Vue.config.devtools = process.env.NODE_ENV === 'development'

// After you create app
window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor

// then had to add in ./store.js as well.
Vue.config.devtools = process.env.NODE_ENV === 'development'
```

但實際嘗試後，有些寫法是錯的：
- 第二段的 `app.constructor` 應該是 `app` 才對
- Vue 3 不能直接 import 整個 `Vue`，所以第一和第三段都是錯的，應該是透過 `createApp()` 建立的 instance 才對


後來找到以下寫法可以運作，但一定要在 `mount()` 之前設定，所以寫法比較丑：

```javascript
const app = createApp(App)
  .use(store)
  .use(router);

if (process.env.NODE_ENV === 'development') {
  if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in window) {
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app;
  }
  app.config.devtools = true;
}

app.mount('#app');
```


但後來看到寫成 Vue Plugin 的作法更方便管理：

```javascript
// devtools.js
const devtools = {
	install(app) {
		if (
      process.env.NODE_ENV === 'development' &&
      window.__VUE_DEVTOOLS_GLOBAL_HOOK__
    ) {
      window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app;
      app.config.devtools = true;
		}
	}
};

export default devtools;
```

```javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import devtools from './devtools';
import router from './router';
import store from './store';

createApp(App)
  .use(devtools)
  .use(store)
  .use(router)
  .mount('#app');
```


資料來源：
- [vue3.0 調試工具 vue-devtools 在 chrome 不顯示_個人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000038377431)
- [vuejs/vue-devtools at next](https://github.com/vuejs/vue-devtools/tree/next#force-enable-the-devtools)
- [Vue.js is not detected with vue@3.0.0-rc.4 · Issue #1244 · vuejs/vue-devtools](https://github.com/vuejs/vue-devtools/issues/1244#issuecomment-690915714)


# 讓 VS Code 認識 alias 路徑

在專案根目錄加上 `jsconfig.json`：

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "/@/*": ["src/*"]
    },
    "target": "es6",
    "module": "esnext"
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist"
  ]
}
```

資料來源：
- [`jsconfig.json` Reference | VS Code Docs](https://code.visualstudio.com/docs/languages/jsconfig#_using-webpack-aliases)
- [TypeScript: Documentation - What is a tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [TypeScript: TSConfig Reference - Docs on every TSConfig option](https://www.typescriptlang.org/tsconfig)


# Vue 3

## `<script setup>` RFC

- import 的任何東西 (包括 component) 都可直接在 template 使用
- 就像在 `setup()` 中寫 Composition API code，但不用手動 return 東西
- `<HelloWorld>` 的 `msg` 不能設為 `"HelloWorld"`，可能是值與元件名稱衝突

```html
<template>
  <div class="counter">
    <p>initCount: {{ initCounter }}</p>
    <p class="count">doubleCount: {{ doubleCount }}</p>
    <div class="counter-action">
      <button @click="increment">increment</button>
      <button @click="reset">reset</button>
    </div>

    <HelloWorld
      msg="Counter2"
      :count="count2"
      @increment="increment2"
      @reset="reset2"
    />
  </div>
</template>

<script setup>
import HelloWorld from '/@/components/HelloWorld.vue';

import useCounter from '/@/composition/useCounter';

// `initCount` 故意不用 `ref()`，因為此值不需要 reactive
const initCounter = 6;
// 故意不解構 `count`，代表可自行決定此元件所需的資料或邏輯，不需要就不解構出來
const { doubleCount, increment, reset } = useCounter({
  initCounter,
  isResetToInitCounter: true
});
</script>
```

詳情可參閱：
- [rfcs/0000-sfc-script-setup.md at sfc-improvements · vuejs/rfcs](https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-script-setup.md)
- [New `script setup` (without ref sugar) by yyx990803 · Pull Request #227 · vuejs/rfcs](https://github.com/vuejs/rfcs/pull/227)


# Vuex 4

未來的 Vuex 5：[Kia King // The State of VueX at Vuejs Global - YouTube](https://www.youtube.com/watch?v=ajGglyQQD0k)

## Getting Started

建立新的 store instance：

```javascript
// src/store/index.js
import { createStore } from "vuex";

import counter from './counter';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    counter
  }
});
```


```javascript
// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

createApp(App)
  .use(store)
  .mount('#app');
```


使用 Composition API：

```javascript
import { computed } from 'vue';
import { useStore } from 'vuex'

export default {
  name: 'CounterWithVuex',
  setup () {
    const store = useStore();

    return {
      count: computed(() => store.getters['counter/count']),
      doubleCount: computed(() => store.getters['counter/doubleCount']),
      increment: () => store.dispatch('counter/increment'),
      reset: () => store.dispatch('counter/reset')
    }
  }
};
```


使用 [`@vueblocks/vue-use-vuex`](https://github.com/vueblocks/vue-use-utilities)：

> 會使用此套件的原因：目前 Vuex 未提供 `map` 系列 helper 與 Composition API 一起使用

```javascript
import { useVuex } from '@vueblocks/vue-use-vuex';

export default {
  name: 'CounterWithVuexOtherLibrary',
  setup() {
    const { useGetters, useActions } = useVuex();

    return {
      ...useGetters({
        count: 'counter/count',
        doubleCount: 'counter/doubleCount',
      }),
      ...useActions({
        increment: 'counter/increment',
        reset: 'counter/reset'
      })
    }
  }
};
```


# Vue Router

```javascript
// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
// import About from './views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // component: About
    component: () => import('./views/About.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
```


```javascript
// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .mount('#app');
```


# ESLint + Prettier

安裝套件：

```shell
$ npm i -D eslint prettier \
  @vue/eslint-config-prettier \
  eslint-plugin-prettier \
  eslint-plugin-vue
```


設定 ESLint：

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
```


設定 Prettier：

```javascript
// .prettierrc.js
module.exports = {
  singleQuote: true,
  trailingComma: 'none'
};
```


整合 VS Code 的設定 (記得安裝 [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint))：

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },

  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "vue-html": "html",
    "vue": "html"
  },
  "emmet.syntaxProfiles": {
    "vue-html": "html",
    "vue": "html"
  },

  "vetur.validation.template": false,

  "eslint.validate": [
    "javascriptreact",
    "javascript",
    "vue"
  ]
}
```
