'use client';

import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import { projectsData } from '../lib/data'
import SectionHeading from './section-heading'
import Image from 'next/image';
import Project from './project';

export default function Projects() {
  return (
    <motion.section className="scroll-mt-28" id="projects" initial={{y: 100}} animate={{ y:0}}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              {/* take everything in projects and pass as props */}
              <Project {...project}/>
            </React.Fragment>
          ))}
      </div>
    </motion.section>
  )
}

