const template = `<div class="container-fluid">
  <div class="row">
    <div class="col-12 col-sm-12">
      <div class="contact text-right">
        <span>
          <i class="fa fa-envelope"></i>
          090-223-44-66
        </span>
        <span>
          <i class="fa fa-phone"></i>
          help@trendd.com
        </span>
      </div>
    </div>
  </div>
</div>
<!-- logo -->
<div class="container-fluid">
  <div class="row">
    <div class="col-12 col-sm-12 logo d-flex justify-content-between flex-wrap">
      <div class="my-2">
        <img class="img-fluid" src="${require("/src/images/logo.png")}" alt="">
      </div>
      <div class="login">
        <div class="border_right">
          <div class="shopping_cart_icon">
            <i class="fa fa-shopping-cart"></i>
          </div>
        </div>
        <div>LOGIN</div>
        <div>
          <button class="rounded">REGISTER<i class="fa fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- menu -->
<div class="container-fluid">
  <div class="row">
    <div class="col-12 col-sm-12">
      <nav class="menu my-3 py-2 navbar navbar-toggleable-md navbar-light bg-faded">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">PRODUCTS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">CAMPAINGS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">SERVICES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">BRANDS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">ABOUT US</a>
            </li>
            <li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="search form-control mr-sm-2" type="text" placeholder="Search">
          </form>
        </div>
      </nav>
    </div>
  </div>
</div>
<!-- filter -->
<div class="container-fluid">
  <div class="row">
    <div class="col-12 col-sm-12">
      <div class="filter">
        <div class="select_brands">
          <h5>BRANDS</h5>
          <ul class="text-right">
            <li>
              <div>adidas</div>
              <div>nike</div>
              <div>camper</div>
              <div>superga</div>
              <div>timberland</div>
              <div>new balance</div>
              <div>converse</div>
              <div>puma</div>
              <div>kinetix</div>
            </li>
            <li>
              <div>tiger</div>
              <div>lacoste</div>
              <div>eebok</div>
              <div>cat</div>
              <div>dockers</div>
            </li>
          </ul>
        </div>
        <div class="select_age flex-first flex-md-unordered">
          <div class="select_item">
            <h4>WOMAN</h4>
            <div class="back_img1 rounded-circle mx-auto">
              <img class="img-fluid" src="${require("/src/images/trans1.png")}" alt=""/>
            </div>
            <div>
              <h5>TOTAL</h5>
              <div>99 PROOUCTS</div>
              <i class="fa fa-navicon"></i>
            </div>
          </div>
          <div class="select_item">
            <h4>MAN</h4>
            <div class="back_img2 rounded-circle mx-auto">
              <img class="img-fluid" src="${require("/src/images/trans2.png")}" alt=""/>
            </div>
            <div>
              <h5>TOTAL</h5>
              <div>99 PROOUCTS</div>
              <i class="fa fa-navicon"></i>
            </div>
          </div>
          <div class="select_item">
            <h4>KIDS</h4>
            <div class="back_img3 rounded-circle mx-auto">
              <img class="img-fluid" src="${require("/src/images/trans3.png")}" alt=""/>
            </div>
            <div>
              <h5>TOTAL</h5>
              <div>99 PROOUCTS</div>
              <i class="fa fa-navicon"></i>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column">
          <div class="select_color">
            <h5>SELECT COLOR</h5>
            <img class="color_box" src="http://placehold.it/15x15" alt=""/>
            <img class="color_box" src="http://placehold.it/15x15" alt=""/>
            <img class="color_box" src="http://placehold.it/15x15" alt=""/>
            <img class="color_box" src="http://placehold.it/15x15" alt=""/>
            <img class="color_box" src="http://placehold.it/15x15" alt=""/>
            <img class="color_box" src="http://placehold.it/15x15" alt=""/>
            <img class="color_box" src="http://placehold.it/15x15" alt=""/>
            <img class="color_box" src="http://placehold.it/15x15" alt=""/>
            <img class="color_box" src="http://placehold.it/15x15" alt=""/>
            <img class="color_box" src="http://placehold.it/15x15" alt=""/>
            <img class="color_box" src="http://placehold.it/15x15" alt=""/>
            <img class="color_box" src="http://placehold.it/15x15" alt=""/>
            <img class="color_box" src="http://placehold.it/15x15" alt=""/>
            <img class="color_box" src="http://placehold.it/15x15" alt=""/>
            <img class="color_box" src="http://placehold.it/15x15" alt=""/>
            <img class="color_box" src="http://placehold.it/15x15" alt=""/>
            <img class="color_box" src="http://placehold.it/15x15" alt=""/>
            <img class="color_box" src="http://placehold.it/15x15" alt=""/>
            <img class="color_box" src="http://placehold.it/15x15" alt=""/>
          </div>
          <div class="select_price">
            <h5>SELECT PRICE</h5>
            <img src="http://placehold.it/160x38" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- product -->
<div class="container-fluid">
  <div class="row">
    <div class="col-12 col-sm-12">
      <h3 class="mb-0 mt-4">Men'sFootwear</h3>
      <p>Hookset Handcrafted Fabirc Chukka</p>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-sm-6">
      <div class="product_photo">
        <img class="d-block img-fluid" src="${require("/src/images/product.png")}" alt=""/>
        <div class="view_photo my-3">
          <div class="product_thumbnail1"></div>
          <div class="product_thumbnail2"></div>
          <div class="product_thumbnail3"></div>
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-6">
      <div class="price_details">
        <div class="text-right d-flex justify-content-between">
          <div class="price_area">
            <div class="d-flex justify-content-between">
              <div class="appraise"></div>
              <div class="ruling_price">174.00</div>
            </div>
            <div class="sale_price mt-2">109.00$</div>
          </div>
          <div class="save_img mx-auto mt-2">
            <img src="${require("/src/images/save.png")}" alt=""/>
          </div>
        </div>
        <div class="line"></div>
        <div class="product_text text-right">
          <p>
            This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
            here,e
          </p>
        </div>
        <div class="row">
          <div class="col-12 offset-sm-6 col-sm-6">
            <div class="text-right">
              <img src="${require("/src/images/shiping-icon.png")}" alt="">
              <span>Free shipping</span>
            </div>
            <div class="d-flex flex-row flex-wrap justify-content-between">
              <div class="size">
                <div>
                  Size:
                </div>
                <input type="number" placeholder="Select Size" min="1" class="rounded"/>
              </div>
              <div class="buy_count">
                <div>
                  Qty:
                </div>
                <input type="number" placeholder="1" min="1" class="rounded"/>
              </div>
            </div>
            <button class="my-2 add_shopping_car_btn rounded border-0">
              Add to cart<i class="fa fa-shopping-cart"></i>
            </button>
            <div class="text-right mt-4">
              <div>
                Share This:
              </div>
              <img src="http://placehold.it/127x26" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="product_detail">
    <div class="row">
      <div class="col-12 col-sm-12">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs flex-column flex-sm-row mt-4" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" role="tab" href="#overview">PRODUCT OVERVIEW</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" role="tab" href="#features">FEATURES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" role="tab" href="#review">CSTOMER REVIEWS</a>
          </li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
          <div class="tab-pane active" id="overview" role="tabpanel">
            <h5>
              DESCRIPTION:
            </h5>
            <p>
              With its beautiful premium leather, lace-up oxford styling, recycled rubber outsoles and 9-inch height, this Earthkeepers City Premium style is an undeniably handsome boot. To complement its rustic, commanding outer appearance, we've paid attention
              to the inside as well - by adding SmartWool(R) faux shearling to the linings and crafting the footbed using our exclusive anti-fatigue comfort foam technology to absorb shock. Imported.
            </p>
            <h6>DETAILS:
            </h6>
            <ul>
              <li>
                Premium burnished full-grain leather and suede upper
              </li>
              <li>
                Leather is from a tannery rated Silver for its water, energy and waste-management practices
              </li>
              <li>
                Leather lining and footbed for a premium feel and optimal comfort
              </li>
              <li>
                SmartWool(R) faux shearling lining is made with 60% merino wool and 40% PET
              </li>
              <li>
                Reflective insole board for additional warmth under foot
              </li>
              <li>
                100% organic cotton laces
              </li>
              <li>
                SmartWool(R) fabric-lined anti-fatigue footbed provides superior, all-day comfort and climate control
              </li>
              <li>
                Timberland(R) exclusive Gripstick™ and Green Rubber™ outsole is made with 42% recycled rubber
              </li>
            </ul>
          </div>
          <div class="tab-pane" id="features" role="tabpanel">
            <h5>
              NICE:
            </h5>
            <p>
              With its beautiful premium leather, lace-up oxford styling, recycled rubber outsoles and 9-inch height, this Earthkeepers City Premium style is an undeniably handsome boot. To complement its rustic, commanding outer appearance, we've paid attention
              to the inside as well - by adding SmartWool(R) faux shearling to the linings and crafting the footbed using our exclusive anti-fatigue comfort foam technology to absorb shock. Imported.
            </p>
          </div>
          <div class="tab-pane" id="review" role="tabpanel">
            <h5>
              REVIEW:
            </h5>
            <p>
              With its beautiful premium leather, lace-up oxford styling, recycled rubber outsoles and 9-inch height, this Earthkeepers City Premium style is an undeniably handsome boot. To complement its rustic, commanding outer appearance, we've paid attention
              to the inside as well - by adding SmartWool(R) faux shearling to the linings and crafting the footbed using our exclusive anti-fatigue comfort foam technology to absorb shock. Imported.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
<div class="footer_area mt-5">
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