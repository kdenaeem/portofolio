'use client';

import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { projectsData } from '../lib/data'
import SectionHeading from './section-heading'
import Image from 'next/image';

// anything that is presentaiton will be server but anything more interactive will be client

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
} : ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
//   useSCroll gives us the scroll value

  const { scrollYProgress } = useScroll({
   target: ref,
   offset : ["0 1", "1.33 1"]
  });
//   scaling the size increase when the projects transform 
  const scaleTransform = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgressTransform = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  




  return (
    // position relative makes it so that images are relative to their section
    <motion.div
    ref={ref }
    style={
      {scale: scaleTransform,
      opacity: opacityProgressTransform}
    }
    className="group mb-3 sm:mb-8 last:mb-0"
>
    <section
    className='bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]  even:pl-8 hover:bg-gray-200 hover:scale-105 transition group-even:pl-8 rounded-lg'>
      <div className='group-even:ml-[18rem] pt-4 pb-7 spx-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full'>

      <h3 className='text-2xl font-semibold'>
        {title}      </h3> 

        <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
        <ul className='flex flex-wrap mt-4  gap-2 sm:mt-auto'>
          {tags.map((tag, index) => (
            <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wide text-white rounded-full' key={index}>{tag}</li>
          ))}
        </ul>
        <Image src={imageUrl} alt={title} quality={95} className='
        transition
        group-hover:-translate-x-3 
        group-hover:-translate-y-3 
        group-hover:-rotate-2 
        absolute 
        top-8 -right-40 
        w-[28.25rem] 
        rounded-t-lg 
        shadow-2xl
        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3 
        group-even:group-hover:rotate-2 

        group-even:right-[initial]
        group-even:-left-40   '/> 
      </div>
      
    </section>
    </motion.div>
)
}