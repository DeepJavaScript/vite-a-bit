# Rollup [Tutorial](https://rollupjs.org/guide/en/#tutorial)

## [安裝](https://rollupjs.org/guide/en/#installing-rollup-locally)

```shell
npm install rollup --save-dev
```

秒裝好, 先寫一個 main.js 檔

```javascript
// src/main.js
import foo from './foo.js';
export default function () {
  console.log(foo);
}
```

```javascript
// src/foo.js
export default 'hello world!';
```

執行打包指令，將打包檔指定成 bundle.js

```shell
rollup src/main.js -o bundle.js -f cjs
```

## [使用 Config](https://rollupjs.org/guide/en/#using-config-files)

```javascript
// rollup.config.js
export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
};
```

指令加入 rollup.config.js 檔

```shell
rm bundle.js # 上述生成的內容，先刪掉
rollup --config  # 自動會吃 rollup.config.js 檔名
rollup --config -o bundle-2.js # 手動指定輸出檔名
```

## [使用 plugin](https://rollupjs.org/guide/en/#using-plugins)

為了更彈性的建構更複雜的軟體，要引用 npm 的套件，像是 Babel...
所以要加入 plugin 的功能，在此使用 `@rollup/plugin-json` 的功能，讓 rollup 可以吃 JSON


```shell
npm install --save-dev @rollup/plugin-json
```

**rollup.config.js**

- 引用`import json from '@rollup/plugin-json';`
- 加入 `plugins: [ json() ]`

```javascript
// rollup.config.js
import json from '@rollup/plugin-json';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [ json() ]
};
```