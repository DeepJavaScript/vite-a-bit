import img1 from "../img/gardening1.jpg";
import img11 from "../img/gardening11.jpg";
import img12 from "../img/gardening12.jpg";
import img2 from "../img/gardening2.jpg";
import img3 from "../img/gardening3.jpg";

const content = document.createElement("template")
content.innerHTML = `
<!-- carousel fade -->
<div id="carouselFade" class="carousel slide carousel-fade" data-ride="" data-interval="5000">
	<!-- carousel-inner -->
	<div class="carousel-inner">
		<div class="carousel-item position-relative active">
			<img class="d-block w-100" src="${img1}" alt="...">
			<a class="_transparent-section w-100" href="##">
				<h3>GARDENING TIPS - 1</h3>
				<span>This is some tricky tip, I don't wanna tell you. you should better learn by your self. Haha, just a kidding placeholder, have a nice day.</span>
				<i class="fas fa-arrow-right"></i>
			</a>
		</div>
		<div class="carousel-item position-relative">
			<img class="d-block w-100" src="${img11}" alt="...">
			<a class="_transparent-section w-100" href="##">
				<h3>GARDENING TIPS - 2</h3>
				<span>This is just a place holder, so you can see what the site would look like. </span>
				<i class="fas fa-arrow-right"></i>
			</a>
		</div>
		<div class="carousel-item position-relative">
			<img class="d-block w-100" src="${img12}" alt="...">
			<a class="_transparent-section w-100" href="##">
				<h3>GARDENING TIPS - 3</h3>
				<span>This is just a place holder, so you can see what the site would look like. This is just a place holder, so you can see what the site would look like.</span>
				<i class="fas fa-arrow-right"></i>
			</a>
		</div>
	</div>
	<!-- carousel-control -->
	<a class="carousel-control-prev" href="#carouselFade" role="button" data-slide="prev">
		<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		<span class="sr-only">Previous</span>
	</a>
	<a class="carousel-control-next" href="#carouselFade" role="button" data-slide="next">
		<span class="carousel-control-next-icon" aria-hidden="true"></span>
		<span class="sr-only">Next</span>
	</a>
</div>

<!-- carousel menu -->
<div class="_carousel-menu row mx-0">
	<div class="col-12 col-lg-4" data-target="#carouselFade" data-slide-to="0" class="active">
		<div class="_carousel-item">
			<div>
				<img src="${img2}" alt="">
			</div>
			<div>
				<h3>Tips</h3>
				<p>This is just a place holder. This is just a place holder.</p>
			</div>
		</div>
	</div>
	<div class="col-12 col-lg-4" data-target="#carouselFade" data-slide-to="1">
		<div class="_carousel-item">
			<div>
				<img src="${img3}" alt="">
			</div>
			<div>
				<h3>Happy Gardener</h3>
				<p>This is just a place holder. This is just a place holder.</p>
			</div>
		</div>
	</div>
	<div class="col-12 col-lg-4" data-target="#carouselFade" data-slide-to="2">
		<div class="_carousel-item">
			<div>
				<img src="${require('../img/gardening4.jpg')}" alt="">
			</div>
			<div>
				<h3>Planting</h3>
				<p>This is just a place holder. This is just a place holder.</p>
			</div>
		</div>
	</div>
</div>
<!-- middle -->
<main class="bg-white">
	<h2 class="">FEATURED GARDENS</h2>
	<!-- featured garden -->
	<article class="_featured row">
		<section class="col-6 col-md-3">
			<div>
				<img src="${require('../img/garden1.jpg')}" class="card-img-top" alt="...">
			</div>
			<div>
				<h3>JULIET'S GARDEN</h3>
				<p>This is just a place holder. This is just a place holder.</p>
			</div>
		</section>
		<section class="col-6 col-md-3">
			<div>
				<img src="${require('../img/garden2.jpg')}" class="card-img-top" alt="...">
			</div>
			<div>
				<h3>JOANNE'S GARDEN</h3>
				<p>This is just a place holder, so you can see what the site would look like.</P>
			</div>
		</section>
		<section class="col-6 col-md-3">
			<div>
				<img src="${require('../img/garden3.jpg')}" class="card-img-top" alt="...">
			</div>
			<div>
				<h3>JETTKA'S GARDEN</h3>
				<p>This is just a place holder, so you can see what the site would look like.</P>
			</div>
		</section>
		<section class="col-6 col-md-3">
			<div>
				<img src="${require('../img/garden4.jpg')}" class="card-img-top" alt="...">
			</div>
			<div>
				<h3>JIA'S GARDEN</h3>
				<p>This is just a place holder, so you can see what the site would look like.</P>
			</div>
		</section>
	</article>
	<hr>
	<!-- tips of week -->
	<article class="_tips row">
		<div class="col-12 col-lg-4 align-self-center">
			<img class="w-100" src="${require('../img/gardening5.jpg')}" alt="">
		</div>
		<div class="col-12 col-lg-8 d-flex flex-column">
			<h2 class="flex-grow-0 flex-shrink-0">TIPS OF THE WEEK</h2>
			<ol class="flex-fill d-flex flex-column justify-content-between">
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
	</article>
</main>
`

export default content