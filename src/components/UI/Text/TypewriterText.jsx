import { useState, useEffect } from 'react';
import styles from './TypewriterText.module.css';

const TypewriterText = ({ text, typingSpeed = 100, delay = 0, onComplete, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (delay > 0 && !hasStarted) {
      const startTimeout = setTimeout(() => {
        setHasStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    } else if (delay === 0) {
      setHasStarted(true);
    }
  }, [delay, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (displayedText.length === text.length && onComplete) {
      onComplete();
    }
  }, [displayedText, text, typingSpeed, hasStarted, onComplete]);

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
