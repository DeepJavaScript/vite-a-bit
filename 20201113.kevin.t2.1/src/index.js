import './index.css';
import logo from './assets/logo.png';

function app() {
  const appElement = document.createElement('div');
  appElement.setAttribute("id", "app");

  const bannerElement = document.createElement('div');
  bannerElement.className = 'banner';
  bannerElement.innerHTML = `
    <img
      src="${logo}"
      width="100"
      alt="vue"
      class="logo"
    />
    <h1>Welcome to Vue.js</h1>
  `;

  appElement.appendChild(bannerElement);
  return appElement;
};

document.body.appendChild(app());
