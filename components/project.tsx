"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

import { projectsData } from "@/library/data";
import Image from "next/image";
import Link from "next/link";

type ProjectItemProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  gitHubURL,
  projectURL,
}: ProjectItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="relative overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition group-hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 h-full flex flex-col"
      whileHover={{ scale: 1.03, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)" }}
    >
      <div className="w-full h-48 overflow-hidden relative">
        <Image
          src={imageUrl}
          alt={`${title} project`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-white/70">
          {description}
        </p>
        <div className="mt-2 mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-black/[0.7] px-3 py-1 text-xs uppercase tracking-wider text-white dark:text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <div className="flex gap-2">
            <Link
              href={projectURL}
              className="group bg-gray-900 text-white px-4 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            >
              View
            </Link>
            <Link
              href={gitHubURL}
              className="group bg-white px-4 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            >
              See code
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
