import _ from 'lodash';
import "./css/style.css";
import zerotype from "./img/zerotype.png";
import box from "./img/box.png";
import icon_pinterest from "./img/pinterest_icon.png";
import icon_twitter from "./img/twitter_icon.png";
import icon_google from "./img/google_icon.png";
import icon_facebook from "./img/facebook_icon.png";

function header() {
  const element = document.createElement('div');
	element.className = 'navbar_div';
	element.innerHTML = `
		<div class="navbar_div">
			<div class="navbar_content">
				<img src="${zerotype}">
				<span class="home_txt_color">Home</span>
				<span>Features</span>
				<span>News</span>
				<span>About</span>
				<span>Contact</span>
			</div>
		</div>`;
  return element;
}
function main() {
	const element = document.createElement('div');
	element.className = 'body_div';
	element.innerHTML = `
		<div class="body_txt1_content">
			<div class="body_img1_div">
				<img src="${box}">
			</div>
			<div class="body_txt1_div">
				<h1>IDEAS?</h1>
				<h2>This is just a place holder</h2>
				<p>You can remove any link to owr website from<br>
				this sebsite template, you're free to use this<br>
				website template without linking back to us.</p>
				<div class="body_button_div">
					<button id="body_button_try">TRY IT NOW!</button>
					<p>Don't worry It's for free</p>
				</div>
			</div>
		</div>
		<div class="body_txt2_content">
			<h2>This is just a place holder</h2>
			<div class="body_txt2_div">
				<div class="txt2_p1">
					<p>You can remove any link to owr website from
					this sebsite template, you're free to use this
					website template without linking back to us.
					</p>
					<p>This is just a place holder,
						so you can see what the site would look like.
					</p>
					<p>You can remove any link to owr website from
					this sebsite template, you're free to use this
					website template without linking back to us.
					This is just a place holder,
						so you can see what the site would look like.
					</p>
				</div>
				<div class="txt2_p2">
					<p>You can remove any link to owr website from
					this sebsite template, you're free to use this
					website template without linking back to us.
					</p>
					<p>This is just a place holder,
					so you can see what the site would look like.
					</p>
					<p>You can remove any link to owr website from
					this sebsite template, you're free to use this
					website template without linking back to us.
					This is just a place holder,
					so you can see what the site would look like.
					</p>
				</div>
			</div>
		</div>`;
  return element;
}
function footer() {
	const element = document.createElement('div');
	element.className = 'footer_div';
	element.innerHTML = `
		<div class="footer_content">
    <span>(c) 2023 Zerotype. All Rights Reserved.</span>
    <img src="${icon_pinterest}">
    <img src="${icon_twitter}">
    <img src="${icon_google}">
    <img src="${icon_facebook}">`;

  return element;
}

document.body.appendChild(header());
document.body.appendChild(main());
document.body.appendChild(footer());