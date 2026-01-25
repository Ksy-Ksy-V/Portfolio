import React, { useState } from 'react';
import { AnimatedBackground } from './AnimatedBackground.jsx';
import MainButton from '../../UI/Buttons/MainButton';
import OutlineButton from '../../UI/Buttons/OutlineButton';
import H1TextEffect from '../../UI/Text/H1TextEffect';
import TypewriterText from '../../UI/Text/TypewriterText';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { heroSectionData } from '../../../data/HomePageData';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const [greetingComplete, setGreetingComplete] = useState(false);
  const isMobile = useMediaQuery('(max-width: 480px)');
  const { greeting, title, description, descriptionsMobile, typingSpeed, buttons } = heroSectionData;
  
  const currentDescription = isMobile ? descriptionsMobile : description;

  return (
    <section 
      id="home" 
      className={`${styles.section} ${styles.heroSection} relative w-full flex items-center pt-20 overflow-x-hidden`}
    >
      <AnimatedBackground />
      
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.greeting}>
            <span className="heading-h3 mb-4 block">
              <TypewriterText 
                text={greeting}
                typingSpeed={typingSpeed}
                onComplete={() => setGreetingComplete(true)}
              />
            </span>
          </div>

          <h1 className={`headline-h1 ${styles.title}`}>
            <H1TextEffect>
              {title.main}
            </H1TextEffect>
            <br />
            <span className={styles.titleSpan}>{title.secondary}</span>
          </h1>
          
          <div className={`heading-h4 max-w-2xl ${styles.description}`}>
            {greetingComplete ? (
              <>
                {currentDescription.map((line, index) => {
                  const previousLength = currentDescription
                    .slice(0, index)
                    .reduce((sum, line) => sum + line.length, 0);
                  const delay = 100 + (previousLength * typingSpeed);
                  
                  return (
                    <React.Fragment key={index}>
                      {index > 0 && <br />}
                      <TypewriterText 
                        text={line}
                        typingSpeed={typingSpeed}
                        delay={delay}
                      />
                    </React.Fragment>
                  );
                })}
              </>
            ) : (
              <>
                {Array.from({ length: isMobile ? 4 : 2 }).map((_, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <br />}
                    <span className={styles.cursor}>|</span>
                  </React.Fragment>
                ))}
              </>
            )}
          </div>
        
          <div className={styles.buttons}>
            <MainButton>{buttons.primary}</MainButton>
            <OutlineButton>{buttons.secondary}</OutlineButton>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollIndicatorContainer}>
          <div className={styles.scrollDot} />
        </div>
      </div>
    </section>
  );
}
