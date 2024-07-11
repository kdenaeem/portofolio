"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      {/* the flex here centers the div inside  */}
      <div className="flex items-center justify-center">
        <div className="">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/pfp.png"
              alt=""
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      {/* leading is doing the line height */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Naeem.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">1 year</span> of experience and studying at
        Loughborough University. I enjoy building building{" "}
        <span className="italic">impactful</span> applications and experimenting
        with the <span className="underline">latest technologies</span>.
      </motion.h1>

      <motion.h1
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center rounded-full gap-2 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer"
        >
          Contact me here{" "}
          <BsArrowRight className="group-hover:translate-x-1 transition" />{" "}
        </Link>
        {/* one primary button and one secondary button */}

        <a
          href="/CV.pdf"
          download={true}
          className="group bg-white px-7 py-3 flex items-center rounded-full gap-2 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />{" "}
        </a>

        <a
          href="https://www.linkedin.com/in/naeem-mujeeb-309051240/"
          className="bg-white text-gray-700 p-4 flex rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/kdenaeem"
          className="bg-white text-gray-700 p-4 flex rounded-full text-[1.5rem] focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.h1>
    </section>
  );
}
