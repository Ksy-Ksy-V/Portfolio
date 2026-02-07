import styles from './OutlineButton.module.css';

const OutlineButton = ({ children = 'View Projects', onClick, className = '', alwaysGlow = false }) => {
  return (
    <button 
      className={`${styles.button} body-text-regular ${className} ${alwaysGlow ? styles.alwaysGlow : ''}`}
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
