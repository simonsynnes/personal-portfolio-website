"use client";

import { projectsData } from "@/library/data";
import Project from "./project";
import { useSectionInView } from "@/library/hooks";
import SectionHeading from "./section-heading";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.1);

  return (
    <section
      id="projects"
      ref={ref}
      className="mb-28 scroll-mt-28 px-4 sm:px-12"
    >
      <div className="mt-8 sm:mt-16">
        {" "}
        {/* Adjustable margin top here */}
        <SectionHeading>My projects</SectionHeading>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {projectsData.map((project) => (
            <li key={project.title} className="group mb-3 sm:mb-0">
              <Project {...project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
