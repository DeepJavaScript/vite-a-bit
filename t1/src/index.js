import "./css/index.css";

var link = document.createElement('link')
link.rel = "stylesheet"
link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
document.head.appendChild(link)

import headbox from "./components/headbox/index.js";
import content from "./components/content/index.js";
import footer from "./components/footer/index.js";

document.body.appendChild(headbox());
document.body.appendChild(content());
document.body.appendChild(footer());
