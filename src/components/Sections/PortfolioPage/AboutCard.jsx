import React from 'react'
import styles from './AboutCard.module.css'

const DESIGN_EMPHASIZES = 'The design emphasizes:\n\n'

const AboutCard = ({ description, goals = [], descriptionParts }) => {
  return (
    <div className={`${styles.aboutCard} ${styles.gridCellAbout}`}>
      <p className={styles.contextTag}>{'< 01 />'}</p>
      <h3 className={`heading-h4 ${styles.aboutTitle}`}>About the Project</h3>
      <div className={`body-text-regular ${styles.description} ${styles.descriptionWithBreaks}`}>
        {descriptionParts ? (
          <>
            <span className={styles.descriptionBlock}>{descriptionParts[0]}</span>
            <span className={styles.descriptionBlock}>{DESIGN_EMPHASIZES.trim()}</span>
            <ul className={styles.aboutGoalsList}>
              {goals.map((goal, idx) => (
                <li key={idx} className={styles.aboutGoalsItem}>
                  {goal}
                </li>
              ))}
            </ul>
            <span className={styles.descriptionBlock}>{descriptionParts[1]}</span>
          </>
        ) : (
          <span className={styles.descriptionBlock}>{description}</span>
        )}
      </div>
    </div>
  )
}

export default AboutCard
export { DESIGN_EMPHASIZES }
