import React from 'react';
import ProjectCard from '../../UI/Card/ProjectCard';
import { projectsData } from '../../../data/HomePageData';
import styles from './Projects.module.css';

export function Projects() {
  const { sectionLabel, sectionTitle, projects } = projectsData;

  return (
    <section
      id="portfolio"
      className={styles.section}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={`heading-h3 ${styles.label}`}>
            {sectionLabel}
          </h3>
          <h2 className={`heading-h2 ${styles.title}`}>
            {sectionTitle}
          </h2>
        </div>

        <div className={styles.projectsList}>
          {projects.map((project, index) => {
            const scrollAnimationDelay = index * 0.15;  
            
            return (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                isFirst={index === 0}
                isLast={index === projects.length - 1}
                scrollAnimationDelay={scrollAnimationDelay}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
