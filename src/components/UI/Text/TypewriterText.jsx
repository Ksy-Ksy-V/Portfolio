import { useState, useEffect } from 'react';

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

  const textStyle = {
    fontFamily: "'Consolas', 'Courier New', monospace",
    whiteSpace: 'nowrap',
  };

  const cursorStyle = {
    display: 'inline-block',
    marginLeft: '2px',
    color: 'var(--color-primary-main)',
    animation: 'blink 1s infinite',
  };

  return (
    <>
      <style>
        {`
          @keyframes blink {
            0%, 50% {
              opacity: 1;
            }
            51%, 100% {
              opacity: 0;
            }
          }
        `}
      </style>
      <span style={textStyle} className={className}>
        {displayedText}
        {displayedText.length < text.length && (
          <span style={cursorStyle}>|</span>
        )}
      </span>
    </>
  );
};

export default TypewriterText;
