"use client";
import React, { useState } from "react";
import "./Navbar.scss";
import AnimatedContainer from "../AnimatedContainer/AnimatedContainer";

const navLinks = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "Experience",
    link: "#experience"
  },
  {
    title: "Projects",
    link: "#projects"
  },
  {
    title: "Contact",
    link: "#contact"
  }
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Karan Joshi</a>
      </div>
      <div className={`navbar-toggle ${isOpen ? "open" : "closed"}`} onClick={toggleMenu}>
        {/* <span className="navbar-toggle-icon">&#9776;</span> */}
        <span className="bar bar-1"></span>
        <span className="bar bar-2"></span>
        <span className="bar bar-1"></span>
      </div>
      <ul className={`navbar-links ${isOpen ? "navbar-links--open" : ""}`}>
        {navLinks.map((navLink, index) => (
          <li key={index} className="navbar-item">
            <AnimatedContainer key={index} animationType="fade-up" animationDelay={50 * index}>
              <a href={navLink.link} className="navbar-link" onClick={toggleMenu}>
                {navLink.title}
              </a>
            </AnimatedContainer>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
