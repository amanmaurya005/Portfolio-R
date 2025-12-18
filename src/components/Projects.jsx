import React, { useState } from "react";
import "../style/Sections.css";

const Projects = () => {
  const projectsByTech = [
    {
      tech: "React",
      projects: [
        {
          id: 1,
          title: "React Portfolio",
          img: "https://i.ibb.co/Nyx0XCS/portfolio.jpg",
          demo: "https://yourportfolio.com",
        },
        {
          id: 2,
          title: "React E-commerce",
          img: "https://i.ibb.co/N13kkbK/react-ecom.jpg",
          demo: "https://yourecommerce.com",
        },
      ],
    },
    {
      tech: "Tailwind",
      projects: [
        {
          id: 3,
          title: "Tailwind UI Kit",
          img: "https://i.ibb.co/5KkQHPN/tailwind.jpg",
          demo: "https://yourtailwinduikit.com",
        },
      ],
    },
    {
      tech: "JavaScript",
      projects: [
        {
          id: 4,
          title: "JS Quiz App",
          img: "https://i.ibb.co/fxCvKPQ/jsquiz.jpg",
          demo: "https://yourquizapp.com",
        },
      ],
    },
    {
      tech: "Bootstrap",
      projects: [
        {
          id: 5,
          title: "Weather App",
          img: "https://i.ibb.co/ykCCfXZ/weather.jpg",
          demo: "https://yourweatherapp.com",
        },
      ],
    },
  ];

  const techList = ["All", ...projectsByTech.map((t) => t.tech)];
  const [selectedTech, setSelectedTech] = useState("All");

  const filteredProjects =
    selectedTech === "All"
      ? projectsByTech.flatMap((item) =>
          item.projects.map((p) => ({ ...p, tech: item.tech }))
        )
      : projectsByTech.find((item) => item.tech === selectedTech)
          ?.projects.map((p) => ({ ...p, tech: selectedTech })) || [];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-wrapper">

        <h1 className="projects-title">
          My <span>Projects</span>
        </h1>
        <div className="title-line"></div>

        <div className="filter-container">
          {techList.map((tech) => (
            <button
              key={tech}
              className={`filter-btn ${selectedTech === tech ? "active" : ""}`}
              onClick={() => setSelectedTech(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-img">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <span className="tag">{project.tech}</span>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-btn"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
