// servicesData.js
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
    text: "פתרון קל, מהיר ומסודר לרישום המשתתפים, תוך דגש על מקצועיות ויעילות לחוויית כניסה מהירה ונוחה.",
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
// service.js
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const serviceId = urlParams.get("id");

  const service = servicesData.find(s => s.id === serviceId);

  if (service) {
    document.getElementById("service-img").src = service.img;
    document.getElementById("service-img").alt = service.alt;
    document.getElementById("service-title").textContent = service.title;
    document.getElementById("service-text").textContent = service.text;
  } else {
    // Handle case where the service is not found
    document.getElementById("service-title").textContent = "Service Not Found";
    document.getElementById("service-text").textContent = "Sorry, we couldn't find the service you're looking for.";
  }
});
