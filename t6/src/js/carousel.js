import {
    Swiper,
    Navigation,
} from 'swiper';

Swiper.use([Navigation]);
import 'swiper/swiper-bundle.css';


var swiper2 = new Swiper('.carousel', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
});
var swiper1 = new Swiper('.features-works', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // 640: {
        //   slidesPerView: 2,
        //   slidesPerGroup: 2,
        //   spaceBetween: 20,
        // },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
});


// module.exports = { carousel }

