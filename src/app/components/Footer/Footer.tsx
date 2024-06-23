// Footer.tsx
import React from "react";
import "./Footer.scss";
import { GithubIcon, Linkedin, MailIcon } from "lucide-react";
// Import FontAwesome icons

const techSkills = [
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
const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="footer-title">About Me</h1>
          <p className="footer-text">I'm a web developer with hand's on experience in :</p>
          <div className="footer-skills">
            {techSkills.map((skill) => (
              <span className="footer-skill"> {skill} </span>
            ))}
          </div>
        </div>
        <div className="footer-section links">
          <h1 className="footer-title">Quick Links</h1>
          <ul>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h1 className="footer-title">Contact</h1>
          <p className="footer-text">
            Email:{" "}
            <a target="_blank" href="mailto:joshikaran392@gmail.com">
              joshikaran392@gmail.com
            </a>
          </p>
          <p className="footer-text">Phone: +91 8532055221</p>
        </div>
        <div className="footer-section social">
          <h1 className="footer-title">Follow Me</h1>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/karan-joshi-5397591a7/" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href="https://github.com/karanjoshi1206" target="_blank" rel="noopener noreferrer">
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
