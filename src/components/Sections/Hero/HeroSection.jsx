import { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { AnimatedBackground } from './AnimatedBackground.jsx';
import MainButton from '../../UI/Buttons/MainButton';
import OutlineButton from '../../UI/Buttons/OutlineButton';
import H1TextEffect from '../../UI/Text/H1TextEffect';
import TypewriterText from '../../UI/Text/TypewriterText';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { heroSectionData } from '../../../data/HomePageData';
import styles from './HeroSection.module.css';

const DURATION = 1.15;
const EASE = 'power2.out';
const INITIAL_DELAY = 0.25;

export default function HeroSection() {
  const [greetingComplete, setGreetingComplete] = useState(false);
  const isMobile = useMediaQuery('(max-width: 480px)');
  const { greeting, title, description, descriptionsMobile, typingSpeed, buttons } = heroSectionData;

  const contentRef = useRef(null);
  const greetingRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const scrollDotRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: DURATION, ease: EASE },
        delay: INITIAL_DELAY,
      });

      tl.from(contentRef.current, { opacity: 0, y: 36 }, 0)
        .from(greetingRef.current, { opacity: 0, y: 24 }, 0.35)
        .from(titleRef.current, { opacity: 0, y: 24 }, 0.7)
        .from(descriptionRef.current, { opacity: 0, y: 24 }, 1.1)
        .from(buttonsRef.current, { opacity: 0, y: 24 }, 1.5);

      gsap.set(scrollIndicatorRef.current, { xPercent: -50 });
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
        delay: INITIAL_DELAY + 2.2,
      });
      gsap.to(scrollDotRef.current, {
        y: 12,
        duration: 1,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
        delay: INITIAL_DELAY + 2.2,
      });
    });

    return () => ctx.revert();
  }, []);

  const currentDescription = isMobile ? descriptionsMobile : description;

  return (
    <section
      id="home"
      className={`${styles.section} ${styles.heroSection} relative w-full flex items-center pt-20 overflow-x-hidden`}
    >
      <AnimatedBackground />

      <div className={styles.contentWrapper}>
        <div ref={contentRef} className={styles.content}>
          <div ref={greetingRef} className={styles.greeting}>
            <span className="heading-h3 mb-4 block">
              <TypewriterText
                text={greeting}
                typingSpeed={typingSpeed}
                onComplete={() => setGreetingComplete(true)}
              />
            </span>
          </div>

          <h1 ref={titleRef} className={`headline-h1 ${styles.title}`}>
            <H1TextEffect>
              {title.main}
            </H1TextEffect>
            <br />
            <span className={styles.titleSpan}>{title.secondary}</span>
          </h1>

          <div ref={descriptionRef} className={`heading-h4 max-w-2xl ${styles.description}`}>
            {greetingComplete ? (
              <>
                {currentDescription.map((line, index) => {
                  const previousLength = currentDescription
                    .slice(0, index)
                    .reduce((sum, line) => sum + line.length, 0);
                  const delay = 100 + (previousLength * typingSpeed);

                  return (
                    <span key={index}>
                      {index > 0 && <br />}
                      <TypewriterText
                        text={line}
                        typingSpeed={typingSpeed}
                        delay={delay}
                      />
                    </span>
                  );
                })}
              </>
            ) : (
              <>
                {Array.from({ length: isMobile ? 4 : 2 }).map((_, index) => (
                  <span key={index}>
                    {index > 0 && <br />}
                    <span className={styles.cursor}>|</span>
                  </span>
                ))}
              </>
            )}
          </div>

          <div ref={buttonsRef} className={styles.buttons}>
            <MainButton>{buttons.primary}</MainButton>
            <OutlineButton>{buttons.secondary}</OutlineButton>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollIndicatorRef} className={styles.scrollIndicator}>
        <div className={styles.scrollIndicatorContainer}>
          <div ref={scrollDotRef} className={styles.scrollDot} />
        </div>
      </div>
    </section>
  );
}
