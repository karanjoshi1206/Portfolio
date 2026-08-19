import React from "react";
import "./ProjectCard.scss";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  demoUrl: string;
  codeUrl: string;
};

const ProjectCard = ({ title, description, techStack, demoUrl, codeUrl }: ProjectCardProps) => {
  return (
    <article className="project-card">
      <header className="project-header">
        <h3 className="project-title">{title}</h3>
        <p className="project-links">
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <span aria-hidden="true"> · </span>
          <a href={codeUrl} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        </p>
      </header>
      <p className="project-description">{description}</p>
      <p className="project-tech">{techStack.join("  ·  ")}</p>
    </article>
  );
};

export default ProjectCard;
