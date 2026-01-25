import React, { useMemo } from 'react';
import { techStackData } from '../../../data/HomePageData';
import styles from './RunningLine.module.css';

const REPEAT_COUNT = 10;

export function TechStackTicker() {
  const { technologies } = techStackData;

  const repeatedSets = useMemo(() => {
    return Array.from({ length: REPEAT_COUNT }, (_, setIndex) => (
      <React.Fragment key={setIndex}>
        <div className={styles.set}>
          {technologies.map((tech, index) => (
            <React.Fragment key={`${setIndex}-${index}`}>
              <span className={styles.text}>
                {tech}
              </span>
              {index < technologies.length - 1 && (
                <span className={styles.separator} aria-hidden="true">●</span>
              )}
            </React.Fragment>
          ))}
        </div>
        {setIndex < REPEAT_COUNT - 1 && (
          <span className={styles.separator} aria-hidden="true">●</span>
        )}
      </React.Fragment>
    ));
  }, [technologies]);

  return (
    <div className={styles.ticker} role="region" aria-label="Technology stack">
      <div className={styles.track}>
        {repeatedSets}
      </div>
    </div>
  );
}

export default TechStackTicker;
