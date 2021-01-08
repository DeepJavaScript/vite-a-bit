Babel + browserslist + ESLint + Prettier
===

# 問題

## 不同格式的 format

```shell
$ npm run eslint

> js30@1.0.0 eslint /home/titan/project/goodidea-frontend/vite-a-bit/js30
> eslint src/**/*.*


/home/titan/project/goodidea-frontend/vite-a-bit/js30/src/images/dirt.svg
  0:0  warning  File ignored because of a matching ignore pattern. Use "--no-ignore" to override

/home/titan/project/goodidea-frontend/vite-a-bit/js30/src/images/mole.svg
  0:0  warning  File ignored because of a matching ignore pattern. Use "--no-ignore" to override

✖ 2 problems (0 errors, 2 warnings)
```


# 其他

- [benmosher/eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import#importparsers)
- [@babel/eslint-parser @babel/eslint-plugin does not play nice with eslint-plugin-import · Issue #11975 · babel/babel](https://github.com/babel/babel/issues/11975)
  ```
  Parsing error: No Babel config file detected for .eslintrc.js. Either disable config file checking with requireConfigFile: false, or configure Babel so that it can find the config files.
  ```
- [Publish, ship, and install modern JavaScript for faster applications](https://web.dev/publish-modern-javascript/)

---

# JS30 專案建制

- [babel/eslint/babel-eslint-parser at main · babel/babel](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser)

測試 Babel 是否正確 polyfill 的程式碼：

```javascript
// generator function
function* generatorFunc(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}
const generator = generatorFunc(10);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

// # ES2016
const ES2016 = 'xxx'.includes('x');
console.log(ES2016);

// # ES2017
const ES2017 = Object.entries({ a: 1 });
console.log(ES2017);

// # ES2018
const ES2018 = Promise.resolve(1).finally();
console.log(ES2018);

// # ES2019
const ES2019 = Object.fromEntries([['a', 1]]);
console.log(ES2019);

// # ES2020
const ES2020 = 'abc'.matchAll(/\w/g);
console.log([...ES2020]);

// # ES2021
const ES2021 = null ?? 'default';
console.log(ES2021);
```

資料來源：[proposals/finished-proposals.md at master · tc39/proposals](https://github.com/tc39/proposals/blob/master/finished-proposals.md)

設定 [browserslist](https://github.com/browserslist/browserslist)：

```json
// .browserslistrc
> 1%
not dead
not ie <= 11
```

設定 Babel：

- 透過 `"useBuiltIns": "usage"` 自訂加上所需的 polyfill
- 一定要透過 `corejs` 指定 core-js 的版本

```json
// babel.config.json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": "3.8.1"
      }
    ]
  ]
}
```

:::info
Babel 文件雖然有建議 7.4.0 開始不要推薦使用 `@babel/polyfill`，應改為直接 `import 'core-js/stable'` 和 `import 'regenerator-runtime/runtime'`，但設定 `"useBuiltIns": "usage"` 就無須手動 polyfill。
:::

Webpack 設定：

- 所有 JS 檔案透過 `babel-loader` 處理
- 因為已有設定 `babel.config.json`，所以不用額外設定 `use.options`
  ```javascript
  {
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }
  ```

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
```

若要看 `browserslist` 的設定涵蓋哪些瀏覽器，可執行以下指令：

```shell
$ npx browserslist
and_chr 87
chrome 87
chrome 86
edge 86
firefox 82
ios_saf 14.0-14.2
ios_saf 13.4-13.7
safari 14
samsung 12.0
```

若想直接看 Babel 的編譯結果，不要再透過 Webpack 打包，可執行以下指令：

```shell
$ npx babel src --out-dir lib
Successfully compiled 1 file with Babel (433ms).
```


## ESLint + Prettier

`eslint-config-prettier` 附帶的 CLI 工具，可幫你檢查 config 中是否有包含不必要或與 Prettier 衝突的規則：

```javascript
$ npx eslint-config-prettier src/main.js
The following rules are unnecessary or might conflict with Prettier:

- indent
- linebreak-style
- semi

The following rules are enabled but cannot be automatically checked. See:
https://github.com/prettier/eslint-config-prettier#special-rules

- quotes
```

沒有任何不必要的或與 Prettier 衝突的規則會顯示以下訊息：

```shell
$ npx eslint-config-prettier src/main.js
No rules that are unnecessary or conflict with Prettier were found.
```


## ESLint Parser 設定

參考：
- [`@babel/eslint-parser` 的 README](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser#additional-parser-configuration)
- [Configuring ESLint - ESLint - Pluggable JavaScript linter](https://eslint.org/docs/user-guide/configuring#specifying-parser-options)

下面是設定範例：

- `ecmaVersion`：預設值為 `5`，像我設定成最新版
- `sourceType`：預設值為 `'module'`
- `requireConfigFile`：預設值為 `true`
  - 若設為 `false`，可能會無法 parse experimental syntax

```javascript
// .eslintrc.js
module.exports = {
  parserOptions: {
    ecmaVersion: 2021
  }
}
```


---

# Browserslist

很多生態都會使用，例如：`autoprefixer`、`stylelint`、`eslint-plugin-compat` 等

設定：

- `defaults`
- `last 2 versions`
- `not dead`
- `> 0.2%`

# Babel

不懂：

- babel.config.json
  - presets
    - `@babel/env`
    - `targets` option：只載入目標瀏覽器中不提供的 feature 的 transformation plugin
    - `useBuiltIns` option：
      - `usage`：只包含所需的 polyfill
        - 在每個檔案中使用 polyfill 時，加上特定的 import
        - bundler 只載入一次相同的 polyfill
        - 若不使用此參數，就需在其他程式碼之前，在 entry point 一次完整的 polyfill 即可
      - `false`：預設值
        - 不要為每個檔案自動加上 polyfill，也不會把 `import "core-js"` 或 `import "@babel/polyfill"` 轉成單獨的 polyfill
    - `corejs` option：
- loose mode

---

## Core Library

`@babel/core`：Babel 的核心功能

## CLI Tool

`@babel/cli`：Babel 的 CLI

- `--out-dir`：指定輸出路徑
- `--plugins`：要使用的 plugin
- `--presets`：要使用的 preset

## Plugin

告訴 Babel 如何進行程式碼 transformation

- 例如：要將 ES2015+ 語法轉成 ES5 可用官方提供類似的 `@babel/plugin-transform-arrow-functions` plugin 處理
- 也可以自己寫 plugin，自訂 transformation
- 但程式碼一定有很多其他的 ES2015+ 語法要轉換，若要依依設定 plugin 太麻煩了，此時就適合用 preset

## Preset

一組預定的 plugin (a pre-determined set of plugins)

- 也可以自己寫 preset，共享所需的 plugin 任意組合
- 官方提供的 `@babel/preset-env`
  - 不用任何配置，它包含所有 plugin 來支援現代 JS (ES2015、ES2016 等)，且不用管理目標環境所需的語法轉換 (以及可選的瀏覽器 polyfill)

`@babel/preset-env` 從以下資料，來維護哪個版本的目標環境支援 JS 語法或瀏覽器 feature 的支援，以及這些語法和 featrue 到 Babel transform plugin 和 core-je polyfill 的 mapping：

- [`browserslist`](https://github.com/browserslist/browserslist)
- [`compat-table`](https://github.com/kangax/compat-table)
- [`electron-to-chromium`](https://github.com/Kilian/electron-to-chromium)

:::warning
注意：`@babel/preset-env` 不支援 `stage-x` plugin。
:::

`@babel/preset-env` 接受你指定的任何目標環境，並根據其 mapping 檢查它們，來編譯 plugin 列表，並傳給 Babel。

### 整合 Browserslist

除非設定了 `target` 或 `ignoreBrowserslistConfig` option，否則 `@babel/preset-env` 預設會用 [browserslist config sources](https://github.com/browserslist/browserslist#queries)。

> 請注意，從 v7.4.5 開始，使用 `mobileToDesktop: true` 解析了 browserslist 查詢。例如，如果要創建查詢的快照，請運行 `npx browserslist --mobile-to-desktop ">0.25%, not dead"`。

資料來源：[@babel/preset-env · Babel](https://babeljs.io/docs/en/babel-preset-env#browserslist-integration)

## Polyfill

:::warning
從 Babel 7.4.0 開始，不推薦 `@babel/polyfill` 套件，而是直接使用 `core-js/stable` (以 polyfill ECMAScript features) 和 `regenerator-runtime/runtime` (需要用 generator function 時)：

```javascript
import 'core-js/stable';
import 'regenerator-runtime/runtime';
```

:::

`@babel/polyfill` 模組包含 `core-js` 和自訂的 regenerator runtime，來模擬完整的 ES2015+ 環境，代表你可用：

- 新的 built-ins，例如：`Promise` 或 `WeakMap`
- static method，例如：`Array.from` 或 `Object.assign`
- instance method，例如：`Array.prototype.includes`
- generator functions (前提是與 regenerator plugin 一起使用)

為了加入這些 feature，polyfill 將加在 global scope 和類似 `String` 之類的 native prototypes 中

對於 library/tool 的作者來說，可能太多東西了。若不想某些 feature 時，可用 transform runtime plugin (即 `@babel/plugin-transform-runtime` )，而不是使用對 global scope 造成污染的 `@babel/polyfill`

:::info
`@babel/plugin-transform-runtime`：一種可重新使用 Babel 的 injected helper code 來節省代碼大小的 plugin

需安裝：

- [`@babel/plugin-transform-runtime`](https://babeljs.io/docs/en/babel-plugin-transform-runtime)：development 依賴
  - transformation plugin 通常只在開發中使用
  - 外部化對 helpers 和 builtins 的引用，自動 polyfilling 程式碼而不污染全域
- [`@babel/runtime`](https://babeljs.io/docs/en/babel-runtime)：production 依賴，用於 runtime
  - runtime 取決於部署的程式碼
  - 包含 babel 的模組化 runtime helpers 和 `regenerator-runtime` 版本的 library

使用 `@babel/plugin-transform-runtime` plugin 的原因：

- Babel 使用 small helper 的常用 function，例如：`_extend`，預設會加在需要它的每個檔案中，但你的應用程式分佈在多個檔案時，會不想重複
- 所有 helper 都會引用 `@babel/runtime` module 來避免在編譯後的輸出出現重複。runtime 會被編譯至你的 build 中
- transformer 的另一個目的是為你的程式碼建立一個 sandbox 環境。因為直接 import `core-js` 或 `@babel/polyfill` 及其提到的 built-ins (例如：`Promise`、`Set` 和 `Map` ) 會污染 global scope
  - 儘管這對於應用程式或命令行工具可能是可以的，但是若你的程式碼是要發布供他人使用的 library，或者你完全無法控制程式碼執行的環境，可能會是一個問題
- transformer 會將 built-ins 作為 `core-js` 的 alias，所以可以無縫使用它們，不需要 polyfill

`transform-runtime` transformer plugin 執行三件事：

- 使用 generators/async functions (可透過 `regenerator` option 切換) 時，自動 require `@babel/runtime/regenerator`
- 若需要，可用 `core-js` 作為 helper，而不是假設它被使用者 polyfilled (可透過 `corejs` option 切換)
- 自動刪除 inline Babel helpers，並改用 `@babel/runtime/helpers` 模組 (可透過 `helpers` option 切換)

也就是說，可用類似 `Promise`、`Set` 等 built-ins，以及無縫使用需要 polyfill 的 Babel feature，而不會造成全域污染。這很適合用於 library。
:::

若你確切知道需要哪些 feature，可以直接從 [`core-js`](https://github.com/zloirock/core-js#commonjs-api) require 它們

---

```shell
$ npm install --save-dev babel-loader @babel/core
```

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
```

```shell
$ npm install @babel/preset-env --save-dev
```

執行以下指令將程式碼從 `src` 編譯至 `lib`：

```shell
$ npx babel src --out-dir lib
```

## `babel.config.json`

```json
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.8.1"
      }
    ]
  ]
}
```

:::info
若使用 `useBuiltIns` option 時未設定 `corejs` option (即未宣告 `core-js` 的版本)，會出現以下警告訊息：

- 未指定 `core-js` 的版本時，預設為 2.x 版
- 未來的 Babel 設定可能會改變，所以建議明確指定 `core-js` 的版本
- 應確保 `corejs` option 指定的版本與 `package.json` 的 `dependencies` 部份所指定的版本一致，若沒有就要安裝

```shell
$ npx babel src --out-dir lib

WARNING (@babel/preset-env): We noticed you're using the `useBuiltIns` option without declaring a core-js version. Currently, we assume version 2.x when no version is passed. Since this default version will likely change in future versions of Babel, we recommend explicitly setting the core-js version you are using via the `corejs` option.

You should also be sure that the version you pass to the `corejs` option matches the version specified in your `package.json`'s `dependencies` section. If it doesn't, you need to run one of the following commands:

  npm install --save core-js@2    npm install --save core-js@3
  yarn add core-js@2              yarn add core-js@3

More info about useBuiltIns: https://babeljs.io/docs/en/babel-preset-env#usebuiltins
More info about core-js: https://babeljs.io/docs/en/babel-preset-env#corejs
Successfully compiled 1 file with Babel (9166ms).
```

:::


指定 plugin：

```json
{
  "plugins": ["@babel/plugin-transform-arrow-functions"]
}
```

### experimental syntax

以 class properties (此範例為 arrow function) 為例：

```javascript
class Demo {
  constructor() {
    this.state = {
      name: 'Titan'
    };
    this.$app = document.querySelector('.game');
    this.$app.addEventListener('click', this.printArrow);
    this.$app.addEventListener('click', this.print);
  }

  printArrow = () => {
    console.log('printArrow', this.state);
  };

  print() {
    console.log('print', this.state);
  }
}

const demo = new Demo();
console.log(demo);
```

現在 Chrome 已經支援了，但 Babel 不認識實驗性的語法，所以不管是 Babel 編譯，或是 ESLint 都不認識。為了要讓 Babel 認識此語法並編譯它，必須安裝 Babel plugin。

ESLint 不認識時，VS Code 的 ESLint extension 會產生以下錯誤：

```
Parsing error: /home/titan/project/goodidea-frontend/vite-a-bit/js30/src/main.js: Support for the experimental syntax 'classProperties' isn't currently enabled (105:14):

  103 |   }
  104 |
> 105 |   printArrow = () => {
      |              ^
  106 |     console.log('printArrow', this.state);
  107 |   };
  108 |

Add @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.
If you want to leave it as-is, add @babel/plugin-syntax-class-properties (https://git.io/vb4yQ) to the 'plugins' section to enable parsing.eslint
```

在訊息中有提醒 class properties 需安裝 [`@babel/plugin-proposal-class-properties`](https://www.npmjs.com/package/@babel/plugin-proposal-class-properties) 套件才能解決：

```shell
$ npm i -D @babel/plugin-proposal-class-properties
```

在 Babel 設定：

```json
// babel.config.json
{
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```


但要讓 ESLint 能自動讀到 Babel 的設定，必須安裝 [`@babel/eslint-parser`](https://www.npmjs.com/package/@babel/eslint-parser) 和 [`@babel/eslint-plugin`](https://www.npmjs.com/package/@babel/eslint-plugin)：

```shell
$ npm i -D @babel/eslint-parser @babel/eslint-plugin
```

在 ESLint 設定：

```javascript
// .eslintrc.js
module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['@babel']
};
```

詳情可參閱 [The State of babel-eslint · Babel](https://babeljs.io/blog/2020/07/13/the-state-of-babel-eslint)。
