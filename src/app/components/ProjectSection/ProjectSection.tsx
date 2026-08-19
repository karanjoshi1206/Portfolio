import React from "react";
import "./ProjectSection.scss";
import ProjectCard from "./ProjectCard/ProjectCard";
import { projects } from "./projects";
import AnimatedContainer from "../AnimatedContainer/AnimatedContainer";

const ProjectsSection = () => {
  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-label">Projects</h2>
      <div className="projects-content">
        {projects.map((project, index) => (
          <AnimatedContainer key={project.title} animationType="fade-up" animationDelay={50 * index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
            />
          </AnimatedContainer>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
