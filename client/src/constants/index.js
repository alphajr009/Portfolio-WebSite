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
  carrent,
  jobit,
  tripguide,
  threejs,
  sliit,
  richmond,
  java,
  python,
  sql,
  firebase,
  worklk,
  sushiman,
  tripgenie,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Social Media Manager",
    icon: creator,
  },
];

const languages = [

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "PHP",
    icon: docker,
  },
];



const frameworks = [
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Bootstrap",
    icon: git,
  },
];





const databases = [
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "MYSQL",
    icon: sql,
  },
  {
    name: "Firebase",
    icon: firebase,
  },

];





const experiences = [
  {
    title: "Bachelor's Degree",
    company_name: "Sri Lanka Institute of Information Technology",
    icon: sliit,
    iconBg: "#383E56",
    date: "2021- Present",
    points: [
      "Currently pursuing a Bachelor's Degree in Information Technology specializing in Information Technology.",
      "Colloborate with Room Reservation and Selling System developed using MERN Stack.",
      "Designed and developed a mobile application called WorkLK using Kotlin.",
      "Developed and deployed web applications for Academics using React.js , Node.js ,Java and other related technologies.",
      "Active member of the University's Gaming Community.",
    ],
  },
  {
    title: "Advanced Level",
    company_name: "Richmond College",
    icon: richmond,
    iconBg: "#383E56",
    date: "2017 - 2020",
    points: [
      "Passed General Certificate Advanced Level Exam in Physical stream with 2 S (Physics, Chemistry) and 1 C (Mathematics) Passes.",
      "Member of Media Unit of the School.",
      "Participated in many extra curricular activities including sports, drama and dancing.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "GUIDEYFY",
    description:
      "Web app connects travelers with property owners, offering accommodation solutions. Reservations made through online booking; aims to streamline booking process.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "antd",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/alphajr009/GUIDEYFY---Room-Reservation-and-Selling-System",
    live_link: "https://guideyfy.herokuapp.com/",
  },
  {
    name: "T Shirt Customizer",
    description:
      "Website provides an engaging platform for users to create their own personalized t-shirts.  users can enjoy a real-time color and logo customization experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "vitejs",
        color: "blue-text-gradient ",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/alphajr009/T-Shirt-Customized-WebSite",
    live_link: "https://tshirt-customize-ee6fea606ead.herokuapp.com/",
  },
  {
    name: "AdilRooms",
    description:
      "A comprehensive travel booking platform that allows users to book hotels, and rooms, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "antd",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/alphajr009/Adil---Rooms-Reservation-System",
    live_link: "https://adil-room-reservation.herokuapp.com/",
  },
  {
    name: "SUSHIMAN",
    description:
      "This website is created to learning to make responsive website. This is a simple website that is created for a Sushi Restaurant only frontend is operational and backend inactive.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "vitejs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: sushiman,
    source_code_link: "https://github.com/alphajr009/Sushi-Ordering-WebSite",
    live_link: "https://sushi-app-dee1355544ca.herokuapp.com/",
  },
  {
    name: "TripGenie",
    description:
      "This Web Application help for seamless trip planning, providing personalized recommendations for hotels, activities, and dining based on location and preferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "antd",
        color: "pink-text-gradient",
      },
    ],
    image: tripgenie,
    source_code_link: "https://github.com/alphajr009/Online-Travel-Planner",
    live_link: "https://github.com/alphajr009/Online-Travel-Planner",
  },
  {
    name: "WorkLK",
    description:
      "Empower Sri Lankan job seekers with a mobile app offering relevant work opportunities, giving control over their job search, aiding the economic crisis.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "androidstudio",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: worklk,
    source_code_link: "https://github.com/alphajr009/WorkLK-MAD-Project",
    live_link: "https://www.youtube.com/watch?v=bPD36R9yqBM",
  },
];

export { services, languages, experiences, testimonials, projects, frameworks, databases };
