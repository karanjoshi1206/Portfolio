import React from "react";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I&apos;m Karan Joshi</h1>
        <p className="hero-description">A passionate Web Developer specializing in modern web technologies. I build responsive and performant web applications.</p>

        <a href=" https://drive.google.com/file/d/1jcaXJaHmBjDqxFVwV3oFofCjfHL6VitI/view" target="_blank" className="hero-button">
          View Resume
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
