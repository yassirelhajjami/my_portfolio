// All English text on the site. ar.ts mirrors this shape.
export const en = {
  dir: "ltr" as "ltr" | "rtl",
  name: "Yassir El Hajjami",
  nameWithTitle: "Mr. Yassir El Hajjami",
  location: "Tangier, Morocco",

  meta: {
    title: "Mr. Yassir El Hajjami — English Language Educator & EdTech Specialist",
    description:
      "English Language Educator & EdTech Specialist: B.A. in English Studies (Linguistics), 120-hour TEFL, teaching English, Computer Science and Digital Media with AI integration.",
  },

  nav: {
    links: [
      { label: "Certificates", href: "#credentials" },
      { label: "Lessons", href: "#lessons" },
      { label: "English", href: "#english" },
      { label: "EdTech & STEM", href: "#teaching" },
      { label: "Design", href: "#creative" },
      { label: "About", href: "#about" },
    ],
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Switch light and dark mode",
    switchLang: "عربي",
    switchLangLabel: "اقرأ الموقع بالعربية",
    backToTop: "Back to top",
  },

  hero: {
    badge: "B.A. English (Linguistics) • 120h TEFL • Ontario curriculum",
    headline: [
      { text: "English", accent: true },
      { text: "Language", accent: true },
      { text: "Educator" },
      { text: "&" },
      { text: "EdTech", accent: true },
      { text: "Specialist.", accent: true },
    ] as { text: string; accent?: boolean }[],
    tagline: "Teaching English, Computer Science and Digital Media with AI Integration.",
    sub: "I teach English to kids and adults, and I use EdTech, AI and practical STEM to make every lesson clear and engaging. Currently teaching students of 15+ nationalities, in English, at the Canadian International School of Tangier.",
    ctaPrimary: "See My Lessons",
    ctaSecondary: "Download CV",
    portraitRole: "English Educator & EdTech Specialist · CIST",
    city: "Tangier",
    chipTefl: "TEFL Certified",
    chipRobotics: "Arduino · Robotics",
  },

  metrics: [
    { text: "B.A.", label: "English Studies (Linguistics)", detail: "Abdelmalek Essaâdi University" },
    { count: 120, suffix: "h", label: "TESOL / TEFL certified", detail: "World TESOL Academy · accredited" },
    { count: 4, label: "Ontario courses taught", detail: "ICS4U · ICS3U · ICD2O · TAS1O" },
    { count: 15, suffix: "+", label: "Nationalities in my classes", detail: "Taught in English (English-medium) · CIST" },
  ] as { count?: number; suffix?: string; text?: string; label: string; detail: string }[],

  lessons: {
    eyebrow: "Interactive Lessons",
    title: ["Lessons I built — ", "try them."],
    description:
      "I build my own lessons as small websites and adjust each one to my students' level. Start with these four, or browse all of them below.",
    featured: "Featured lessons",
    browse: "All lessons",
    open: "Open lesson",
    placement: "Placement test",
    diagnostic: {
      title: "English Diagnostic Test",
      topic: "A 45-minute test of the 4 skills. Every new student starts here, so I can choose lessons at the right level.",
    },
    tabs: { kids: "Kids English", adults: "Business English", cs: "CS · Grades 9–12" },
    grade: "Grade",
    viewAll: "View all Technology & Computer Science lessons",
    comingSoon: "Coming soon",
    showMore: "View more lessons",
    showLess: "Show fewer lessons",
  },

  credentials: {
    eyebrow: "Qualifications & Certificates",
    title: ["Qualifications you ", "can check."],
    description: "Every card opens the original certificate. Click to see it full size.",
    view: "View certificate",
    openFull: "Open full size",
    downloadPortfolio: "Download Full Qualification Portfolio (PDF)",
    pagesBadge: "2 certificates",
    prev: "Previous certificate",
    next: "Next certificate",
    showMore: "View additional certificates & extracurricular achievements",
    showLess: "Hide additional certificates",
    moreText: "Beyond the classroom: language, martial arts, fitness and admin support.",
    practical: {
      tag: "Hands-on",
      title: "Practical EdTech, AI Integration & Hands-on Projects",
      text: "My computer science skills come from real work in school, not only from courses:",
      points: [
        "Teaching Computer Science & ICT at the Canadian International School of Tangier",
        "Built CIST CodeQuest, a gamified coding platform for my Grade 1–8 students",
        "Built 12 interactive English lessons and a placement test with Next.js, deployed on Vercel",
        "Built and run two school websites: cist.ma and bist.ma",
      ],
      codequest: "Open CodeQuest",
      teaching: "Try my lessons",
    },
    items: {
      ba: {
        title: "B.A. in English Studies (Linguistics)",
        issuer: "Abdelmalek Essaâdi University, Tétouan",
        note: "Licence d'Études Fondamentales",
        tag: "Degree",
      },
      tefl: {
        title: "120-Hour TESOL / TEFL Certificate",
        issuer: "World TESOL Academy",
        note: "Accredited by ACCREDITAT and the CPD Certification Service (UK)",
        tag: "Teaching",
      },
      ontario: {
        title: "Ontario Teaching Professional Development — Computer Science",
        issuer: "Ontario Nexus Academy",
        note: "10 sessions: teaching, assessment, curriculum and student engagement in Ontario schools",
        tag: "Canadian curriculum",
      },
      google: {
        title: "Fundamentals of Digital Marketing",
        issuer: "Google Digital Garage",
        note: "Endorsed by IAB Europe and The Open University",
        tag: "Marketing",
      },
      it: {
        title: "Information Technology Training (9 months)",
        issuer: "Institut Ibn Batouta, Tangier",
        note: "Computer training with final exams passed",
        tag: "Technology",
      },
      ijaza: {
        title: "Ijaza in Tuhfat al-Atfal",
        issuer: "Al-Balda Al-Tayyiba Academy",
        note: "Phonetics and precise pronunciation (Tajweed)",
        tag: "Language",
      },
      kungfu: {
        title: "Black Belt in Wushu Kung Fu + Coaches Training",
        issuer: "Royal Moroccan Wushu Federation",
        note: "Black belt rating and a national coaches course — ready to lead a student club",
        tag: "Club leadership",
      },
      jujitsu: {
        title: "International Ju-Jitsu Training",
        issuer: "Bushido Ju Jitsu Academy International",
        note: "Self-defence, Ju-Jitsu and MMA courses in Tangier and Gibraltar — fitness and PE",
        tag: "Fitness",
      },
      alx: {
        title: "Virtual Assistant Program (8 weeks)",
        issuer: "ALX Africa",
        note: "Admin and digital support skills",
        tag: "Tech support",
      },
    },
  },

  dialog: {
    title: "Contact me",
    text: "Write to me about teaching, websites or design. I will reply soon.",
    copy: "Copy",
    copied: "Copied",
    send: "Send an email",
  },

  teaching: {
    eyebrow: "EdTech & Practical STEM",
    title: ["Technology that supports ", "every lesson."],
    description:
      "Alongside English, I teach Computer Science and Robotics in English to students of more than 15 nationalities: Grades 1–8 on CIST CodeQuest, the platform I built, and Grades 9–12 Ontario courses through the Ontario Nexus Academy platform.",
    coursesTitle: "Ontario courses I teach",
    coursesNote: "Grades 9–12 · taught through the Ontario Nexus Academy platform",
    highlights: [
      { title: "Arduino circuits", text: "Students connect wires and program small computers." },
      { title: "Distance sensors", text: "They build alarms and smart bins that can “see”." },
      { title: "Small motors", text: "They make arms and gates that move." },
      { title: "Cardboard projects", text: "Cheap, fast models that turn ideas into real things." },
      { title: "Learning games", text: "Blooket, Kahoot and Gimkit make review fun." },
    ],
    codequest: {
      badge: "Platform I built · Grades 1–8",
      text: "A gamified coding platform I built for my Grade 1–8 students. They code games and robots, take knowledge checks, earn XP and level up.",
      chips: ["Block & Python coding", "Arduino course", "Knowledge checks", "XP & levels"],
      screenshot: "The CodeQuest student dashboard",
      visit: "Visit site",
    },
    inside: {
      title: "Inside CIST CodeQuest",
      text: "Real screens from the platform my Grade 1–8 students use every week.",
      arcade: "Code Arcade: students write Python to guide a hero through a level (a CodeCombat game inside CodeQuest), then pass a knowledge check to earn XP.",
      garage: "Robot Garage: my 10-lesson Arduino course — meet the components, then build projects from a blinking LED to a traffic light.",
      simulator: "Students write real Arduino code and run it in the browser (Wokwi simulator) — no hardware or login needed.",
    },
    lessons: {
      items: {
        g9Materials: {
          title: "Materials, Tools & Sustainability in Design",
          topic: "Technology & the Skilled Trades: choosing materials, tool safety and sustainability, then planning and drawing a prototype.",
        },
        g10DesigningForGood: {
          title: "Designing for Good",
          topic: "Ethics, accessibility and the environmental impact of technology, with quizzes and an assignment.",
        },
        g11LanguageLab: {
          title: "CodeQuest Language Lab",
          topic: "Research project helper: pick one of 34 programming languages, research it and build a 5–10 minute presentation.",
        },
        g12Parsing: {
          title: "Java: String to Integer",
          topic: "Turning text into numbers, with a code visualizer, an error (exception) simulator and quizzes.",
        },
        g12Arrays: {
          title: "Java Arrays",
          topic: "How arrays work and how to search them, then the assignment on the page, saved as a PDF.",
        },
        g12ArraysLab: {
          title: "Arrays Lab",
          topic: "Assignment helper: 5 short lessons — keyboard input, going backwards, 2D arrays — with hints and a self-check.",
        },
      },
    },
    classroomTitle: "Inside my classroom",
    classroomText: "Real moments from my coding and robotics classes.",
    gallery: {
      fullClass: "The whole class plays a live coding quiz, with scores on the smart board.",
      codequestClassroom: "A student solves a Blockly maze under our CodeQuest wall.",
      smartboard: "A student programs a path in a coding game on the smart board.",
      workshop: "Building robot hands from cardboard with my students.",
    },
    video: "Our cardboard robot hand in action.",
  },

  it: {
    eyebrow: "Practical EdTech & Web Projects",
    title: ["I run the school's ", "technology."],
    description:
      "As Head of IT, I build and take care of the websites, tools and systems that teachers, students and parents use every day.",
    cist: {
      badge: "School website",
      title: "Canadian International School of Tangier",
      text: "I designed and launched the school's main website: news, admissions and school life in one place.",
      screenshot: "The cist.ma home page",
    },
    bist: {
      badge: "School website · Moroccan system",
      title: "Badrane International School",
      text: "Our sister school, which follows the Moroccan curriculum. I designed and built its website in French and Arabic, from kindergarten to high school.",
      screenshot: "The bist.ma home page",
    },
    tools: {
      badge: "Tools for teachers",
      title: "Custom learning tools",
      text: "Learning apps and quiz tools I build with Next.js and deploy on Vercel, plus the server work that keeps school systems running.",
      chips: ["Next.js apps", "Vercel", "Server work"],
      link: "See the lessons I built",
    },
  },

  english: {
    eyebrow: "English Teaching",
    title: ["Clear words make ", "learning easy."],
    description:
      "I studied English and linguistics (how language works). This helps me explain things simply — in English class and in coding class.",
    points: [
      "B.A. in English Studies (Linguistics) and a 120-hour TEFL certificate.",
      "I teach in language centers and online, to students around the world — including Spanish-speaking learners, with lessons adapted to their first language.",
      "I teach general English and business English.",
    ],
    roles: [
      {
        title: "Language centers & online classes",
        text: "Lessons in class and live online, for all levels.",
        tags: ["In class", "Online", "All levels"],
      },
      {
        title: "General & business English",
        text: "Speaking, writing and English for work, made for each student's goals.",
        tags: ["Business English", "Speaking", "Writing"],
      },
    ],
    quote: "When words are clear, hard ideas become easy to learn.",
    lessons: {
      items: {
        greetings: { title: "About You", topic: "Greetings: hello and goodbye, questions about you, am / is / are, my / your" },
        feelings: { title: "Hello and Feelings", topic: "Online class for Spanish-speaking learners: say hello and how you feel, with Spanish support, then a 'mouth gym' for tricky sounds (th, sh / ch, ee / i)" },
        classroom: { title: "My Classroom Things", topic: "School words and plurals, with this / that" },
        wherePen: { title: "Where Is My Pen?", topic: "Classroom objects and in, on, under, next to" },
        home: { title: "My Home", topic: "Rooms and furniture, there is / there are, where things are" },
        allAboutMe: { title: "All About Me", topic: "Present simple, am / is / are and have got: me, my family, my day" },
        pastSimple: { title: "Sami's Saturday", topic: "Past simple: a story, -ed spelling and sounds, negatives and questions" },
        rania: { title: "Did Rania Reply?", topic: "Verbs + prepositions: talk to, reply to, agree with" },
        talkingAtWork: { title: "Talking at Work", topic: "Introduce yourself, jobs and departments, phone calls, polite requests" },
        tenses: { title: "A Busy Workday: Tenses", topic: "Present, past and future tenses in real office situations" },
        presentPerfect: { title: "Present Perfect at Work", topic: "Present perfect or past simple? Experience, just / already / yet, for / since" },
        thisThat: { title: "This, That, These, Those", topic: "A 90-minute game lesson with XP, hearts and a final badge" },
      },
    },
    videosTitle: "Watch my English lessons",
    videosText: "Two short videos from my English classes.",
    videoTitles: ["English lesson video 1", "English lesson video 2"],
  },

  creative: {
    eyebrow: "Design, Video & Branding",
    title: ["I make the school ", "look great."],
    description: "As Marketing Manager, I make the school's videos, ads, posters and wall designs.",
    tabs: {
      video: {
        label: "Videos & Reels",
        description: "Short videos and ads I made for the school's Instagram and Facebook.",
      },
      print: {
        label: "Posters & Ads",
        description: "Posters, invitations and banners for school events.",
      },
      walls: {
        label: "Walls & Signs",
        description: "Wall designs and signs I made for the school building.",
      },
    },
    reels: {
      madeFor: "Made for",
      swipe: "Swipe to see more.",
      seeMore: "See more on Instagram",
      fallback: "Watch this reel on Instagram",
    },
    print: {
      poster: "Graduation 2026 poster",
      invitation: "Graduation Day invitation",
      rollup: "Class of 2026 roll-up banner",
    },
    walls: {
      welcomeSign: "Welcome sign at reception",
      logoWall: "Logo wall at reception",
      valuesWall: "School values wall",
      welcomeWall: "Welcome wall",
      levelSigns: "Signs for each school level",
      studentReception: "Student reception wall",
      visionDoor: "Vision & values door",
    },
  },

  about: {
    eyebrow: "About Me",
    title: ["One teacher, ", "four skills."],
    paragraphs: [
      "Hi, I'm Yassir El Hajjami. I work where language, technology and design meet.",
      "One day I help students build a robot. The next day I update the school website or make a new video. Each skill makes the others stronger.",
    ],
    photo: "Graduation day with one of my students. I designed the roll-up banner behind us.",
    timeline: [
      {
        role: "Head of IT & Marketing Manager",
        org: "Canadian International School of Tangier",
        tag: "Leadership",
        text: "I lead the school's technology, website and marketing.",
      },
      {
        role: "Computer Science & Robotics Teacher",
        org: "Canadian International School of Tangier",
        tag: "Teaching",
        text: "In English, to students of 15+ nationalities: Grades 1–8 on CodeQuest, my coding platform, and Grades 9–12 Ontario courses (ICS4U, ICS3U, ICD2O, TAS1O) through Ontario Nexus Academy.",
      },
      {
        role: "English Teacher",
        org: "Language centers & online",
        tag: "Language",
        text: "General and business English, in class and online.",
      },
      {
        role: "B.A. in English Studies (Linguistics)",
        org: "Abdelmalek Essaâdi University",
        tag: "Education",
        text: "Plus a 120-hour TEFL certificate.",
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: ["Let's work ", "together."],
    text: "Do you have a school project, a website idea or a design job? Send me a message.",
    downloadCv: "Download my CV",
  },

  common: {
    enlarge: "Open larger image",
    close: "Close",
  },
}

export type Dict = typeof en
