'use strict';

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

const servicesData = [
  {
    img: "img/img-service/service-img1.jpeg",
    alt: "signin1",
    title: "ניהול ותפעול אירועים",
    text: "תכנון, ארגון וביצוע מקצועי של כל היבטי האירוע, כולל ניהול לוגיסטי, צוותים ומתחמים כדי להבטיח שהאירוע יתנהל בצורה מושלמת."
  },
  {
    img: "img/img-service/service-img2.jpeg",
    alt: "signin2",
    title: "עמדות רישום לאירועים",
    text: "פתרון קל, מהיר ומסודר לרישום המשתתפים, תוך דגש על מקצועיות ויעילות לחוויית כניסה מהירה ונוחה."
  },
  {
    img: "img/img-service/service-img3.jpeg",
    alt: "signin3",
    title: "שירותי דיילות לאירועים",
    text: "דיילות מנוסות ומקצועיות אשר יעניקו שירות יעיל ואדיב לאורחים שלך."
  },
  {
    img: "img/img-service/service-img4.jpeg",
    alt: "signin4",
    title: "שמירת חפצים",
    text: "צוות מיומן לניהול ושמירת חפצים בצורה מקצועית ובטוחה."
  },
  {
    img: "img/img-service/service-img5.jpeg",
    alt: "signin5",
    title: "דפי נחיתה",
    text: "פתרון מותאם אישית ליצירת דפי רישום ייחודיים לאירועים, עם עיצוב גמיש ופונקציונליות גבוהה תוך דגש על חווית משתמש מעולה."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const servicesContainer = document.querySelector(".services__grid-box");

  servicesData.forEach(service => {
    const serviceCol = document.createElement("div");
    serviceCol.classList.add("services__grid-box--col");

    serviceCol.innerHTML = `
      <div class="services__box">
        <img src="${service.img}" alt="${service.alt}" class="services__img">
        <h3 class="services__title">${service.title}</h3>
        <p class="services__text">${service.text}</p>
      </div>
    `;

    servicesContainer.appendChild(serviceCol);
  });
});


const images = [
  'img/signin-2.jpeg',
  'img/signin-20.jpeg',
  'img/img-about/img-about3.jpeg',
  'img/signin-1.jpeg',
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
  'img/signin-21.jpeg',
  'img/signin-19.jpeg',
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