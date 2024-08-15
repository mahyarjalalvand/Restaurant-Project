import Swiper from 'swiper';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
var swiper = new Swiper(".mySwiper", {
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    modules: [Autoplay, Pagination, Navigation]
});