import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';


const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
        nextEl: '.button_next',
        prevEl: '.button_prev',
    },

    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992 : {
            slidesPerView: 4,
            spaceBetween: 30,
        }
    },
});
