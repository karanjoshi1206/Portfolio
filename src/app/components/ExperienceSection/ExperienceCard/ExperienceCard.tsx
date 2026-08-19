import React from "react";
import "./ExperienceCard.scss";

type ExperienceCardProps = {
  title: string;
  company: string;
  date: string;
  description: string;
  skills?: string[];
};

const ExperienceCard = ({ title, company, date, description, skills }: ExperienceCardProps) => {
  return (
    <article className="experience-card">
      <header className="experience-card-header">
        <div>
          <h3 className="experience-card-title">{title}</h3>
          <p className="experience-card-company">{company}</p>
        </div>
        <p className="experience-card-date">{date}</p>
      </header>
      <p className="experience-card-description">{description}</p>
      {skills && skills.length > 0 && (
        <p className="experience-skills">{skills.join("  ·  ")}</p>
      )}
    </article>
  );
};

export default ExperienceCard;
