import './style.css'
import gardening1 from '../../assets/images/gardening1.jpg'
import gardening2 from '../../assets/images/gardening2.jpg'
import gardening3 from '../../assets/images/gardening3.jpg'
import gardening4 from '../../assets/images/gardening4.jpg'
import gardening5 from '../../assets/images/gardening5.jpg'
import garden1 from '../../assets/images/garden1.jpg'
import garden2 from '../../assets/images/garden2.jpg'
import garden3 from '../../assets/images/garden3.jpg'
import garden4 from '../../assets/images/garden4.jpg'
import next from '../../assets/images/next.png'

export default `
<main>
<section class="carousel">
  <div id="carouselExampleControls"
       class="carousel slide"
       data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="${gardening1}"
             class="d-block w-100"
             alt="gardening" />
      </div>
      <div class="carousel-item">
        <img src="${gardening1}"
             class="d-block w-100"
             alt="gardening" />
      </div>
      <div class="carousel-item">
        <img src="${gardening1}"
             class="d-block w-100"
             alt="gardening" />
      </div>
      <div class="carousel-caption d-block custom_carousel-caption">
        <h3>
          <a href="#"
             class="custom_title-link">GARDENING TIPS</a>
        </h3>
        <p class="m-0">This is just a place holder, so you can see what the site would look like. This is just a
          place holder, so you can see what the site would look like. This is just a place holder, so you can see
          what the site would look like. <a href="#"
             class="d-inline-block"><img src="${next}"
                 alt="" /></a>
        </p>
      </div>
    </div>
    <a class="carousel-control-prev"
       href="#carouselExampleControls"
       role="button"
       data-slide="prev">
      <span class="carousel-control-prev-icon"
            aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next"
       href="#carouselExampleControls"
       role="button"
       data-slide="next">
      <span class="carousel-control-next-icon"
            aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</section>
<section class="row mx-0 py-md-3 banner_list">
  <div class="col-md-4 col-12 align-items-center py-3 py-md-0 custom_border-right">
    <div class="d-flex">
      <a href="#"><img src="${gardening2}"
             alt="gardening" /></a>
      <div class="pl-3">
        <h3><a href="#"
             class="custom_title-link">Tips</a></h3>
        <p>This is just a place holder. This is just a place holder.</p>
      </div>
    </div>
  </div>
  <div class="col-md-4 col-12 align-items-center py-3 py-md-0 custom_border-right custom_border-left">
    <div class="d-flex">
      <a href="#"><img src="${gardening3}"
             alt="gardening" /></a>
      <div class="pl-3">
        <h3>
          <a href="#"
             class="custom_title-link">Happy Gardener</a>
        </h3>
        <p>This is just a place holder. This is just a place holder.</p>
      </div>
    </div>
  </div>
  <div class="col-md-4 col-12 align-items-center py-3 py-md-0 custom_border-left">
    <div class="d-flex">
      <a href="#"><img src="${gardening4}"
             alt="gardening" /></a>
      <div class="pl-3">
        <h3>
          <a href="#"
             class="custom_title-link">Planting</a>
        </h3>
        <p>This is just a place holder. This is just a place holder.</p>
      </div>
    </div>
  </div>
</section>
<section class="p-3 bg-white card_group">
  <div class="card_body">
    <h3>FEATURED GARDENS</h3>
    <div class="card_row">
      <div class="card_col">
        <a href="#">
          <img src="${garden1}"
               alt="JULIET’S GARDEN"
               class="w-100" /></a>
        <h5>
          <a href="#"
             class="card_link">JOANNE’S GARDEN</a>
        </h5>
        <p>
          This is just a place holder, so you can see what the site
          would look like.
        </p>
      </div>
      <div class="card_col">
        <a href="#">
          <img src="${garden2}"
               alt="JULIET’S GARDEN"
               class="w-100" /></a>
        <h5>
          <a href="#"
             class="card_link">JOANNE’S GARDEN</a>
        </h5>
        <p>
          This is just a place holder, so you can see what the site
          would look like.
        </p>
      </div>
      <div class="card_col">
        <a href="#"><img src="${garden3}"
               alt="JULIET’S GARDEN"
               class="w-100" /></a>
        <h5>
          <a href="#"
             class="card_link">JETTKA’S GARDEN</a>
        </h5>
        <p>
          This is just a place holder, so you can see what the site
          would look like.
        </p>
      </div>
      <div class="card_col">
        <a href="#"><img src="${garden4}"
               alt="JULIET’S GARDEN"
               class="w-100" /></a>
        <h5>
          <a href="#"
             class="card_link">JIA’S GARDEN</a>
        </h5>
        <p>
          This is just a place holder, so you can see what the site
          would look like.
        </p>
      </div>
    </div>
  </div>
  <div class="card_footer card_row">
    <div class="card_img">
      <img src="${gardening5}"
           alt=""
           class="w-100" />
    </div>
    <div class="card_text">
      <h3>TIPS OF THE WEEK</h3>
      <div class="card_counter">
        <div>
          <p>
            This is just a place holder, so you can see what the site
            would look like. This is just a place holder, so you can see
            what the site would look like.</p>
        </div>
        <div>
          <p>
            This is just a place holder, so you can see what the site
            would look like. This is just a place holder, so you can see
            what the site would look like.</p>
        </div>
        <div>
          <p>
            This is just a place holder, so you can see what the site
            would look like. This is just a place holder, so you can see
            what the site would look like.</p>
        </div>
      </div>
    </div>
  </div>
</section>
</main>`
