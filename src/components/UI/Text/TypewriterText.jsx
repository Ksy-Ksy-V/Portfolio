import { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import styles from './TypewriterText.module.css';

const TypewriterText = ({
  text,
  typingSpeed = 100,
  delay = 0,
  onComplete,
  className = '',
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const progressRef = useRef({ value: 0 });
  const onCompleteRef = useRef(onComplete);

  onCompleteRef.current = onComplete;

  useLayoutEffect(() => {
    if (!text.length) {
      setDisplayedText('');
      return;
    }

    progressRef.current.value = 0;
    setDisplayedText('');

    const duration = (text.length * typingSpeed) / 1000;
    const delaySec = delay / 1000;

    const tween = gsap.to(progressRef.current, {
      value: text.length,
      duration,
      delay: delaySec,
      ease: 'none',
      onUpdate: () => {
        setDisplayedText(
          text.slice(0, Math.round(progressRef.current.value))
        );
      },
      onComplete: () => {
        setDisplayedText(text);
        onCompleteRef.current?.();
      },
    });

    return () => tween.kill();
  }, [text, typingSpeed, delay]);

  return (
    <span className={`${styles.text} ${className}`}>
      {displayedText}
      {displayedText.length < text.length && (
        <span className={styles.cursor}>|</span>
      )}
    </span>
  );
};

export default TypewriterText;
