import React, { useState } from "react";
import "../style/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close menu after clicking
  };

  return (
    <nav className="navbar">
      <div className="logo">AmanMaurya</div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li onClick={() => scrollToSection("hero")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("resume")}>Resume</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;