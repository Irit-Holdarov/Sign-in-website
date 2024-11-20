'use strict'

const servicesData = [
  {
    img: "img/img-service/service-img1.jpeg",
    alt: "signin1",
    title: "ניהול ותפעול אירועים",
    text: "תכנון, ארגון וביצוע מקצועי של כל היבטי האירוע, כולל ניהול לוגיסטי, צוותים ומתחמים כדי להבטיח שהאירוע יתנהל בצורה מושלמת.",
    id: "event-management"
  },
  {
    img: "img/img-service/service-img2.jpeg",
    alt: "signin2",
    title: "עמדות רישום לאירועים",
    text: "פתרון קל, מהיר ומסודר לרישום המשתתפים, תוך דגש על מקצועיות ויעילות לחוויית כניסה מהירה ונוחה, עם טכנולוגיה מתקדמת שמבטיחה תהליך חלק ויעיל.",
    id: "registration-desk"
  },
  {
    img: "img/img-service/service-img3.jpeg",
    alt: "signin3",
    title: "שירותי דיילות לאירועים",
    text: "דיילות מנוסות ומקצועיות אשר יעניקו שירות יעיל ואדיב לאורחים שלך.",
    id: "stewardesses"
  },
  {
    img: "img/img-service/service-img4.jpeg",
    alt: "signin4",
    title: "שמירת חפצים",
    text: "צוות מיומן לניהול ושמירת חפצים בצורה מקצועית ובטוחה.",
    id: "storage-of-objects"
  },
  {
    img: "img/img-service/service-img5.jpeg",
    alt: "signin5",
    title: "דפי נחיתה",
    text: "פתרון מותאם אישית ליצירת דפי רישום ייחודיים לאירועים, עם עיצוב גמיש ופונקציונליות גבוהה תוך דגש על חווית משתמש מעולה.",
    id: "landing-pages"
  }
]

document.addEventListener("DOMContentLoaded", () => {
  const servicesContainer = document.querySelector(".services__grid-box")

  servicesData.forEach(service => {
    const serviceCol = document.createElement("div")
    serviceCol.classList.add("services__grid-box--col")

    serviceCol.innerHTML = `
    <a href="service.html?id=${service.id}" class="services__box">
      <img src="${service.img}" alt="${service.alt}" class="services__img">
      <h3 class="services__title">${service.title}</h3>
      <p class="services__text">${service.text}</p>
    </a>
  `

    servicesContainer.appendChild(serviceCol);
  })
})
