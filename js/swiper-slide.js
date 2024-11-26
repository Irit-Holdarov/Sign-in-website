'use strict'

const images = [
  'img/swiper-photos/signin17.jpg',
  'img/swiper-photos/signin19.jpg',
  'img/swiper-photos/signin1.jpg',
  'img/swiper-photos/signin7.jpg',
  'img/swiper-photos/signin15.jpg',
  'img/swiper-photos/signin16.jpg',
  'img/swiper-photos/signin3.jpg',
  'img/swiper-photos/signin4.jpg',
  'img/swiper-photos/signin6.jpeg',
  'img/swiper-photos/signin8.jpg',
  'img/swiper-photos/signin9.jpg',
  'img/swiper-photos/signin2.jpg',
  'img/swiper-photos/signin10.jpg',
  'img/swiper-photos/signin5.jpeg',
  'img/swiper-photos/signin11.jpg',
  'img/swiper-photos/signin12.jpg',
  'img/swiper-photos/signin20.jpg',
  'img/swiper-photos/signin14.jpg',
  'img/swiper-photos/signin13.jpg',
  'img/swiper-photos/signin18.jpg',
]

const swiperWrapper = document.getElementById('tranding-swiper-wrapper');

images.forEach(src => {
  const slide = document.createElement('div')
  slide.classList.add('swiper-slide', 'tranding-slide')

  const slideImg = document.createElement('div')
  slideImg.classList.add('tranding-slide-img')

  const img = document.createElement('img')
  img.src = src
  img.alt = src.split('/').pop().split('.')[0]

  slideImg.appendChild(img)
  slide.appendChild(slideImg)
  swiperWrapper.appendChild(slide)
})


// Tranding Product Slider-start
var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
// Tranding Product Slider-end