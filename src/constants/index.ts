import design1 from '../assets/projects/design1.png'; 
import design2 from '../assets/projects/design2.png'; 
import design3 from '../assets/projects/design3.png'; 
import design4 from '../assets/projects/design4.png'; 
import design5 from '../assets/projects/design5.png'; 
import design6 from '../assets/projects/design6.png'; 

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
  user1,
  user2,
  user3,
  youtube,
  linkedin,
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
    link: "",
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
    title: "Design and Digital Marketing Intern",
    company_name: "Skyzone Technologies",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2025",
    points: [
       " ◦ Designed and developed a global presence website using WordPress with custom UI components and smooth navigation.",
 "◦ Built a React.js website for their software house, focusing on responsiveness and clear user flow.",
 "◦ Created engaging social media post designs, including reels and carousel posts, to boost digital outreach."
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
    name: "FemHealth",
    description:
      "Built a full-stack app to track menstrual cycles, symptoms, and wellness metrics. Integrated AI assistant for personalized health suggestions using user data.",
    tags: [
      {
        name: "HTML CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Streamlit",
        color: "pink-text-gradient",
      },
       {
        name: "Gemini API",
        color: "pink-text-gradient",
      }
    ],
    image: project3,
    source_code_link: "https://github.com/AmrahImtiaz/FemHealth",
    live_site_link: "https://femhealth.streamlit.app/",
  },
  {
    name: "Software House Website",
    description:
      "During my internship at Skyzone Technologies, I developed a professional and responsive software house website using React.js. The site showcased the company’s services, portfolio, and client testimonials with a modern UI. I focused on clean layout, smooth navigation, and optimized performance for all screen sizes. This project helped enhance my front-end development and UI/UX skills.",
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
  }
] as const;


// Design
export const DESIGN = [
  {
    name: "Furniture UI UX DESIGN ",
    description:"A modern and elegant UI/UX design for a furniture website, focused on clean layouts and smooth browsing. Users can explore collections by style, room, or material with intuitive filters. The design emphasizes high-quality visuals and a seamless shopping experience.",
    tags: [
      {
        name: "Adobe PS",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
    
    ],
    image: design1,
    live_site_link: "https://www.behance.net/gallery/223624849/Hobitat-Furniture-UI-UX-Case-Study",
  },
  {
    name: "Travel Agency Platform UI UX Design",
    description:
      "Built with WordPress and enhanced by custom design code. ",
    tags: [
     {
        name: "Adobe PS",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
    
    ],
    image: design2,
    live_site_link: "https://www.behance.net/gallery/230199475/TRAVEL-AGENCY-UI-UX-DESIGN",
  },
  {
    name: "Escape Room Website UI/UX Design",
    description:
      "An immersive UI/UX design for an Escape Room website, crafted to build excitement and mystery. The interface features dark-themed visuals, interactive booking, and animated clues to engage users. Designed to reflect the thrill and suspense of real-life escape games.",
    tags: [
    {
        name: "Adobe PS",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
    
    ],
    image: design3,
    live_site_link: "https://www.behance.net/gallery/223101759/Escape-Room-UIUX-Design",
  },
  {
    name: "Restaurant UI/UX Website",
    description:
      "A clean and appetizing UI/UX design for a restaurant website, focused on smooth navigation and mouthwatering visuals. Includes features like digital menu, online table booking, and easy ordering for a seamless dining experience.",
    tags: [
     {
        name: "Adobe PS",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
    
    ],
    image: design4,
    live_site_link: "https://www.behance.net/gallery/213050693/Restaurant-Website-UI-UX-Design",
  },
  {
    name: "K-DRAMA UI UX PLATFORM",
    description:
      "A sleek and modern UI/UX platform designed for K-Drama lovers to explore, favorite, and track their favorite shows. Features include genre-based browsing, watchlist creation, and immersive visuals for an engaging user experience.",
    tags: [
      {
        name: "Adobe PS",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
    
    ],
    image: design5,
    live_site_link: "https://www.behance.net/gallery/229826939/K-DRAMA-PLATFORM-UI-UX-DESIGN",
  }
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
    name: "GitHub",
    icon: github,
    link: "https://github.com/AmrahImtiaz",
  },

] as const;
