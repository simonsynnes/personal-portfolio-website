import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import portfoliowebsite from "@/public/portfoliowebsite.png";
import fantasypl from "@/public/fantasypl.png";
import podTextify from "@/public/PodTextify.png";

// links for the header
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
    title: "Full Stack Developer",
    location: "Aalesund, NO",
    description:
      "I'm now working as a full stack developer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and PostgreSQL.",
    icon: React.createElement(FaReact),
    date: "2020 - present",
  },
];

export const projectsData = [
  {
    title: "Fantasy PL league dashboard",
    description:
      "Full-stack application that shows updated price changes, injury updates and live score updates.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel Postgres"],
    imageUrl: fantasypl,
    gitHubURL: "https://github.com/simonsynnes/fantasypl-league-dashboard",
    projectURL: "https://fantasypl-league-dashboard.vercel.app/",
  },
  {
    title: "This portfolio website",
    description: "Project to create a portfolio website using React and CSS.",
    tags: ["Next.js", "TypeScript", "Vercel", "TailwindCSS"],
    imageUrl: portfoliowebsite,
    gitHubURL: "https://github.com/simonsynnes/personal-portfolio-website",
    projectURL: "simonsynnes.com",
  },
  {
    title: "PodTextify",
    description:
      "Micro SaaS project allowing users to transcribe and translate podcasts using AI.",
    tags: ["Next.js", "AI", "MongoDB", "TailwindCSS"],
    imageUrl: podTextify,
    gitHubURL: "",
    projectURL: "https://podtextify.com",
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
