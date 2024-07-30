'use strict';

document.addEventListener('DOMContentLoaded', function () {
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
    'img/signin-22.jpeg',
    'img/signin-23.jpeg'
  ];

  let currentIndex = 0;

  const gallery = document.querySelector('.gallery');

  function changeBackgroundImage() {
    gallery.style.backgroundImage = `linear-gradient(to right bottom, rgba(65, 57, 57, 0.8), rgba(56, 56, 56, 0.5)), url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
  }

  // Change image every 3 seconds
  setInterval(changeBackgroundImage, 4000);

  // Initialize with the first image
  changeBackgroundImage();
});