import Swiper from 'swiper/swiper-bundle.js';
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  effect: 'fade',
  autoplay: {
    delay: 3000,
  },
  pauseOnMouseEnter: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
