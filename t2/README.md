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

## [輸出管理](https://rollupjs.org/guide/en/#using-output-plugins)

想要讓輸入的 JS 檔變小，在瀏覽器使用時可以速度變快

```shell
npm install --save-dev rollup-plugin-terser
```

**rollup.config.js**

```javascript
// rollup.config.js
import json from '@rollup/plugin-json';
import {terser} from 'rollup-plugin-terser';

export default {
  // ...
  output: [
    // ...
    {
      file: 'bundle.min.js',
      format: 'iife',
      name: 'version',
      plugins: [terser()]
    }
  ],
  // ...
};
```

- format 檔案輸出格式。
  - iife: 立即執行函式
  - es: ECMAScript

## 拆分程式碼

通常是自動拆分，`output.manualChunks` 可以明確指定拆分方式
用程式碼拆分功能，實現動態載入的語法

```javascript
// src/main.js
import foo from './foo.js';
export default function () {
  console.log(foo);
}
```
改成
```javascript
// src/main.js
export default function () {
  import('./foo.js').then(({ default: foo }) => console.log(foo));
}
```

**rollup.config.js**

- output
  - 設定 file 會輸出指定單一檔案。
  - 設定 dir 會把檔案輸出到這個目錄下。

檔名 `chunk-[hash].js` 其中，hash 是依內容 hash 的結果。
可以指定 `output.chunkFileNames` 和 `output.entryFileNames` 決定命名原則。



```javascript
// rollup.config.js
import json from '@rollup/plugin-json';
import {terser} from 'rollup-plugin-terser';

export default {
  input: 'src/main.js',
  output: {
    dir: 'dist',
    plugins: [ terser() ]
  },
  plugins: [ json() ]
};
```

SystemJS 動態載入 JS