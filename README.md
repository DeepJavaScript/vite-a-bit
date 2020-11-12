# vite a bit
## 安裝 webpack
- webpack 依賴 node.js 環境，要先安裝 node.js


### 新增 gitignore 
```
node_modules
.DS_Store
dist

```
### 新增 src 資料夾，src 裡新增 index.html & index.js

### 建立 npm 專案 
```
npm init
```
設定完後會產生 package.json 檔案，裡面有剛剛設定的資訊：
```json=
{
  "name": "webpack-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```
- package name：專案名稱，預設資料夾名稱
- version：版本號，預設1.0.0
- description：專案描述，可以空白
- entry point：專案開始執行時，會先執行哪一個隻檔案，預設是 index.js
- author：專案作者名字
- license：專案版權，預設是 ISC（網際網路系統協會 Internet Systems Consortium 的簡稱）

#### 那 package.json 檔案是做什麼用呢？
- package.json 是用來紀錄專案的資料，包含用了哪些套件等等
- npm 可以透過 package.json，管理該專案要用到的套件

上傳到 server 時，是上傳被 webpack 打包後檔案，較難閱讀，但透過 package.json的紀錄，就能知道網站用了哪些套件


### 安裝 webpack 跟 webpack-cli
```
npm install webpack webpack-cli --save-dev
```
package.json 的資訊：
```json=
{
  "name": "webpack-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.29.6",
    "webpack-cli": "^3.3.0"
  }
}

```

- `--save-dev`：使用這個 npm 指令，套件會被寫入到 devDependencies
    - devDependencies：只是在開發中使用的套件，如 webpack

- `--save`：使用這個 npm 指令，套件會被寫入到 dependencies
    - dependencies：上線部署到 server 後依然需要用到的套件。如 react，沒有它，依賴運行就會報錯

### 新增和設定 webpack.config.js
```javascript=
//nodejs 要指定任何檔案路徑都要靠叫 path 的 api 來做，用 require 的方式來引入 path 的模組
const path = require('path');

module.exports = {
    // entry:進入點，專案執行時先從 index.js 開始
    entry: './src/index.js',

    // output:輸出點，專案打包後輸出的檔名和檔案路徑
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
};

```