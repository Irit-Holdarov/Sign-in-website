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

var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    strech: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: 'swiper-button-prev'
  }
})