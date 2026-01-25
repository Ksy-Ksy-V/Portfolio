import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

const Logo = ({ onClick, className = '' }) => {
  return (
    <Link 
      to="/" 
      className={`heading-h3 ${styles.logo} ${className}`}
      onClick={onClick}
    >
      <span className={styles.line}>Ksenia</span>
      <span className={styles.line}>Voitikh</span>
    </Link>
  );
};

export default Logo;
