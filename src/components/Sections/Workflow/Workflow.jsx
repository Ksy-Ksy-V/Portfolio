import { useMemo } from 'react';
import WorkflowCard from '../../UI/Card/WorkflowCard';
import { workflowData } from '../../../data/HomePageData';
import styles from './Workflow.module.css';

export function Workflow() {
  const { sectionLabel, sectionTitle, stages } = workflowData;

  const cardsWithAnimations = useMemo(() => {
    return stages.map((stage, index) => {
      const randomDelay = Math.random() * 5;
      const randomDuration = 12 + Math.random() * 8;
      const scrollAnimationDelay = index * 0.1; 
      
      return (
        <WorkflowCard
          key={index}
          stage={stage}
          randomDelay={randomDelay}
          randomDuration={randomDuration}
          scrollAnimationDelay={scrollAnimationDelay}
        />
      );
    });
  }, [stages]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={`heading-h3 ${styles.label}`}>
            {sectionLabel}
          </h3>
          <h2 className={`heading-h2 ${styles.title}`}>
            {sectionTitle}
          </h2>
        </div>

        <div className={styles.grid}>
          {cardsWithAnimations}
        </div>
      </div>
    </section>
  );
}

export default Workflow;
