const template = document.createElement('template');
template.innerHTML = `<div class="footer_area mt-5">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 page_container mx-auto my-4">
        <div class="row">
          <div class="col-12 col-sm-12 col-lg-3 align-middle text-center">
            <img src="${require("/src/images/footerlogo.png")}" class="img-fluid" alt=""/>
          </div>
          <div class="col-12 col-sm-12 col-lg-7 align-middle text-center">
            <ul class="footer_menu">
              <li>About Us</li>
              <li>Faq</li>
              <li>Terms and Conditions</li>
              <li>Secure Payments</li>
              <li>Shepping</li>
              <li>Contanct</li>
            </ul>
          </div>
          <div class="col-12 col-sm-12 col-lg-2 align-middle">
            <div class="footer_icon">
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-twitter-square"></i>
              <i class="fab fa-pinterest-square"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`

module.exports = template.innerHTML;
