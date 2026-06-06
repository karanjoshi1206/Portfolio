"use client";
import React, { useState, useEffect } from "react";
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
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check system preference or localStorage
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark;
    
    setIsDark(shouldBeDark);
    applyTheme(shouldBeDark);
  }, []);

  const applyTheme = (isDarkTheme: boolean) => {
    const html = document.documentElement;
    if (isDarkTheme) {
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    applyTheme(newTheme);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">KJ</a>
      </div>
      <div className={`navbar-toggle ${isOpen ? "open" : "closed"}`} onClick={toggleMenu}>
        <span className="bar bar-1"></span>
        <span className="bar bar-2"></span>
        <span className="bar bar-3"></span>
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
      <button 
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
