import communication from "./components/communication.js";
import logo from "./components/logo.js";
import menu from "./components/menu.js";
import filter from "./components/filter.js";
import product from "./components/product.js";
import footer from "./components/footer.js";

const template = `
${communication}
${logo}
${menu}
${filter}
${product}
${footer}
`
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sass/print.scss";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

const app = document.createElement('div')
app.classList.add("page_container")
app.classList.add("mx-auto")
app.innerHTML = template;
document.body.appendChild(app);