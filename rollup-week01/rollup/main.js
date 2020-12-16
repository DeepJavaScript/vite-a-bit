// 引入 scss 可以使用 rollup 打包成 css
import "./src/assets/scss/main.scss";
// 應用邏輯（不拆 component，單純模組化管理，make thing simple.）
import "./app.js";
// 引入 Bootstrap Model 組件邏輯
import { Modal } from "bootstrap";
