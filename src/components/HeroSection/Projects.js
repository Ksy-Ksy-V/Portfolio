import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import cinePeekImg from '../../img/projectPrev01.jpg';
import catGameImg from '../../img/projectPrev02.png';
import kitoImg from '../../img/projectPrev03.png';

const projects = [
  {
    title: "CinePeek",
    date: "April 2024",
    description:
      "A dynamic web application designed for movie and TV show enthusiasts to discover and track their favorite content.",
    image: cinePeekImg,
    tags: ["React", "API", "TypeScript"],
    route: "/portfolio-details/1",
  },
  {
    title: "Personal Portfolio",
    date: "July 2024",
    description:
      "Modern portfolio website showcasing projects and skills with clean design and smooth animations.",
    image: null,
    tags: ["React", "Motion", "Design"],
    route: "/",
  },
  {
    title: "Cat Game",
    date: "August 2024",
    description:
      "A 2D retro-style platformer with pixelated graphics reminiscent of classic arcade games.",
    image: catGameImg,
    tags: ["Canvas", "JavaScript", "Game Dev"],
    route: "/portfolio-details/2",
  },
  {
    title: "Kito",
    date: "September - December 2024",
    description:
      "A comprehensive web app for anime fans to explore, organize, and track their favorite shows.",
    image: kitoImg,
    tags: ["React", "Database", "UI/UX"],
    route: "/portfolio-details/3",
  },
];

export function Projects() {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <section
      id="portfolio"
      className="projects-section"
    >
      <div className="projects-container">
        <div className="projects-header">
          <span className="projects-label">
            &lt; Recent Work /&gt;
          </span>
          <h2 className="projects-title">
            Featured Projects
          </h2>
        </div>

        <div className="projects-content">
          {/* Vertical Timeline */}
          <div className="projects-timeline-line"></div>

          <div className="projects-list">
            {projects.map((project, index) => (
              <div key={index} className="projects-item">
                {/* Timeline dot */}
                <div className="projects-timeline-dot">
                  <div className="projects-timeline-dot-inner"></div>
                  <div className="projects-timeline-dot-ping"></div>
                </div>

                <div className={`projects-grid ${index % 2 === 1 ? 'projects-grid-reverse' : ''}`}>
                  <div className={`projects-info ${index % 2 === 1 ? 'projects-info-right' : 'projects-info-left'}`}>
                    <p className="projects-date">
                      {project.date}
                    </p>
                    <h3 className="projects-item-title">
                      {project.title}
                    </h3>

                    <p className="projects-item-description">
                      {project.description}
                    </p>

                    <div className="projects-tags">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="projects-tag"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      className="projects-button"
                      onClick={() => handleNavigate(project.route)}
                    >
                      View Project →
                    </button>
                  </div>

                  {project.image ? (
                    <div className={`projects-image-wrapper ${index % 2 === 1 ? 'projects-image-left' : 'projects-image-right'}`}>
                      <div className="projects-image-container">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="projects-image"
                        />
                        <div className="projects-image-overlay"></div>
                      </div>
                    </div>
                  ) : (
                    <div className={`projects-image-wrapper ${index % 2 === 1 ? 'projects-image-left' : 'projects-image-right'}`}>
                      <div className="projects-placeholder">
                        <div className="projects-placeholder-text">
                          KSY
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
