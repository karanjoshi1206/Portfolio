// ProjectCard.jsx
import React from "react";
import "./ProjectCard.scss";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  demoUrl: string;
  codeUrl: string;
};
const ProjectCard = ({ title, description, techStack, image, demoUrl, codeUrl }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <div className="project-image">
        {/* <img src={require(`./images/${image}`).default} alt={title} /> */}
        {/* <img src="https://hackathon-bias.vercel.app/images/im3.png" alt="" /> */}
        <img src={`/assets/projects/${image}`} alt="" />
        {/* <Image src={"/assets/projects/hackathon.png"} alt={title} width={100} height={100} loading="eager" quality={100}/> */}
      </div>
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className="tech">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a href={demoUrl} className="project-link" target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a href={codeUrl} className="project-link" target="_blank" rel="noopener noreferrer">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
