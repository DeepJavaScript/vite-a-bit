import Chm from "./libs/Chm";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sass/print.scss";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import communication from "./components/communication.js";
import logo from "./components/logo.js";
import menu from "./components/menu.js";
import filter from "./components/filter.js";
import product from "./components/product.js";
import footer from "./components/footer.js";

const template = `<div class="page_container mx-auto">
${communication}
${logo}
${menu}
${filter}
${product}
${footer}
</div>`

new Chm({
  el: "#app",
  template,
})
