import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tag from '../Tag/Tag';
import OutlineButton from '../Buttons/OutlineButton';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, index, isFirst, isLast }) => {
  const navigate = useNavigate();
  const isReverse = index % 2 === 1;

  const handleNavigate = () => {
    navigate(project.route);
  };

  return (
    <div className={styles.container}>
      <div className={isReverse ? styles.gridReverse : styles.grid}>
          {isReverse ? (
            <>
              {project.image ? (
                <div className={styles.imageWrapper}>
                  <div className={styles.imageGlow} />
                  <div 
                    className={styles.imageContainer}
                    onClick={handleNavigate}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={styles.image}
                    />
                  </div>
                </div>
              ) : (
                <div 
                  className={styles.placeholder}
                  onClick={handleNavigate}
                >
                  <div className={styles.placeholderText}>KSY</div>
                </div>
              )}

              <div className={styles.timelineColumn}>
                {!isFirst && <div className={styles.timelineLine} />}
                <div className={styles.timelineDot}>
                  <div className={styles.timelineDotInner} />
                </div>
                {!isLast && <div className={styles.timelineLine} />}
              </div>

              <div className={styles.info}>
                <p className={styles.date}>{project.date}</p>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.tags}>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag
                      key={tagIndex}
                      technology={tag}
                      index={tagIndex}
                      cardIndex={index}
                    />
                  ))}
                </div>

                <div className={styles.buttonWrapper}>
                  <OutlineButton onClick={handleNavigate}>
                    View Project →
                  </OutlineButton>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.info}>
                <p className={styles.date}>{project.date}</p>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.tags}>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag
                      key={tagIndex}
                      technology={tag}
                      index={tagIndex}
                      cardIndex={index}
                    />
                  ))}
                </div>

                <div className={styles.buttonWrapper}>
                  <OutlineButton onClick={handleNavigate}>
                    View Project →
                  </OutlineButton>
                </div>
              </div>

              <div className={styles.timelineColumn}>
                {!isFirst && <div className={styles.timelineLine} />}
                <div className={styles.timelineDot}>
                  <div className={styles.timelineDotInner} />
                </div>
                {!isLast && <div className={styles.timelineLine} />}
              </div>

              {project.image ? (
                <div className={styles.imageWrapper}>
                  <div className={styles.imageGlow} />
                  <div 
                    className={styles.imageContainer}
                    onClick={handleNavigate}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={styles.image}
                    />
                  </div>
                </div>
              ) : (
                <div 
                  className={styles.placeholder}
                  onClick={handleNavigate}
                >
                  <div className={styles.placeholderText}>KSY</div>
                </div>
              )}
            </>
          )}
      </div>
    </div>
  );
};

export default ProjectCard;
