import { v4 as uuidv4 } from "uuid";

export const projects = [
  {
    id: uuidv4(),
    title: "Portfolio Website v2",
    description: "This website, built using React and Tailwind.",
    technologies: ["Javascript", "React", "Tailwind"],
    url: "https://github.com/ckeller22/portfolio_v2",
  },
  {
    id: uuidv4(),
    title: "TixGit",
    description:
      "Scalable microservice app that allows users to sign up to view and purchase event tickets using Stripe API. Back end is built using Express, Node.js, and TypeScript. Front end utilizes React, Next.js, and Bootstrap.",
    technologies: ["Express", "React", "NextJS", "Docker", "Kubernetes"],
    url: "https://github.com/ckeller22/microservice-ticketing-app",
  },
  {
    id: uuidv4(),
    title: "Blogr Landing Page",
    description:
      "Responsive landing page, built with React and Tailwind CSS, hosted on Netlify. Solution for Blogr landing page challenge on Frontend Mentor.",
    technologies: ["Javascript", "React", "Tailwind", "Netlify"],
    url: "https://github.com/ckeller22/blogr-landing-page",
  },
  {
    id: uuidv4(),
    title: "Portfolio Website v1",
    description:
      "First version of my portfolio website with custom CSS. Hosted utlizing Heroku platform.",
    technologies: ["CSS", "SCSS", "Javascript", "PHP"],
    url: "https://github.com/ckeller22/Portfolio",
  },
  {
    id: uuidv4(),
    title: "WGU Term Tracker",
    description:
      "Android application to allow WGU students to plan their terms and course selections. Also allows user to take notes for courses and schedule reminder notifcations for upcoming assessments.",
    technologies: ["Android", "Java", "SQLite"],
    url: "https://github.com/ckeller22/WGU-Term-Tracker",
  },
  {
    id: uuidv4(),
    title: "Customer Management System",
    description:
      "JavaFX application intended to be used as a customer management system for a fictitious company. Allows users to manage and store both customer and appointment records.",
    technologies: ["Java", "JavaFX", "mySQL"],
    url: "https://github.com/ckeller22/Customer-Management-Software",
  },
];
