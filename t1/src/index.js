import "./css/headbox.css";
import "./css/content.css";
import "./css/footer.css";

import logo from "./img/logo.png";
import box from "./img/box.png";

function headbox() {
  const headbox_element = document.querySelector('#headbox');
  const side_space_element = document.createElement("div");
  side_space_element.classList.add("side_space");
  side_space_element.classList.add("clearfix");
  const logo_element = document.createElement("div");
  logo_element.id = "logo";
  logo_element.appendChild(logoImg());
  logo_element.appendChild(logoText());
  side_space_element.appendChild(logo_element)
  const menu_element = document.createElement("ul");
  menu_element.id = "menu";
  menu_element.classList.add("initial");
  menu_element.innerHTML = `<li class="selected_page">Home</li>
  <li>Features</li>
  <li>News</li>
  <li>About</li>
  <li>Contact</li>`
  // const navigation_element = document.createElement("li");
  side_space_element.appendChild(menu_element)
  headbox_element.appendChild(side_space_element)

//   headbox.innerHTML = `<div class="side_space clearfix">
//   <ul id="menu" class="initial">
//   </ul>
// </div>`;
  return headbox_element;
}

function logoText () {
  const text = document.createElement('div');
  text.classList.add('text');
  text.textContent = "ZERO TYPE";
  return text;
}


function logoImg () {
  const logo_img = new Image();
  logo_img.src = logo;
  return logo_img;
}

function content() {
  const content = document.querySelector('#content');
  content.innerHTML = `<div class="clearfix try_it try_it_text_side_space">
    <img src="${box}" alt="hurry up try it" />
    <div id="try_it_text">
      <h1>IDEAS?</h1>
      <h2>This is just a place holder</h2>
      <p>You can remove any link to owr website from this sebsite template, you're free to use this website template without linking back to us.</p>
      <div>
        <button id="try_it_button">TRY IT NOW!</button>
        <p>Don't worry It's for free</p>
      </div>
    </div>
  </div>
  <div class="content_text_side_space">
    <h1 id="content_head">This is just a place holder.</h1>
    <div id="content_text">
      <p>You can remove any link to our website from this website template, you're free to use this website template without linking back to us.</p>
      <p>This is just a place holder, so you can see what the site would look like.</p>
      <p>You can remove any link to our website from this website template, you're free to use this website template without linking back to us. This is just a place holder, so you can see what the site would look like.</p>
      <p>You can remove any link to our website from this website template, you're free to use this website template without linking back to us.</p>
      <p>This is just a place holder, so you can see what the site would look like.</p>
      <p>You can remove any link to our website from this website template, you're free to use this website template without linking back to us. This is just a place holder, so you can see what the site would look like.</p>
    </div>
  </div>`;
  return content;
}
function footer() {
  const footer = document.querySelector('#footer');
  footer.innerHTML = `
  <div class="side_space clearfix">
    <ul id="footer_link_list">
      <li>
        <i class="fa fa-facebook-square" class="sociality_icon_size"></i>
      </li>
      <li>
        <i class="fa fa-google-plus-square" class="sociality_icon_size"></i>
      </li>
      <li>
        <i class="fa fa-twitter-square" class="sociality_icon_size"></i>
      </li>
      <li>
        <i class="fa fa-pinterest-square" class="sociality_icon_size"></i>
      </li>
    </ul>
    <p id="footer_copy_right_text">(c) 2023 Zerotype. All Rights Reserved.</p>
  </div>`;
  return footer;
}

document.body.appendChild(headbox());
document.body.appendChild(content());
document.body.appendChild(footer());