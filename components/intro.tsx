"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { useSectionInView } from "@/library/hooks";
import { useCurrentSectionContext } from "@/contexts/current-section-theme";
import simonsynnesImg from "@/public/simonsynnes.jpeg";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setCurrentSection, setTimeOfLastClick } = useCurrentSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[75rem] mx-auto sm:mb-0 scroll-mt-12"
    >
      <div className="flex flex-col sm:flex-row items-start justify-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
          }}
          className="flex-shrink-0 mr-8 mb-4 sm:mb-0"
        >
          <Image
            src={simonsynnesImg}
            alt="Simon portrait"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
        </motion.div>
        <motion.div className="flex-grow">
          <motion.h1
            className="text-2xl sm:text-4xl font-bold leading-snug mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Simon Synnes: Full-Stack Developer
          </motion.h1>
          <motion.p
            className="mb-6 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            With 4 years of experience, I focus on building robust web
            applications and exploring modern cybersecurity practices.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="#contact"
              className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
              onClick={() => {
                setCurrentSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me here{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>
            <a
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              href="/Resume-Simon-Synnes.pdf"
              download
            >
              Download CV{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>
            {/* Social Media Icons grouped separately for mobile */}
            <div className="flex sm:hidden gap-2">
              <a
                className="bg-white p-2 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://linkedin.com/in/simonsynnes"
                target="_blank"
              >
                <BsLinkedin />
              </a>
              <a
                className="bg-white p-2 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://github.com/simonsynnes"
                target="_blank"
              >
                <FaGithubSquare />
              </a>
              <a
                className="bg-white p-2 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://twitter.com/ryx_simon"
                target="_blank"
              >
                <BsTwitter />
              </a>
            </div>
            {/* On larger screens, keep all elements in one row */}
            <div className="hidden sm:flex gap-2">
              <span className="mx-4 h-10 w-px bg-gray-300 dark:bg-white/50"></span>
              <a
                className="bg-white p-2 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://linkedin.com/in/simonsynnes"
                target="_blank"
              >
                <BsLinkedin />
              </a>
              <a
                className="bg-white p-2 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://github.com/simonsynnes"
                target="_blank"
              >
                <FaGithubSquare />
              </a>
              <a
                className="bg-white p-2 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href="https://twitter.com/ryx_simon"
                target="_blank"
              >
                <BsTwitter />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
