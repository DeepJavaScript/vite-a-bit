import "./index.css";
import box from "../../img/box.png";

export default function content() {
  const element = document.createElement('div');
  element.id = 'content';
  element.innerHTML = `<div class="clearfix try_it try_it_text_side_space">
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
  return element;
}