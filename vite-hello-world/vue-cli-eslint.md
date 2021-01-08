Vue CLI ESLint 設定
===

若要看 Vue CLI 是怎麼配置 ESLint + Prettier，可以看 [`@vue/cli-plugin-eslint`](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint) 的原始碼：
- [vue-cli/index.js at dev · vuejs/vue-cli](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-plugin-eslint/generator/index.js)
- [vue-cli/eslintDeps.js at dev · vuejs/vue-cli](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-plugin-eslint/eslintDeps.js)

裡面詳細說明在 `vue create` 建立專案時，選擇 ESLint 的設定時有很多選項，這些選項個別需安裝哪些 npm 套件，要配置哪些設定檔。

例如：ESLint + Prettier 需要的套件如下：
- `eslint`
- `prettier`
- `@vue/eslint-config-prettier`
- `eslint-plugin-prettier`
- `eslint-plugin-vue`
- 若有 Babel 需額外安裝：
  - `@babel/eslint-parser`
  - `@babel/core`


下面是 Vue CLI 提供 Vue 2 專案的 `.eslintrc.js` 設定：

```javascript
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/prettier'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': ["error", {
      "varsIgnorePattern": "^_",
      "argsIgnorePattern": "^_"
    }]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
```


與 ESLint 相關的套件：

```json
{
  "devDependencies": {
    "@vue/cli-plugin-eslint": "~4.5.0",
    "@vue/eslint-config-prettier": "^6.0.0",
    "babel-eslint": "^10.1.0",
    "eslint": "^6.7.2",
    "eslint-plugin-prettier": "^3.1.3",
    "eslint-plugin-vue": "^6.2.2",
    "prettier": "^1.19.1"
  }
}
```


## `extends` 的 `plugin:vue/essential`

下面是 `extends` 的 `plugin:vue/essential` 設定 (省略了 rule)：
- 參考原始碼：[eslint-plugin-vue/base.js at master · vuejs/eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/configs/base.js)

```javascript
const config = {
  root: true,
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: ['vue'],
}
```


## `extends` 的 `@vue/prettier`

跟 [`@vue/eslint-config-prettier`](https://www.npmjs.com/package/@vue/eslint-config-prettier) 這個套件有關，看[原始碼](https://github.com/vuejs/eslint-config-prettier/blob/master/index.js)：

```javascript
// index.js
module.exports = {
  plugins: ['prettier'],
  extends: [
    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-prettier/vue')
  ],
  rules: {
    'prettier/prettier': 'warn'
  }
}
```

接著看 [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier) 套件在 [GitHub README](https://github.com/prettier/eslint-config-prettier#installation) 說明的使用方式：

```javascript
module.exports = {
  "extends": ["prettier"]
}
```



## `env`

在專案的 `.eslintrc.js` 需要設定 `env.node` 是因為我們用 Vue CLI，所以需要 Node 環境：

```javascript
module.exports = {
  env: {
    // 有用 Vue CLI 才需要 node
    node: true
  }
};
```

:::warning
若是只用 CDN 之類的專案也要用 ESLint 設定，也許可以不用設定 `env.node` 吧？
:::


## `parserOptions.parser`

`parserOptions` 的設定很特別，在 [`eslint-plugin-vue` 文件](https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser)內有特別提到：

```javascript
module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  }
};
```


若要使用自訂的 parser，例如：[`babel-eslint`](https://www.npmjs.com/package/babel-eslint) (舊的，Babel 建議安裝 [`@babel/eslint-parser`](https://www.npmjs.com/package/@babel/eslint-parser) ) 或 [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser)，需在 `parserOptions.parser` option 設定，而不是 `parser` option。

因為 `eslint-plugin-vue` plugin 需要 [`vue-eslint-parser`](https://www.npmjs.com/package/vue-eslint-parser) 來解析 `.vue` 檔，若你覆蓋了 `parser` option，`eslint-plugin-vue` plugin 就會失效：

```diff
  module.exports = {
-   "parser": "babel-eslint",
+   "parser": "vue-eslint-parser",
    "parserOptions": {
+     "parser": "babel-eslint"
    }
  };
```

:::warning
特別去找 ESLint 對於 `parserOptions` option 的說明，根本沒有 `parserOptions.parser` option ...，可能是 `eslint-plugin-vue`自己加的 (害我找好久...
:::

:::danger
而且目前刪掉 `parserOptions.parser` 很像不會影響到 Vue 的 ESLint 設定，不知道拿掉會如何？
:::


## `rules`

```javascript
module.exports = {
  parserOptions: {
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
```


## `overrides`

為了 Jest 測試，多設定了 `env.jest`：

```javascript
module.exports = {
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
```


所以整合以上的設定如下：

```javascript
module.exports ={
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['prettier'],
  plugins: ['prettier'],
  // parser: 'vue-eslint-parser'
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    // parser: 'babel-eslint'
  },
  rules: {
    'prettier/prettier': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
```

> 註解部份就是 Vue 獨有的 ESLint 設定 (為了參考 Vue 是如何設定 ESLint，讓其他類型的專案可以參考)
