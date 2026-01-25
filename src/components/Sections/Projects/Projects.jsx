import React from 'react';
import cinePeekImg from '../../../img/projectPrev01.jpg';
import catGameImg from '../../../img/projectPrev02.png';
import kitoImg from '../../../img/projectPrev03.png';
import ProjectCard from '../../UI/Card/ProjectCard';

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
  return (
    <section
      id="portfolio"
      style={{
        padding: '4rem 2rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--color-background-default)',
        position: 'relative',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}>
        <div style={{
          width: '100%',
          textAlign: 'center',
          marginBottom: '3rem',
          marginTop: '3rem',
        }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: 'var(--color-primary-main)', 
            fontFamily: 'monospace',
          }}>
            &lt; Recent Work /&gt;
          </span>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: 'var(--color-text-primary)',
            margin: 0,
          }}>
            Featured Projects
          </h2>
        </div>

        <div style={{
          position: 'relative',
          width: '100%',
        }}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isFirst={index === 0}
              isLast={index === projects.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
