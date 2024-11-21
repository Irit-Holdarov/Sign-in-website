'use strict'

const images = [
  'img/swiper-photos/signin-2.jpeg',
  'img/swiper-photos/signin-20.jpeg',
  'img/swiper-photos/signin-1.jpeg',
  'img/swiper-photos/signin-3.jpeg',
  'img/swiper-photos/signin-4.jpeg',
  'img/swiper-photos/signin-5.jpeg',
  'img/swiper-photos/signin-6.jpeg',
  'img/swiper-photos/signin-7.jpeg',
  'img/swiper-photos/signin-8.jpeg',
  'img/swiper-photos/signin-9.jpeg',
  'img/swiper-photos/signin-10.jpeg',
  'img/swiper-photos/signin-11.jpeg',
  'img/img-main/img-main6.jpeg',
  'img/swiper-photos/signin-12.jpeg',
  'img/swiper-photos/signin-13.jpeg',
  'img/swiper-photos/signin-14.jpeg',
  'img/swiper-photos/signin-15.jpeg',
  'img/swiper-photos/signin-16.jpeg',
  'img/swiper-photos/signin-18.jpeg',
  'img/swiper-photos/signin-17.jpeg',
  'img/swiper-photos/signin-19.jpeg',
  'img/swiper-photos/signin-20.jpeg',
  'img/swiper-photos/signin-21.jpeg'
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