// ProjectsSection.jsx
import React from "react";
import "./ProjectSection.scss";
import ProjectCard from "./ProjectCard/ProjectCard";
import { projects } from "./projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-content">
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} techStack={project.techStack} image={project.image} demoUrl={project.demoUrl} codeUrl={project.codeUrl} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
