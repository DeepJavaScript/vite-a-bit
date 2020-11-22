import Chm from "./../libs/Chm";

const template = `<div class="container-fluid">
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
</div>`

export default new Chm({
  template
})
