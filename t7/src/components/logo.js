import Chm from "./../libs/Chm";

const template = `<div class="container-fluid">
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
</div>`

export default new Chm({
  template
})
