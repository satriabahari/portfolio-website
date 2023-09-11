import React from "react";
import SectionHeading from "./section-heading";
import { projects } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section id="projects" className="mb-32 scroll-mt-28">
      <SectionHeading>My Projects.</SectionHeading>
      <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
