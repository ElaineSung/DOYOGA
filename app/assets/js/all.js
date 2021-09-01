$(function() {
  console.log('Hello Bootstrap5');
});
// swiper
var swiper = new Swiper(".js-swiper-course-feature", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    992:{
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
  }
});
var swiper = new Swiper(".js-swiper-user-recommend", {
  slidesPerColumnFill: 'row',
  slidesPerColumn: 3,
  slidesPerView: 1,
  spaceBetween: 8,
  breakpoints: {
    768:{
      slidesPerColumn: 2,
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
    992:{
      slidesPerColumn: 2,
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".js-swiper-course-recommend", {
  slidesPerView: 1.3,
  spaceBetween: 30,
  breakpoints: {
    768:{
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992:{
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
var swiper = new Swiper(".js-swiper-teachers", {
  slidesPerColumnFill: 'column',
  slidesPerColumn: 4,
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    768:{
      slidesPerColumnFill: 'row',
      slidesPerColumn: 1,
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992:{
      slidesPerColumnFill: 'row',
      slidesPerColumn: 1,
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
var swiper = new Swiper(".js-swiper-select-course", {
  slidesPerColumnFill: 'column',
  slidesPerColumn: 3,
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    768:{
      slidesPerColumnFill: 'row',
      slidesPerColumn: 1,
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992:{
      slidesPerColumnFill: 'row',
      slidesPerColumn: 1,
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(elem, {
  buttonClass: 'btn primary',
  nextArrow: '>',
  prevArrow: '<'
}); 
