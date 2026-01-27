import React from 'react'
import ProjectNavButton from '../../../components/UI/Buttons/ProjectNavButton'
import { AnimatedBackground } from '../Hero/AnimatedBackground'
import styles from './ProjectHeaderWithImage.module.css'

const ProjectHeaderWithImage = ({
  title,
  sliderData,
  projects,
  currentIndex,
  onPrev,
  onNext,
  onDotClick,
  isMobile,
}) => {
  return (
    <>
      <header className={styles.projectHeader}>
        <ProjectNavButton
          direction="prev"
          onClick={onPrev}
          ariaLabel="Previous project"
          iconSize={isMobile ? 32 : 48}
        />
        <div className={styles.projectTitleBlock}>
          <p className={styles.projectContext}>{'< Project Details />'}</p>
          <h2 className={`heading-h2 ${styles.projectTitle}`}>{title}</h2>
        </div>
        <ProjectNavButton
          direction="next"
          onClick={onNext}
          ariaLabel="Next project"
          iconSize={isMobile ? 32 : 48}
        />
      </header>

      <div className={styles.imageSection}>
        <div className={styles.imageWrapper}>
          <AnimatedBackground />
          <img src={sliderData} alt={title} className={styles.image} />
          <div className={styles.stepper}>
            {projects.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => onDotClick(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectHeaderWithImage
