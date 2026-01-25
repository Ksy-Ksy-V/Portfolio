import styles from './Tag.module.css';

const TechnologyTag = ({ technology }) => {
  return (
    <span className={styles.tag}>
      {technology}
    </span>
  );
};

export default TechnologyTag;
