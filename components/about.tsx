"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/library/hooks";

export const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Engineering</span>, I decided to
        pursue my passion for programming. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and PostgreSQL
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies.
      </p>

      <p>
        <span className="italic">When I am not coding</span>, I dedicate
        significant time to cybersecurity, particularly focusing on penetration
        testing and offensive security. I am{" "}
        <span className="font-medium">OSCP, PNPT and eJPT certified.</span>{" "}
        Experience using industry standard tools and techniques to include:
        Metasploit, Covenant, Burp Suite, SQLMap, Gobuster, Hashcat, John the
        Ripper, Impacket, NTLMrelay, Nmap, Proxychains, SSH tunnels, Ligolo-ng.
        I am always working towards improving my skills and abilities.
      </p>
    </motion.section>
  );
};

export default About;
