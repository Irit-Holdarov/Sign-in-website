'use strict'


document.addEventListener('DOMContentLoaded', function () {
  const images = [
    { src: 'img/img-main/img-main1.jpeg', position: '0 33%' },
    { src: 'img/img-main/img-main2.jpeg', position: '0 35%' },
    { src: 'img/img-main/img-main3.jpeg', position: '0 57%' },
    { src: 'img/img-main/img-main4.jpeg', position: '0 100%' },
    { src: 'img/img-main/img-main5.jpeg', position: 'center' },
    { src: 'img/img-main/img-main6.jpeg', position: '0 44%' }
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



