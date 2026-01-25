import styles from './H1TextEffect.module.css';

const H1TextEffect = ({ children }) => {
  return (
    <span className={styles.textEffect}>
      {children}
    </span>
  );
};

export default H1TextEffect;
