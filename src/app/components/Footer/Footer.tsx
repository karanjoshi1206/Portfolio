import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-inner">
        <h2 className="section-label">Contact</h2>
        <p className="footer-lead">
          <a href="mailto:joshikaran392@gmail.com">joshikaran392@gmail.com</a>
        </p>
        <p className="footer-links">
          <a href="https://www.linkedin.com/in/karan-joshi-5397591a7/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span aria-hidden="true"> · </span>
          <a href="https://github.com/karanjoshi1206" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span aria-hidden="true"> · </span>
          <a
            href="https://drive.google.com/file/d/11oWiqnF7eOJTL8mZll2hr5Kgn1_4uwXx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
