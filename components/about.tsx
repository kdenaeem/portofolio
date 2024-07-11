"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <motion.section
      className="mb-8 max-x-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 100, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a driven and focused Computer Science student at Loughborough
        University, I've honed my skills through diverse projects, internships,
        and extracurricular activities. My passion for programming is fueled by
        the satisfaction of solving real-world problems and continuously
        learning new technologies. Throughout my internships at Visa Inc., Beta
        Boosters, and OkDoc Medical Software Startup, I gained hands-on
        experience with a variety of tech stacks and methodologies. I've worked
        on projects ranging from developing frontend components with React and
        TypeScript to implementing payment processor simulators and creating
        AI-powered customer onboarding solutions. These roles have strengthened
        my skills in Java, Python, SQL, and Flutter, among others.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        football
        <span className="font-medium"> and learning new things</span>. I am
        currently learning{" "}
        <span className="font-medium">
          more about the human brain and business
        </span>
      </p>
    </motion.section>
  );
}
