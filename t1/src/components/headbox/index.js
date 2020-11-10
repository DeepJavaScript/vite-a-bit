import "./index.css";
import logo from "../../img/logo.png";

export default function headbox() {
  const element = document.createElement('div');
  element.id = 'headbox';
  element.innerHTML = `<div class="side_space clearfix">
    <div id="logo"><img src="${logo}">
      <div class="text">ZERO TYPE</div>
    </div>
    <ul id="menu" class="initial">
      <li class="selected_page">Home</li>
      <li>Features</li>
      <li>News</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </div>`;
  return element;
}