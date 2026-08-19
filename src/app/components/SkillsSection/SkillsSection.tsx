import React from "react";
import "./SkillsSection.scss";

export const techSkills = [
  "ReactJs",
  "NextJs",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "SASS",
  "Bootstrap",
  "TailwindCSS",
  "Material-UI",
  "NodeJs",
  "ExpressJs",
  "Firebase",
  "REST API",
  "Git",
  "GitHub",
  "Netlify",
  "Heroku",
  "Vercel"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-label">Skills</h2>
      <p className="skills-list">{techSkills.join("  ·  ")}</p>
    </section>
  );
};

export default SkillsSection;
