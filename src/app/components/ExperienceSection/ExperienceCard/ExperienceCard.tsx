// ExperienceCard.jsx
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
    <div className="experience-card">
      <h3 className="experience-card-title">{title}</h3>
      <p className="experience-card-company">{company}</p>
      <p className="experience-card-date">{date}</p>
      <p className="experience-card-description">{description}</p>

      <div className="experience-skills-section">
        <h4 className="experience-skills-title">Key Skills:</h4>
        <ul className="experience-skills-list">
          {skills?.map((skill, index) => (
            <li key={index} className="experience-skill">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
