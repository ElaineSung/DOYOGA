"use strict";

$(function () {
  console.log('Hello Bootstrap5');
}); // swiper

var swiper = new Swiper(".js-courseSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    992: {
      slidesPerView: 1.5,
      spaceBetween: 30
    }
  }
});
var swiper = new Swiper(".js-userSay-swiper", {
  slidesPerColumnFill: 'row',
  slidesPerColumn: 3,
  slidesPerView: 1,
  spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerColumn: 2,
      slidesPerView: 2.2,
      spaceBetween: 30
    },
    992: {
      slidesPerColumn: 2,
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
//# sourceMappingURL=all.js.map
