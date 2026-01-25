import Tag from '../Tag/Tag';
import styles from './WorkflowCard.module.css';

const WorkflowCard = ({ stage, randomDelay, randomDuration }) => {
  const cardStyle = {
    '--card-animation-delay': `${randomDelay}s`,
    '--card-animation-duration': `${randomDuration}s`,
  };

  return (
    <div
      className={styles.card}
      style={cardStyle}
    >
      <div className={styles.content}>
        <div className={`${styles.number} heading-h2`}>
          {stage.number}
        </div>

        <h2 className={`heading-h3 ${styles.title}`}>
          {stage.title}
        </h2>

        <div className={`${styles.description} body-text-regular`}>
          {stage.description}
        </div>

        {stage.technologies && stage.technologies.length > 0 && (
          <div className={styles.tags}>
            {stage.technologies.map((tech, techIndex) => (
              <Tag
                key={techIndex}
                technology={tech}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkflowCard;
