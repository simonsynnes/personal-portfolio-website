import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import beautifulcounterapp from "@/public/beautifulcounterapp.png";
import portfoliowebsite from "@/public/portfoliowebsite.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experienceData = [
  {
    title: "Computer engineering - Bachelor's Degree",
    location: "Ålesund, NO",
    description:
      "I graduated from NTNU Ålesund after 3 years in computer engineering. I then found a job as a Technical Support Consultant.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Global Technical Support Consultant",
    location: "Ålesund, NO",
    description:
      "I worked as a technical support consultant for 1 year before I switched over to becoming a developer full-time.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Full-Stack Developer",
    location: "Aalesund, NO",
    description:
      "I'm now working as a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and PostgreSQL.",
    icon: React.createElement(FaReact),
    date: "2020 - present",
  },
];

export const projectsData = [
  {
    title: "Beautiful Counter App",
    description:
      "Project to create a beautiful counter app using React and CSS.",
    tags: ["React", "TypeScript", "Vite", "CSS"],
    imageUrl: beautifulcounterapp,
    gitHubURL: "https://github.com/Simonsynnes/beautiful-counter-app",
    projectURL: "https://simon-s.github.io/beautiful-counter-app/",
  },
  {
    title: "This portfolio website",
    description: "Project to create a portfolio website using React and CSS.",
    tags: ["Next.js", "TypeScript", "Vercel", "TailwindCSS"],
    imageUrl: portfoliowebsite,
    gitHubURL: "https://github.com/simonsynnes/personal-portfolio-website",
    projectURL: "simonsynnes.com",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Prisma",
  "Tailwind",
  "Framer Motion",
  "Redux",
  "PostgreSQL",
  "GraphQL",
  "Apollo",
  "Express",
];
