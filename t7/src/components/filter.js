const template = document.createElement('template');
template.innerHTML = `<div class="container-fluid">
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
            <i class="fas fa-bars"></i>
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
            <i class="fas fa-bars"></i>
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
            <i class="fas fa-bars"></i>
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
</div>`

module.exports = template.innerHTML;
