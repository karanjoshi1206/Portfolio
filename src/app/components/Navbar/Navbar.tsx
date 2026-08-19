"use client";
import React, { useState, useEffect } from "react";
import "./Navbar.scss";

const navLinks = [
  { title: "Experience", link: "#experience" },
  { title: "Projects", link: "#projects" },
  { title: "Contact", link: "#contact" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const shouldBeDark = savedTheme === "dark";

    setIsDark(shouldBeDark);
    applyTheme(shouldBeDark);
  }, []);

  const applyTheme = (isDarkTheme: boolean) => {
    document.documentElement.setAttribute("data-theme", isDarkTheme ? "dark" : "light");
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  };

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    applyTheme(next);
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="/" className="navbar-logo" onClick={closeMenu}>
          Karan Joshi
        </a>
        <button
          className={`navbar-toggle ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="bar" />
          <span className="bar" />
        </button>
        <ul className={`navbar-links ${isOpen ? "navbar-links--open" : ""}`}>
          {navLinks.map((navLink) => (
            <li key={navLink.title}>
              <a href={navLink.link} onClick={closeMenu}>
                {navLink.title}
              </a>
            </li>
          ))}
          <li>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {isDark ? "Light" : "Dark"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
