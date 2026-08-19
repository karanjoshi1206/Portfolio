import React from "react";
import "./HeroSection.scss";
import AnimatedContainer from "../AnimatedContainer/AnimatedContainer";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <AnimatedContainer animationType="fade-up" animationDelay={0}>
          <p className="hero-kicker">Full Stack Developer</p>
          <h1 className="hero-title">Karan Joshi</h1>
        </AnimatedContainer>
        <AnimatedContainer animationType="fade-up" animationDelay={80}>
          <p className="hero-description">
            A passionate web developer specializing in modern web technologies. I build
            responsive and performant applications with intuitive design.
          </p>
        </AnimatedContainer>
        <AnimatedContainer animationType="fade-up" animationDelay={140}>
          <p className="hero-meta">
            <a href="mailto:joshikaran392@gmail.com">joshikaran392@gmail.com</a>
            <span aria-hidden="true"> · </span>
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
        </AnimatedContainer>
      </div>
    </section>
  );
};

export default HeroSection;
