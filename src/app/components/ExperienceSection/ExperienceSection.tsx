// ExperienceSection.jsx
import React from "react";
import "./ExperienceSection.scss";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { experiences } from "./expericeData";

const ExperienceSection = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-content">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} title={experience.title} company={experience.company} date={experience.date} description={experience.description} skills={experience.skills} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
