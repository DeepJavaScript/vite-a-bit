import "./css/index.css";

const app = document.createElement('div');
app.classList.add("container-fluid")
app.innerHTML = `<div class="row">
  <div class="col-9 col-sm-9 center-block green_background">

    <div class="row">
      <div class="col-12 col-sm-12 ">
        <div class="logo_img white_background">
          <img src="${require("./img/logo.png")}" alt="" class="img-fluid"/>
        </div>
      </div>
    </div>
    <div class="row menu">
      <div class="col-6 col-sm-6 col-md-2 menu_item menu_selected_page">Home</div>
      <div class="col-6 col-sm-6 col-md-2 menu_item">About</div>
      <div class="col-6 col-sm-6 col-md-2 menu_item">Plants</div>
      <div class="col-6 col-sm-6 col-md-2 menu_item">Gardens</div>
      <div class="col-6 col-sm-6 col-md-2 menu_item">News</div>
      <div class="col-6 col-sm-6 col-md-2 menu_item">Contact</div>
    </div>
    <div class="row banner">
      <div class="col-12 col-sm-12">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active slider_img">
              <img class="d-block img-fluid" src="${require("./img/gardening1.jpg")}" alt="First slide">
              <div class="carousel-caption">
                <h3 class="banner_title">GARRDENINGS TIPS</h3>
                <p>
                  This is just a place holder, so you can see what the site would look like. This is just a place holder, so you can see what the site would look like. This is just a place holder, so you can see what the site would look like.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row banner_select_list">
      <div class="col-12 col-sm-12 col-lg-4 banner_select_item">
        <div class="row">
          <div class="col-12 col-sm-2 col-lg-4">
            <img class="img-fluid center-block" src="${require("./img/gardening2.jpg")}" alt="">
          </div>
          <div class="col-12 col-sm-10 col-lg-8">
            <div class="banner_text">
              <h5 class="banner_title">Tips</h5>
              <p>This is just a place holder, so you can see what the site would look like.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-lg-4 banner_select_item">
        <div class="row">
          <div class="col-12 col-sm-2 col-lg-4">
            <img class="img-fluid center-block" src="${require("./img/gardening3.jpg")}" alt="">
          </div>
          <div class="col-12 col-sm-10 col-lg-8">
            <div class="banner_text">
              <h5 class="banner_title">Happy Gardener</h5>
              <p>This is just a place holder, so you can see what the site would look like.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-lg-4 banner_select_item">
        <div class="row">
          <div class="col-12 col-sm-2 col-lg-4">
            <img class="img-fluid center-block" src="${require("./img/gardening4.jpg")}" alt="">
          </div>
          <div class="col-12 col-sm-10 col-lg-8">
            <div class="banner_text">
              <h5 class="banner_title">Planting</h5>
              <p>This is just a place holder, so you can see what the site would look like.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="white_background white_border black_font_color">
      <div class="garden">
        <div class="row">
          <div class="col-12 col-sm-12">
            <h6 class="garden_title_style garden_heading_font">
              FEATURED GARDENS
            </h6>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-6 col-md-3">
            <img src="${require("./img/garden1.jpg")}" alt="" class="img-fluid center-block"/>
            <h6 class="garden_heading_type garden_heading_font">
              JULIET'S GARDEN
            </h6>
            <p>
              This is just a place holder, so you can see what the site would look like.
            </p>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <img src="${require("./img/garden2.jpg")}" alt="" class="img-fluid center-block"/>
            <h6 class="garden_heading_type garden_heading_font">
              JOANNE'S GARDEN
            </h6>
            <p>
              This is just a place holder, so you can see what the site would look like.
            </p>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <img src="${require("./img/garden3.jpg")}" alt="" class="img-fluid center-block"/>
            <h6 class="garden_heading_type garden_heading_font">
              JETTKA'S GARDEN
            </h6>
            <p>
              This is just a place holder, so you can see what the site would look like.
            </p>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <img src="${require("./img/garden4.jpg")}" alt="" class="img-fluid center-block"/>
            <h6 class="garden_heading_type garden_heading_font">
              JIA'S GARDEN
            </h6>
            <p>
              This is just a place holder, so you can see what the site would look like.
            </p>
          </div>
        </div>
      </div>
      <div class="h_line">
        <div class="row">
          <div class="col-12 col-sm-12">
            <div class="garden_h_line_style"></div>
          </div>
        </div>
      </div>
      <div class="tips_of_week">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-4">
            <img class="img-fluid center-block" src="${require("./img/gardening5.jpg")}" alt=""/>
          </div>
          <div class="col-12 col-sm-12 col-md-8">
            <h6 class="garden_title_style garden_heading_font">
              FEATURED GARDENS
            </h6>
            <ol class="garden_featured_list">
              <li>
                This is just a place holder, so you can see what the site would look like. This is just a place holder, so you can see what the site would look like.
              </li>
              <li>
                This is just a place holder, so you can see what the site would look like. This is just a place holder, so you can see what the site would look like.
              </li>
              <li>
                This is just a place holder, so you can see what the site would look like. This is just a place holder, so you can see what the site would look like.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="row connect_list">
        <div class="col-6 col-sm-6 col-md-3 connect_item">
          <h6>PLACE HOLDER</h6>
          <div class="row">
            <dd class="col-12 col-sm-12">this is just place holder.</dd>
            <dd class="col-12 col-sm-12">this is just place holder.</dd>
            <dd class="col-12 col-sm-12">this is just place holder.</dd>
            <dd class="col-12 col-sm-12">this is just place holder.</dd>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-md-3 connect_item">
          <h6>PLACE HOLDER</h6>
          <div class="row">
            <dd class="col-12 col-sm-12">this is just place holder.</dd>
            <dd class="col-12 col-sm-12">this is just place holder.</dd>
            <dd class="col-12 col-sm-12">this is just place holder.</dd>
            <dd class="col-12 col-sm-12">this is just place holder.</dd>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-md-3 connect_item">
          <h6>PLACE HOLDER</h6>
          <div class="row">
            <dd class="col-12 col-sm-12">this is just place holder.</dd>
            <dd class="col-12 col-sm-12">this is just place holder.</dd>
            <dd class="col-12 col-sm-12">this is just place holder.</dd>
            <dd class="col-12 col-sm-12">this is just place holder.</dd>
          </div>
        </div>
        <div class="col-6 col-sm-6 col-md-3 connect_item">
          <h6>CONNECT</h6>
          <div class="row">
            <dt class="col-2 col-sm-2 material-icons">&#xe0be;</dt>
            <dd class="col-10 col-sm-10">Email us</dd>
            <dt class="col-2 col-sm-2 fa fa-facebook"></dt>
            <dd class="col-10 col-sm-10">Facebook</dd>
            <dt class="col-2 col-sm-2 fa fa-twitter"></dt>
            <dd class="col-10 col-sm-10">Twitter</dd>
            <dt class="col-2 col-sm-2 fa fa-google-plus"></dt>
            <dd class="col-10 col-sm-10">Google+</dd>
          </div>
        </div>
      </div>
      <div class="copy_right">
        <div class="row">
          <div class="col-12 col-sm-12">
            Garden Walkthough (c) 2023 | All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`

document.body.appendChild(app);
