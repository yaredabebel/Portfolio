export const METADATA = {
  author: "Yared A. Leake",
  title: "Portfolio | Yared A. Leake",
  description:
    "Shubh Porwal is a Frontend Developer from Kuwait, interested in crafting beautiful and functional applications.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@shubh731",
  keywords: [
    "Yared A. Leake",
    "Software Engineer",
    "Web Developer",
    "React Native Developer",
    "Software Developer",
    "Frontend Developer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1690572126/preview.png",
  language: "English",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Software Engineer",
  "A passionate Fullstack developer",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: yaredaleake@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/Yared-abebe-Leake/",
  },
  {
    name: "github",
    url: "https://github.com/Yaredabebel",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/wedi_lifeee/",
  },
  {
    name: "twitter",
    url: "https://twitter.com/yaredabebe11",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "cpp",
    "java",
    "python",
    "nodejs",
    "webpack",
    "vite",
    "firebase",
    // "moralis",
    // "stripe",
    "figma",
    "tanstack-query",
    "wordpress",
    "php",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
    "nextjs",
    "laravel",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "sanity-io"],
};

export const PROJECTS = [
  // {
  //   name: "Shotime",
  //   image: "",
  //   blurImage: "",
  //   description:
  //     "Developed with complete E-commerce functionality and User Authentication 🛍️",
  //   gradient: ["#FFCF1B", "#FF881B"],
  //   url: "https://shubh73-shotime.vercel.app/",
  //   tech: ["react", "tailwindcss", "redux", "mongodb", "stripe"],
  // },
  {
    name: "Airbnb",
    image: "/projects/airbnb.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Airbnb UI clone using NextJS + Tailwind CSS 🛏️",
    gradient: ["#F14658", "#DC2537"],
    url: "https://airbnb-by-yared.vercel.app/",
    tech: ["react", "nextjs", "tailwindcss", "mapbox"],
  },
  {
    name: "R-B-F",
    image: "/projects/rbf.jpg",
    blurImage: "/projects/blur/rbfblur.jpg",
    description: "Unique Social Media Page",
    gradient: ["#222", "#222"],
    url: "https://rbf1.netlify.app/#",
    tech: ["react", "tailwindcss", "threejs", "nextjs", "typescript"],
  },
  {
    name: "Inshorts",
    image: "/projects/inshorts.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Conversational Voice Controlled React News Application using Alan AI 🎙",
    gradient: ["#000066", "#6699FF"],
    url: "https://shubh73-inshorts.netlify.app/",
    tech: ["react", "chakra-ui", "alan"],
  },
  {
    name: "Tesla",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "A Tesla React Native App 🏎️",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/yaredabebel/tesla-main",
    tech: ["react"],
  },
  {
    name: "Sook.et",
    image: "/projects/sooqpic.jpg",
    blurImage: "/projects/blur/SooqpicBlur.jpg",
    description: "Amazing E-commerce Website",
    gradient: ["#90EE90", "#fff"],
    url: "https://sooq.et/",
    tech: ["figma", "wordpress", "php", "laravel"],
  },
];

export const WORK = [
  {
    id: 1,
    company: "Sook.et",
    title: "Frontend Developer",
    location: "Addis Ababa, Ethiopia",
    range: "December - Current",
    responsibilities: [
      "Led creation of a captivating cross-platform e-commerce solution.",
      "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
      "The app boasts a DAU base of 13k and an extensive MAU count of 170k.",
    ],
    url: "https://mydukaan.io/",
    video: "/work/dukan.mp4",
  },
  {
    id: 2,
    company: "Aviate",
    title: "Frontend Developer Intern",
    location: "Goa",
    range: "May - October 2022",
    responsibilities: [
      "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
      "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
      "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
    ],
    url: "https://www.aviate.jobs/",
    video: "/work/aviate.mp4",
  },
  {
    id: 3,
    company: "Spacenos",
    title: "Web Developer Intern",
    location: "Bangalore, Karnataka",
    range: "September - December 2021",
    responsibilities: [
      "Led the Full Stack revamp on the Admin Portal.",
      "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
      "Implemented CRUD features for all the services and providers.",
    ],
    url: "https://spacenos.com/",
    video: "/work/spacenos.mp4",
  },
  {
    id: 4,
    company: "Spacenos",
    title: "Web Developer Intern",
    location: "Bangalore, Karnataka",
    range: "September - December 2021",
    responsibilities: [
      "Led the Full Stack revamp on the Admin Portal.",
      "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
      "Implemented CRUD features for all the services and providers.",
    ],
    url: "https://spacenos.com/",
    video: "/work/spacenos.mp4",
  },
];

export const GTAG = "G-5HCTL2TJ5W";
