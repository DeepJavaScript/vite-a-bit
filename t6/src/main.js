import 'bootstrap';
import $ from 'jquery';

import './scss/main.scss';

let $navPrimary = $('.nav--primary');

$(window).scroll(function() {
  if ($navPrimary.offset().top <= $(window).scrollTop()) {
    $navPrimary.addClass('is-fixed-top');
  } else {
    $navPrimary.removeClass('is-fixed-top');
  }
});

const bannerSwiper = new Swiper('.banner .swiper-container', {
  loop: true,
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: '.banner .carousel_control-next',
    prevEl: '.banner .carousel_control-prev'
  }
});

const featureSwiper = new Swiper('.feature .swiper-container', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.feature .carousel_control-next',
    prevEl: '.feature .carousel_control-prev'
  },
  breakpoints: {
    567: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});