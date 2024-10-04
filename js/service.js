

const servicesData = [
  {
    id: "event-management",
    headerTitle: "ניהול ותפעול אירועים",
    serviceText: `אירוע מוצלח הוא לא רק רעיון טוב, אלא תוצאה של תכנון מדויק וביצוע מושלם.
        ב-SignIn הופכים את החזון שלכם למציאות.<br>
        אנו מציעים שירותי ניהול ותפעול אירועים מקצועיים ומותאמים אישית לכל צורך.
        החל משלב התכנון המוקדם, דרך תיאום ספקים, הקמה, פירוק ועד ניהול שוטף במהלך האירוע -
        אנו דואגים לכל היבט, כך שתוכלו להיות בטוחים שכל פרט יטופל ביעילות ובמקצועיות.<br>
        הצוות שלנו מיומן במתן פתרונות בזמן אמת ומבטיח לכם אירוע חלק ומוצלח.`,
    offerings: [
      {
        title: "צוותי תפעול מקצועיים",
        text: "אנו מתגאים בצוות של אנשי מקצוע מנוסים, המתמחים בכל היבטי תפעול האירוע. העובדים שלנו מיומנים בטיפול במצבים בלתי צפויים, ומבינים את החשיבות של פתרון בעיות בזמן אמת, כך שכל פרט יתנהל על הצד הטוב ביותר.",
        img: "img/services_imgs/operations_management/icon1.png",
      },
      {
        title: "עוזרי הפקה",
        text: "צוותי ההפקה שלנו הם השותפים שלכם לכל אורך הדרך. הם יעמדו לרשותכם משלב התכנון המוקדם ועד לסיום האירוע, וידאגו לכך שכל פרט ופרט יתבצע בדיוק כפי שתכננתם.",
        img: "img/services_imgs/operations_management/icon2.png",
      },
      {
        title: "ניהול לוגיסטי",
        text: "תהליכי תיאום הספקים, ניהול ההקמה והפירוק ופתרון בעיות שוטפות – אנו מבצעים את כל אלה בצורה מקצועית ומסודרת, כדי להבטיח שהאירוע שלכם יתנהל ללא תקלות.",
        img: "img/services_imgs/operations_management/icon3.png",
      },
      {
        title: "ניהול מתחמים",
        text: "הצוות שלנו מתמחה בניהול והפעלת מתחמי אירועים מכל הסוגים, כולל מתחמי תצוגה, אולמות כנסים, אזורי קייטרינג ועוד. אנחנו נוודא שכל מתחם יפעל בצורה מיטבית ותואמת לצרכי האירוע. ",
        img: "img/services_imgs/operations_management/icon4.png",
      }
    ],
    benefits: [
      { title: "נסיון ומקצועיות", text: "עם ניסיון רב בניהול ותפעול אירועים בכל קנה מידה, אנחנו מבטיחים לכם שירות מקצועי, אמין ויעיל." },
      { title: "שקט נפשי", text: "בעזרת צוות העובדים המנוסה שלנו, תוכלו להיות בטוחים שהאירוע שלכם נמצא בידיים טובות ושכל פרט יתנהל בדיוק לפי התוכנית." },
      { title: "תמיכה מלאה", text: "אנו נלווה אתכם לאורך כל תהליך ההפקה והתפעול ונהיה זמינים לכל שאלה או בקשה שלכם." },
    ],
    summary: "אנו מזמינים אתכם להצטרף למאות לקוחות מרוצים שכבר נהנו משירותינו, ולהפוך את האירוע הבא שלכם לחוויה בלתי נשכחת.",
  },
  {
    id: "registration-desk",
    headerTitle: "עמדות רישום לאירועים",
    serviceText: `בעולם האירועים חשוב שכל תהליך הרישום יהיה מהיר, יעיל ומסודר.<br>
ב-SignIn אנו מספקים פתרונות רישום מתקדמים לאירועים, המבטיחים לכל משתתף חווית כניסה מהירה ונטולת עיכובים. <br> השירות שלנו כולל הקמה מלאה של עמדות רישום, תפעול מקצועי בזמן האירוע ותמיכה טכנית מלאה.<br> עם עמדות רישום מהירות וחדשניות, תוכלו להבטיח התחלה חלקה ונוחה לכל אורח, בין אם מדובר בכנס, תערוכה או אירוע חברה.
`,
    offerings: [
      {
        title: "תכנון והקמה בהתאמה אישית",
        text: "אנו מתכננים עמדות רישום בהתאם לצרכים של כל אירוע, כולל עיצוב למיתוג האירוע, שלטי הכוונה ברורים ופריסה לוגיסטית נוחה שמייעלת את חוויית הכניסה לאורחים.",
        img: "img/services_imgs/registration_positions/icon1.png",
      },
      {
        title: "רישום באמצעות QR",
        text: "פתרון מתקדם המאפשר לאורחים להירשם מראש ולקבל גישה מהירה לאירוע. כך אנו משפרים את חוויית המשתמש ומקצרים את זמן ההמתנה בכניסה.",
        img: "img/services_imgs/registration_positions/icon2.png",
      },
      {
        title: "הפקת תגים בזמן אמת",
        text: "עמדות הרישום שלנו מצוידות במדפסות להפקת תגים מיידית, המספקות לכל משתתף תג אישי באופן מאורגן ומסודר. זהו פתרון מצוין לניהול משתתפים בכנסים, אירועי חברה, תערוכות ועוד.",
        img: "img/services_imgs/registration_positions/icon3.png",
      },
      {
        title: "תמיכה ותפעול טכני מלא",
        text: "צוות התמיכה שלנו זמין לאורך כל האירוע כדי להבטיח שכל מערכות הרישום פועלות ללא תקלות, תוך טיפול מהיר בכל בעיה שמתעוררת.",
        img: "img/services_imgs/registration_positions/icon4.png",
      },
      {
        title: "דוחות משתתפים",
        text: "תיעוד מלא ומדויק של כל משתתפי האירוע, מה שמאפשר לכם לנהל את המידע בצורה מאורגנת ויעילה.",
        img: "img/services_imgs/registration_positions/icon5.png",
      }
    ],
    benefits: [
      { title: "מקצועיות ללא פשרות", text: "אנו מבטיחים רישום מאורגן, מהיר ומסודר, עם ניסיון רב בהפקת אירועים בכל קנה מידה." },
      { title: "טכנולוגיה מתקדמת", text: "שימוש במערכות רישום חדשניות המשפרות את חווית המשתמש ומבטיחה תהליך רישום חלק." },
      { title: "תמיכה מלאה", text: " צוות תפעול ותמיכה טכנית זמין לכל אורך האירוע." },
    ],
    summary: "אל תמתינו לרגע האחרון! צרו קשר עוד היום כדי להבטיח חווית רישום מושלמת ומאורגנת לאירוע הבא שלכם!",
  },
  {
    id: "stewardesses",
    headerTitle: "שירותי דיילות לאירועים",
    serviceText: "",
  }

  // Add more services here...
]

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search)
  const serviceId = urlParams.get("id")

  const selectedService = servicesData.find((service) => service.id === serviceId)

  if (selectedService) {
    // Update header title
    document.querySelector(".service-header__title").textContent = selectedService.headerTitle

    // Update service text
    document.querySelector(".service-text").innerHTML = selectedService.serviceText

    // Update offerings
    const offeringsContainer = document.querySelector(".service-offerings__content")
    offeringsContainer.innerHTML = ""; // Clear existing content
    selectedService.offerings.forEach((offering) => {
      const offeringHTML = `
        <div class="service-offerings__item">
          <img src="${offering.img}" alt="${offering.title}-icon" class="service-offerings__icon" />
          <div class="service-offerings__title">${offering.title}</div>
          <div class="service-offerings__text">${offering.text}</div>
        </div>
      `
      offeringsContainer.innerHTML += offeringHTML
    })

    // Update benefits
    const benefitsContainer = document.querySelector(".service-benefits__text")
    benefitsContainer.innerHTML = ""; // Clear existing content
    selectedService.benefits.forEach((benefit) => {
      benefitsContainer.innerHTML += `
        <span class="service-benefits__item"><b>${benefit.title}: </b> ${benefit.text}</span><br>
      `
    })

    // Update summary
    document.querySelector(".service-summary").textContent = selectedService.summary
  }
})
