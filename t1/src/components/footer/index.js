import "./index.css";

export default function footer() {
  const element = document.createElement('div');
  element.id = 'footer';
  element.innerHTML = `
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
  return element;
}