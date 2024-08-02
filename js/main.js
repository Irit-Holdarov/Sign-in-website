'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const images = [
    { src: 'img/img-main1.jpeg', position: '0 35%' },
    { src: 'img/img-main2.jpeg', position: '0 35%' },
    { src: 'img/img-main3.jpeg', position: '0 65%' },
    { src: 'img/img-main4.jpeg', position: '0 100%' },
    { src: 'img/img-main5.jpeg', position: 'center' },
    { src: 'img/img-main6.jpeg', position: 'center' }
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