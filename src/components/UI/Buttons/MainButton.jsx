import { useState } from 'react';

const MainButton = ({ children = 'Download CV', onClick, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles = {
    position: 'relative',
    padding: '10px 30px',
    margin: '2rem',
    marginLeft: '0',
    marginBottom: '6rem',
    color: isHovered ? 'var(--color-background-default)' : '#FFFFFF',
    textDecoration: 'none',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: '16px',
    overflow: 'hidden',
    transition: '0.5s',
    background: isHovered 
      ? 'linear-gradient(to right, var(--color-primary-light), var(--color-primary-main))'
      : 'linear-gradient(to right, var(--color-primary-main), var(--color-primary-light))',
    border: 'none',
    cursor: 'pointer',
    fontFamily: "'Consolas', 'Courier New', monospace",
    borderRadius: '0.15rem',
    boxShadow: isHovered 
      ? '0 0 10px var(--color-primary-main), 0 0 40px var(--color-primary-main), 0 0 80px var(--color-primary-main)'
      : 'none',
    transitionDelay: isHovered ? '0s' : '0.5s',
  };

  return (
    <>
      <style>
        {`
          .main-button {
            position: relative;
            padding: 10px 30px;
            margin: 2rem;
            margin-left: 0;
            margin-bottom: 6rem;
            color: #FFFFFF;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 16px;
            overflow: hidden;
            transition: 0.5s;
            background: linear-gradient(to right, var(--color-primary-main), var(--color-primary-light));
            border: none;
            cursor: pointer;
            font-family: 'Consolas', 'Courier New', monospace;
            border-radius: 0.15rem;
          }
          .main-button:hover {
            color: var(--color-background-default);
            background: linear-gradient(to right, var(--color-primary-light), var(--color-primary-main));
            box-shadow: 
              0 0 10px var(--color-primary-main), 
              0 0 40px var(--color-primary-main), 
              0 0 80px var(--color-primary-main);
            transition-delay: 0s;
          }
        `}
      </style>
      <button 
        className={`main-button body-text-regular ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default MainButton;
