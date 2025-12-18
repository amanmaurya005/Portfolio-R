import React from "react";
import "../style/Sections.css";
// import './index.css'


const Resume = () => {
  return (
    <section id="resume" className="section resume">
      <h1>Resume</h1>
      <p>
        Download my resume or explore my professional background.
      </p>
      <a
        href="/Aman_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
      >
        View Resume
      </a>
    </section>
  );
};

export default Resume;
