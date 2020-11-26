import { 
  Swiper,
  Navigation,
} from 'swiper';

Swiper.use([Navigation]);

var bannerSwiper = new Swiper('.swiper-container.site__banner', {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next.banner__ctrl__next',
    prevEl: '.swiper-button-prev.banner__ctrl__prev',
  }
});

var workSwiper = new Swiper('.swiper-container.site__work__carousel', {
  loop: true,
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
