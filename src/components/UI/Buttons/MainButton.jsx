import styles from './MainButton.module.css';

const MainButton = ({ children = 'Download CV', onClick, className = '' }) => {
  return (
    <button 
      className={`${styles.button} body-text-regular ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MainButton;
