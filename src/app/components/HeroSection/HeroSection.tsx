import React from "react";
import "./HeroSection.scss";
import AnimatedContainer from "../AnimatedContainer/AnimatedContainer";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <AnimatedContainer animationType="fade-up" animationDelay={0}>
          <h1 className="hero-title">Hi, I&apos;m Karan Joshi</h1>
        </AnimatedContainer>
        <AnimatedContainer animationType="fade-up" animationDelay={100}>
          <p className="hero-description">A passionate Web Developer specializing in modern web technologies. I build responsive and performant web applications.</p>
        </AnimatedContainer>

        <AnimatedContainer animationType="fade-up" animationDelay={200}>
          <a href="https://drive.google.com/file/d/11oWiqnF7eOJTL8mZll2hr5Kgn1_4uwXx/view?usp=sharing" target="_blank" className="hero-button">
            View Resume
          </a>
        </AnimatedContainer>
      </div>
    </section>
  );
};

export default HeroSection;
