export const METADATA = {
  author: "Yared A. Leake",
  title: "Portfolio | Yared A. Leake",
  description:
    "Yared is software engineer, interested in crafting beautiful and functional applications.",
  siteUrl: "https://www.shubhporwal.me/",
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
    // "python",
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
    "express",
    "bootstrap",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
    "jquery",
    "laravel",
  ],
  databases: ["mysql", "mongodb", "postgresql"],
  other: ["git", "sanity-io", "docker", "azure"],
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
    company: "Code The Dream",
    title: "Frontend Developement Mentor",
    location: "Durham, North Carolina",
    range: "9/2023 - Current",
    responsibilities: [
      "Planned and executed targeted lessons in JavaScript, HTML/CSS for small groups of 4-6 students, dedicating 3 hours per week to ensure comprehensive understanding",
      "Collaborated with students to identify academic needs and goals, adapting lessons and assessments accordingly to maximize effectiveness",
      "Provided detailed feedback on assignments and dedicated additional teaching time to address trouble areas, ensuring students achieved a 90% mastery level.",
    ],
    url: "https://codethedream.org/",
    video: "/work/ctd.mp4",
  },
  {
    id: 2,
    company: "Bank of Abyssinia",
    title: "Software engineer",
    location: "Addis Ababa, ETH",
    range: "8/2022 - 7/2023",
    responsibilities: [
      "Enhanced the bank's digital platform UI, contributing to a more seamless online banking experience through innovative front-end solutions.",
      "Migrating Multi page applications into a single page app, improving customer engagement",
      "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
      "Optimized web pages for speed, performance, SEO, and accessibility, incorporating Angular.JS, Reac.JS and other frontend technologies",
    ],
    url: "https://www.bankofabyssinia.com/",
    video: "/work/abysnnia.mp4",
  },
  {
    id: 3,
    company: "Sook.et",
    title: "Software engineer",
    location: "Addis Ababa, ETH",
    range: "9/2020 - 7/2022",
    responsibilities: [
      "Played a key role in the e-commerce team, contributing to the design of enhanced software using algorithms to match users with products, resulting in a significant 16% increase in sales",
      "Led the integration of advanced analytics tools into the e-commerce platform, extracting valuable insights on user behavior for data-driven optimizations, contributing to a more enhanced user experience",
      "Engaged in code reviews with the product team, receiving feedback from senior engineers and honing skills in writing custom, scalable code",
    ],
    url: "https://sooq.et/",
    video: "/work/sook.mp4",
  },
  {
    id: 4,
    company: "Huawei",
    title: "Software engineer Intern",
    location: "Addis Ababa, ETH",
    range: "8/2019 - 8/2020",
    responsibilities: [
      "Contributed to the development of information and communications technology (ICT) infrastructure and smart devices.",
      "Worked on integrated solutions across telecom networks, IT, smart devices, and cloud services",
      "Contributed to an end-to-end portfolio of products, solutions, and services",
    ],
    url: "",
    video: "/work/huawei.mp4",
  },
  {
    id: 4,
    company: "P.G.M",
    title: "Software engineer Intern",
    location: "Mekelle, ETH",
    range: "6/2019 - 8/2020",
    responsibilities: [
      "Developed a Java-based Inventory Management System, resulting in improved spare parts tracking efficiency for Professional General Mechanics.",
      "Implemented automated stock replenishment notifications, effectively reducing downtime.",
      "Customized a user-friendly Java solution, enhancing inventory control specifically for the automotive repair industry at Professional General Mechanics.",
    ],
    url: "",
    video: "/work/pgm.mp4",
  },
];

export const GTAG = "G-5HCTL2TJ5W";
