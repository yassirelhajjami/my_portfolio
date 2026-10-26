// Contact details and media used across the site. Text lives in src/lib/i18n.
export const site = {
  // Public address of this portfolio (also printed on the CV and the qualification PDF).
  url: "https://yassirelhajjami.vercel.app",
  email: "yassir.el.hajjami@hotmail.com",
  phone: "+212 6 03 84 36 67",
  phoneHref: "tel:+212603843667",
  logo: "/brand/logo.webp",
  portrait: "/brand/portrait.webp",
  // Built from cv/resume.html with `npm run cv`.
  cvUrl: "/cv.pdf",
  cvFileName: "Yassir-El-Hajjami-CV.pdf",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/yassir_el_hajjami/" },
    { label: "GitHub", href: "https://github.com/yassirelhajjami" },
  ],
}

// Reels produced for the school's Instagram, embedded in the Design section.
export const instagram = {
  handle: "cis_tangier",
  url: "https://www.instagram.com/cis_tangier/",
  reels: ["Danw67tt2nF", "DeSG_OmttPr", "DeHGeJ9NrW7", "Dd68AEszRnq", "Da3oOgVNaFJ"],
}

// Interactive English lessons I built and deployed on Vercel. Titles and summaries
// live in the i18n files under `english.lessons.items`; `groups` picks the tab(s).
export const englishLessons = {
  diagnostic: {
    id: "diagnostic",
    url: "https://test-lilac-zeta-75.vercel.app/",
    image: "/media/lessons/diagnostic-test.webp",
    level: "Beginner · 4 skills",
  },
  items: [
    { id: "greetings", url: "https://about-you-tau-ruby.vercel.app/", image: "/media/lessons/about-you.webp", level: "A1", groups: ["kids"] },
    { id: "feelings", url: "https://feelingslesson.vercel.app/", image: "/media/lessons/hello-and-feelings.webp", level: "A1 · Online", groups: ["kids"] },
    { id: "classroom", url: "https://my-classroom-things.vercel.app/", image: "/media/lessons/my-classroom-things.webp", level: "A1", groups: ["kids"] },
    { id: "wherePen", url: "https://where-is-my-pen.vercel.app/", image: "/media/lessons/where-is-my-pen.webp", level: "A1", groups: ["kids"] },
    { id: "home", url: "https://my-home-rosy-ten.vercel.app/", image: "/media/lessons/my-home.webp", level: "A1", groups: ["kids"] },
    { id: "allAboutMe", url: "https://all-about-me-kappa.vercel.app/", image: "/media/lessons/all-about-me.webp", level: "A1", groups: ["kids"] },
    { id: "pastSimple", url: "https://simple-past-rho.vercel.app/", image: "/media/lessons/samis-saturday-past-simple.webp", level: "Grade 9", groups: ["kids", "adults"] },
    { id: "rania", url: "https://prepositions-tau.vercel.app/", image: "/media/lessons/did-rania-reply-prepositions.webp", level: "Grade 9", groups: ["kids"] },
    { id: "talkingAtWork", url: "https://talking-at-work.vercel.app/", image: "/media/lessons/talking-at-work.webp", level: "Business", groups: ["adults"] },
    { id: "tenses", url: "https://a2-sooty-chi.vercel.app/", image: "/media/lessons/busy-workday-tenses.webp", level: "A2 / B1", groups: ["adults"] },
    { id: "presentPerfect", url: "https://presentperfect-five.vercel.app/", image: "/media/lessons/present-perfect-at-work.webp", level: "Business", groups: ["adults"] },
    { id: "thisThat", url: "https://englishthisandthat.vercel.app/", image: "/media/lessons/this-that-these-those.webp", level: "Beginner", groups: ["adults"] },
  ],
} as const

export type LessonGroup = "kids" | "adults"

// Computer Science & technology lessons taught at CIST (Ontario courses).
export const csLessons = [
  { id: "g9Materials", url: "https://g9unit1lesson3.vercel.app/", image: "/media/lessons/g9-tas1o-materials-tools.webp", grade: 9, course: "TAS1O" },
  { id: "g10DesigningForGood", url: "https://unit1lesson3.vercel.app/", image: "/media/lessons/g10-icd2o-designing-for-good.webp", grade: 10, course: "ICD2O" },
  { id: "g11LanguageLab", url: "https://codequest-language-lab.vercel.app/", image: "/media/lessons/g11-ics3u-language-lab.webp", grade: 11, course: "ICS3U" },
  { id: "g12Parsing", url: "https://javastrtoint.vercel.app/", image: "/media/lessons/g12-java-string-to-int.webp", grade: 12, course: "Java" },
  { id: "g12Arrays", url: "https://arrayslesson.vercel.app/", image: "/media/lessons/g12-java-arrays.webp", grade: 12, course: "Java" },
  { id: "g12ArraysLab", url: "https://lesson2-red-three.vercel.app/", image: "/media/lessons/g12-java-arrays-lab.webp", grade: 12, course: "Java" },
] as const

// The 4 lessons shown first in the Lessons section, one per audience.
// Use ids from englishLessons (or "diagnostic") and csLessons.
export const featuredLessons = ["diagnostic", "greetings", "talkingAtWork", "g10DesigningForGood"] as const

// Page listing every Technology & CS lesson (e.g. a Linktree). Paste the link here;
// while it is empty the "View all" button shows as "Coming soon".
export const csLessonsHub = ""

// English lesson videos, embedded in the English section.
export const youtubeLessons = ["ZUQqIiB92kQ", "cWaUIP2ML38"]

// Certificate scans in public/certificates (rotated upright, ID numbers covered).
// A card can hold several documents (`pages`); titles live in the i18n files under `credentials.items`.
export const certificates = {
  primary: [
    { id: "ba", pages: ["/certificates/ba-english-linguistics.webp"], year: "2025" },
    { id: "tefl", pages: ["/certificates/tesol-tefl-120h.webp"], year: "2024" },
    { id: "ontario", pages: ["/certificates/ontario-nexus-pd-computer-science.webp"], year: "2026" },
    { id: "google", pages: ["/certificates/google-digital-marketing.webp"], year: "2021" },
    { id: "it", pages: ["/certificates/it-training-ibn-batouta.webp"], year: "2017" },
  ],
  additional: [
    { id: "ijaza", pages: ["/certificates/ijaza-tuhfat-al-atfal.webp"], year: "2024" },
    {
      id: "kungfu",
      pages: ["/certificates/wushu-black-belt.webp", "/certificates/wushu-coach-training.webp"],
      year: "2022",
    },
    {
      id: "jujitsu",
      pages: ["/certificates/jujitsu-mma-gibraltar-2013.webp", "/certificates/jujitsu-seminar-tangier-2011.webp"],
      year: "2011–2013",
    },
    { id: "alx", pages: ["/certificates/alx-virtual-assistant.webp"], year: "2024" },
  ],
} as const

// Full dossier built from the certificates above with `npm run portfolio`.
export const qualificationPortfolio = "/Yassir_El_Hajjami_Full_Portfolio.pdf"

export type CertificateId =
  | (typeof certificates.primary)[number]["id"]
  | (typeof certificates.additional)[number]["id"]

export const media = {
  teaching: {
    // CodeQuest screenshots (student name blurred)
    codequestArcade: "/media/teaching/codequest/code-arcade.webp",
    codequestGarage: "/media/teaching/codequest/robot-garage-lessons.webp",
    codequestSimulator: "/media/teaching/codequest/arduino-simulator.webp",
    fullClass: "/media/teaching/full-class-coding-quiz.webp",
    codequestScreenshot: "/media/teaching/codequest-dashboard.webp",
    codequestClassroom: "/media/teaching/codequest-classroom.webp",
    smartboard: "/media/teaching/smartboard-coding-game.webp",
    workshop: "/media/teaching/cardboard-hand-workshop.webp",
    handVideo: "/media/teaching/cardboard-robot-hand.mp4",
    handPoster: "/media/teaching/cardboard-robot-hand-poster.webp",
  },
  web: {
    cistWebsite: "/media/web/cist-website.webp",
    bistWebsite: "/media/web/bist-website.webp",
  },
  print: {
    poster: "/media/print/graduation-2026-poster.webp",
    invitation: "/media/print/graduation-day-invitation.webp",
    rollup: "/media/print/graduation-rollup-2026.webp",
  },
  walls: {
    welcomeSign: "/media/walls/reception-welcome-sign.webp",
    logoWall: "/media/walls/reception-logo-wall.webp",
    valuesWall: "/media/walls/values-wall.webp",
    welcomeWall: "/media/walls/welcome-wall.webp",
    levelSigns: "/media/walls/school-level-signs.webp",
    studentReception: "/media/walls/student-reception-wall.webp",
    visionDoor: "/media/walls/vision-values-door.webp",
  },
  events: {
    graduation: "/media/events/graduation-with-student.webp",
  },
}
