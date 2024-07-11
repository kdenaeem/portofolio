import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import attendlyImage from "../public/attendly_screenshot.png";
import rmtdevImg from "../public/rmtdev.png";
import wordanalyticsImg from "../public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Attendly",
    description:
      "A team and myself developed a mobile app called Attendly which uses Machine Learning to do facial recognition.",
    tags: ["Flutter", "Dart", "Android Developement", "TensorFlow", "FireBase", "Machine Learning"],
    imageUrl: attendlyImage,
  },
  {
    title: "LLM onboarding agent for Visa",
    description:
      "For one year, I worked as a Software Engineer intern at Visa, working on many stacks and applications. Notably one of my projects was to develop an onboarding agent using OpenAi APIs",
    tags: ["React", "Python", "LLM", "Embeddings", "Machine Learning", "Flask"],
    imageUrl: rmtdevImg,
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;