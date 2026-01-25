import styles from './OutlineButton.module.css';

const OutlineButton = ({ children = 'View Projects', onClick, className = '' }) => {
  return (
    <button 
      className={`${styles.button} body-text-regular ${className}`}
      onClick={onClick}
    >
      <span className={styles.animatedBorder}></span>
      <span className={styles.animatedBorder}></span>
      <span className={styles.animatedBorder}></span>
      <span className={styles.animatedBorder}></span>
      {children}
    </button>
  );
};

export default OutlineButton;
