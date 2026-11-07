// Cấu hình thông tin cố định của website Vietnamese with Huyền Hannah

export const siteConfig = {
  name: "Vietnamese with Huyền Hannah",
  tagline: "Speak Vietnamese with confidence and feel at home in the conversation",
  description:
    "Vietnamese lessons with Huyền Hannah. Online worldwide or in person in Da Nang. Learn Vietnamese through clear lessons, active practice, and useful feedback.",
  url:
    process.env.NEXT_PUBLIC_APP_URL ||
    "https://thuhuyen-academy.github.io/landing-page/",
  ogImage: "/images/teacher/huyen-hannah-share-preview.png",
  teacher: {
    name: "Huyền Hannah",
    role: "Vietnamese teacher · Da Nang",
    location: "Da Nang, Vietnam",
    experienceYears: "6+",
    studentsTaught: "1,000+",
  },
  links: {
    lmsUrl: "https://lms.xinchaovietnam.education/learning",
    lmsGuideDocx: "/documents/LMS_Vietnamese_Learning_Guide_EN.docx",
    cefrPdfUrl: "/documents/CEFR_Vietnamese_6_Levels.pdf",
    googleSheetsWebhookUrl:
      process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbwCxEX1l2Ay_6BpE85S1Ir6Vt0nwVdNwvsZfXnmwoqzpO_9Grq7CS8R7daeR4yqv1if/exec",
    formSubmitAjaxUrl:
      "https://formsubmit.co/ajax/lethithuhuyen2104@gmail.com",
  },
  support: {
    email: "lethithuhuyen2104@gmail.com",
    phone: "+84 364 072 287",
    phoneHref: "tel:+84364072287",
    whatsappUrl: "https://wa.me/84364072287",
    zaloUrl: "https://zalo.me/0364072287",
    messengerUrl: "https://m.me/VietnameseWithHannah",
    facebookUrl: "https://www.facebook.com/VietnameseWithHannah/",
  },
  images: {
    portrait: "/images/teacher/thu-huyen-portrait.jpg",
    culture: "/images/teacher/huyen-cultural-photo.jpg",
    studentDinner: "/images/students/students-at-dinner-web.jpg",
    studentGroup: "/images/students/students-group-photo-web.jpg",
    studentCafeStudy: "/images/students/students-cafe-study-web.jpg",
    studentCommunity: "/images/students/students-cafe-community-web.jpg",
    studentCafePair: "/images/students/students-cafe-pair-web.jpg",
    studentCafeGroup: "/images/students/students-cafe-group-web.jpg",
  },
};

