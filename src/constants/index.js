import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  gseb,
  iiit,
  threejs,
  chatapp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Web Designer",
    icon: backend,
  }
];

const technologies = [
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
];

const education = [
  {
    title: "Secondary School",
    school: "Lokmanya Vidyalay Secondary School",
    icon: gseb,
    iconBg: "#383E56",
    date: "June 2016 - March 2018",
    points: [
      "Gujarat Secondary and Higher Secondary Education Board (GSEB)",
      "Percentile Rank - 97.70",
      "Percentage - 85.50 %",
    ],
  },
  {
    title: "Higher Secondary School",
    school: "Lokmanya Vidyalay Higher Secondary School Science Stream",
    icon: gseb,
    iconBg: "#E6DEDD",
    date: "June 2018 - March 2020",
    points: [
      "Gujarat Secondary and Higher Secondary Education Board (GSEB)",
      "Percentile Rank - 87.87",
      "Percentage - 74.00 %",
    ],
  },
  {
    title: "Bachelor of Technology",
    school: "Indian Institute of Information Technology, Surat",
    icon: iiit,
    iconBg: "#ffffff",
    date: "July 2020 - May 2024",
    points: [
      "Computer Science Engineering",
      "8.38 CGPA till 5th Semester",
    ],
  },
];


const projects = [
  {
    name: "Real Time Chat Application",
    description:
      "a real-time chat application using the MERN stack requires a combination of backend and frontend development skills, as well as expertise in databases, web application frameworks, and real-time communication protocols.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://github.com/IamHarsh05/Chat-Application.git",
  },
];

export { services, technologies, education, projects };
