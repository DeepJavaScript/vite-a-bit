import 'bootstrap';
import Swiper from 'swiper';

import './scss/main.scss';

import { defineComponent } from './lib/custom-component';

defineComponent('l-header', require('./layout/header.html'));
defineComponent('l-nav', require('./layout/nav.html'));
defineComponent('l-main', require('./layout/main.html'));
defineComponent('l-footer', require('./layout/footer.html'));

defineComponent('c-banner', require('./components/banner.html'));

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