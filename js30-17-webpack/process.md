# bundle practice & record

## 20201210

以下以時間序記錄實作過程：

### 基本設定
- 複製檔案 (js30-17)
- `$ npm init`

### ESLint
- 安裝 ESLint `$ npm install eslint --save-dev`
- 初始化 `$ npx eslint --init`

```zsh
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JavaScript
```

- ⚡️ `$ npx eslint script.js`

### Prettier
- 安裝 Prettier `$ npm install --save-dev --save-exact prettier`
	- `--save-exact`: Saved dependencies will be configured with an exact version rather than using npm's default semver range
- `$ echo {}> .prettierrc.json`
- `$ touch .prettierignore`
- ⚡️ `$ npx prettier --write script.js`
- 在 `.prettierrc.json` 設定

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

### Prettier & ESLint
- 有裝 ESLint 的話要裝這個 `$ npm install --save-dev eslint-config-prettier`
- 在 `.eslintrc.js` 加上以下設定，設定需放在最下面才不會影響其它設定：

```js
{
  "extends": [
    "some-other-config-you-use",
    "prettier"
  ]
}
```

### Babel
- Babel 把新版的程式碼編譯成較舊的版本，讓程式碼能向下相容
- 安裝 Babel：
	- `@babel/core`: 核心功能
	- `@babel/cli`: CLI tool，用 `$ npx babel <src> --out-dir <lib>` 把 `<src>/.js` 根據設定轉換，再放到 `<lib>`
	- `@babel/preset-env`: 可以安裝單獨的轉換 "plugins"，或是裝 "presets" `@babel/preset-env` (a.k.a. 一包常用的 plugins 集合)
	- `@babel/polyfill`: 包含 `core-js` 和 `regenerator runtime`，Babel v7.4.0 後不推薦使用，而是直接 `import`：
		- `core-js/stable` (to polyfill ECMAScript features); 
		- `regenerator-runtime/runtime` (needed to use transpiled generator functions)

```zsh
$ npm install --save-dev @babel/core @babel/cli @babel/preset-env
$ npm install --save @babel/polyfill
```

- `$ touch babel.config.json`
- 在 `babel.config.json` 加入以下設定：

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
          "safari": "11.1",
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5",
      }
    ]
  ]
}
```

- ⚡️ `$ npx babel <src> --out-dir <lib>`

### 設定 webpack

### browserslist
- ⚡️ `$ npm browserslist`

---

## note.
- [Target - webpack](https://webpack.js.org/configuration/target/)
- [`@babel/plugin-syntax-dynamic-import` Working with Webpack and @babel/preset-env](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import#working-with-webpack-and-babelpreset-env)
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env)
- [`regenerator-runtime`](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime)
- [`@babel/polyfill` Usage in Node / Browserify / Webpack](https://babeljs.io/docs/en/babel-polyfill#usage-in-node--browserify--webpack)
- [Babel Config Files - webpack](https://babeljs.io/docs/en/config-files#webpack)
- [ESLint Development Environment - `npm run webpack`](https://eslint.org/docs/developer-guide/development-environment#npm-run-webpack)