"use client";

import { projectsData } from "@/library/data";
import Project from "./project";
import { useSectionInView } from "@/library/hooks";
import SectionHeading from "./section-heading";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.1);

  return (
    <section id="projects" ref={ref} className="mb-28 scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <ul>
        {projectsData.map((project) => (
          <li key={project.title} className="group mb-3 last:mb-0 sm:mb-8">
            <Project {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
