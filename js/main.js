'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const images = [
    { src: 'img/img-main/img-main1.jpeg', position: '0 35%' },
    { src: 'img/img-main/img-main2.jpeg', position: '0 35%' },
    { src: 'img/img-main/img-main3.jpeg', position: '0 65%' },
    { src: 'img/img-main/img-main4.jpeg', position: '0 100%' },
    { src: 'img/img-main/img-main5.jpeg', position: 'center' },
    { src: 'img/img-main/img-main6.jpeg', position: 'center' }
  ]

  let currentIndex = 0;
  const gallery = document.querySelector('.gallery')

  function changeBackgroundImage() {
    const image = images[currentIndex]
    gallery.style.backgroundImage = `linear-gradient(to right bottom, rgba(49, 49, 49, 0.8), rgba(56, 56, 56, 0.5)), url(${image.src})`
    gallery.style.backgroundPosition = image.position
    currentIndex = (currentIndex + 1) % images.length
  }

  setInterval(changeBackgroundImage, 3000)

  changeBackgroundImage()
})

const images = [
  'img/signin-1.jpeg',
  'img/signin-2.jpeg',
  'img/signin-3.jpeg',
  'img/signin-4.jpeg',
  'img/signin-5.jpeg',
  'img/signin-6.jpeg',
  'img/signin-7.jpeg',
  'img/signin-8.jpeg',
  'img/signin-9.jpeg',
  'img/signin-10.jpeg',
  'img/signin-11.jpeg',
  'img/signin-12.jpeg',
  'img/signin-13.jpeg',
  'img/signin-14.jpeg',
  'img/signin-15.jpeg',
  'img/signin-16.jpeg',
  'img/signin-17.jpeg',
  'img/signin-18.jpeg',
  'img/signin-19.jpeg',
  'img/signin-20.jpeg',
  'img/signin-21.jpeg',
  'img/img-about/img-about1.jpeg',
  'img/img-about/img-about2.jpeg',
  'img/img-about/img-about3.jpeg',
  'img/img-main/img-main1.jpeg',
  'img/img-main/img-main2.jpeg',
  'img/img-main/img-main3.jpeg',
  'img/img-main/img-main4.jpeg',
  'img/img-main/img-main5.jpeg',
  'img/img-main/img-main6.jpeg',
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