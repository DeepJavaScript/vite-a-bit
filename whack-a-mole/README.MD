# 完成目標

做一個打地鼠的遊戲

- 功能
  - 一個關卡要幾分鐘要固定
  - 地鼠冒出來、自動縮下去的時間間隔要不一樣
- 畫面
  - 畫面要顯示目前的關卡
  - 地鼠要自動冒出來
  - 地鼠要自動縮下去
  - 地鼠被點到要縮下去

# Javascript

指定取亂數的範圍

```javascript=
function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
```

避免重複取亂數
```javascript=
let lastestId;
function randomHole() {
  const id = Math...;
  if (id === lastestId) {
    return randomHole(holes);
  }
  eles {
    return id;
  }
}
```

## webpack

### ESLint

[ESLint 安裝](https://eslint.org/docs/user-guide/getting-started)

```shell
npm install eslint --save-dev
```

初始化

```shell
npx eslint --init
```

執行

```shell
npx eslint yourfile.js
```

設定 config

```json
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```

 - "semi", "quotes" 是 rule 的名字
 - "error" 是 rule 的錯誤等級，可以設定每一個 rule 的錯誤等級嚴不嚴重
   - `"off"` or 0 - turn the rule off
   - `"warn"` or 1 - turn the rule on as a warning (doesn't affect exit code)
   - `"error"` or 2 - turn the rule on as an error (exit code will be 1)

也可以定下面這一行，代表全開 (ESLint 推薦選項)

```json
{
    "extends": "eslint:recommended"
}
```

### 整合

- VS code: [安裝 ESLint 外掛](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Webpack: [~~安裝 eslint-loader~~](https://www.npmjs.com/package/eslint-loader) (該軟件包已被棄用)
- Webpack: [安裝 eslint-webpack-plugin](https://www.npmjs.com/package/eslint-webpack-plugin)

```shell
npm install eslint-webpack-plugin eslint --save-dev
```

只有 fix 設定 `true`，其它用預設值

```javascript
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // ...
  plugins: [new ESLintPlugin({
    fix: true
  })],
  // ...
};
```

### Babel

[安裝](https://babeljs.io/setup#installation)

```shell
npm install --save-dev babel-loader @babel/core
```

設定

```
{
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
}
```