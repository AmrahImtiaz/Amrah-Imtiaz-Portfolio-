// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  behance,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "",//
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ASP .Net Developer",
    icon: mobile,
  },
  {
    title: "UI UX Designer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Wordpress Developer",
    company_name: "Personal",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2024",
    points: [
      "Secured Second Position in Wordpress Hackathon Jan 2024 , we developed a completely custom 💻 Query Management System💻.",
      "This system is a fusion of our Query Nexus Plugin and the HR Nexa theme, complete with an Admin Dashboard."
    ],
   },
  {
    title: "Web Developer",
    company_name: "JAVSONS",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023",
    points: [
       "#"
    ],
  }
] as const;

// Projects
export const PROJECTS = [
  {
    name: "WEB VILLA AGENCY ",
    description:"Villa Agency is developed using ASP.NET MVC, HTML , CSS  with Bootstrap v5.3.0. There are Property Listing page and Property Detail page. Property Listing categorized different properties by apartment, villa house, and penthouse.",
    tags: [
      {
        name: "SQL SERVER",
        color: "red-text-gradient",
      },
      {
        name: "ASP.NET MVC",
        color: "blue-text-gradient",
      },
      {
        name: "HTML & CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/AmrahImtiaz/WebAppVilla-Agency",
    live_site_link: "#",
  },
  {
    name: "Scarlet Nexus",
    description:
      "Built with WordPress and enhanced by custom design code. ",
    tags: [
      {
        name: "HTML & CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "WORDPRESS CMS",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "#",
    live_site_link: "https://scarletnexus.netlify.app/",
  },
  {
    name: "Professional Portfolio Website Design",
    description:
      "Showcasing simple, professional, and elegant WordPress designs, our portfolio highlights the perfect blend of functionality and aesthetic appeal. Explore our work and see how we transform ideas into stunning digital experiences",
    tags: [
      {
        name: "HTML CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "WORDPRESS",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/AmrahImtiaz",
    live_site_link: "https://portfolio-webpg.netlify.app/",
  },
  {
    name: "Mobile Repair Website",
    description:
      "With a clean and professional design, navigating through our services and booking repairs is effortless. Experience the convenience of scheduling appointments and accessing helpful resources, all from the palm of your hand. Trust us to provide efficient solutions for all your mobile repair needs.",
    tags: [
      {
        name: "WORDPRESS ",
        color: "blue-text-gradient",
      },
      {
        name: "HTML & CSS",
        color: "green-text-gradient",
      },
      {
        name: " JS ",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "#",
    live_site_link: "https://mobile-repairshop.netlify.app/",
  },
  {
    name: "Skin Care Eccommerce Website",
    description:
      "Best Cryptocurrency web application that allows users to view price, market cap and daily change in realtime for almost every cryptocurrency in the world.",
    tags: [
      {
        name: "HTML CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "green-text-gradient",
      },
    
    ],
    image: project5,
    source_code_link: "https://github.com/AmrahImtiaz/Skin-Care-Ecommerce-Website",
    live_site_link: "https://amrahimtiaz.github.io/Skin-Care-Ecommerce-Website/",
  },
  {
    name: "Zahid Nihari",
    description:
      "Indulge in the exquisite taste of our legendary nihari through our meticulously crafted website, powered by HTML, CSS, and JavaScript. Immerse yourself in a seamless browsing experience as you explore our menu, place orders, and uncover the culinary delights of our heritage. With a user-friendly interface and captivating design, satisfaction is just a click away",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/AmrahImtiaz/Zahid-Nihari-Website", 
    live_site_link: "https://amrahimtiaz.github.io/Zahid-Nihari-Website/", 
  },
] as const;

export const SOCIALS = [
  {
  name: "Behance",
  icon: behance,
  link: "https://www.behance.net/amrah",
  },
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@FreeEduJourney",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/amrahimtiaz/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "#",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/AmrahImtiaz",
  },

] as const;
