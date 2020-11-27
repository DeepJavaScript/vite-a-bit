import "./css/main.css";

import 'bootstrap/dist/css/bootstrap.min.css';

// 預設是 "main": "dist/js/bootstrap.js"
// import "bootstrap"
// 不想額外安裝 popper.js 所以用 bundle 版本
import "bootstrap/dist/js/bootstrap.bundle.js";

import header from "./components/header.js";
import mainContent from "./components/content";
import footer from "./components/footer";


const mainPage = document.createElement("div")
mainPage.classList.add("container");
console.log(mainContent.content)

mainPage.appendChild(header.content);
mainPage.appendChild(mainContent.content);
mainPage.appendChild(footer.content);

document.body.appendChild(mainPage)
// document.body.appendChild( document.createElement("div") )