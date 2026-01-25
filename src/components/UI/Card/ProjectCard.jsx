import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tag from '../Tag/Tag';
import OutlineButton from '../Buttons/OutlineButton';

const ProjectCard = ({ project, index, isFirst, isLast }) => {
  const navigate = useNavigate();
  const isReverse = index % 2 === 1;

  const handleNavigate = () => {
    navigate(project.route);
  };


  return (
    <>
      <style>{`
        .project-image-wrapper-${index}:hover .project-image-glow-${index} {
          opacity: 0.6;
        }

        .project-image-container-${index}:hover {
          transform: scale(1.02);
        }

        .project-placeholder-${index}:hover {
          border-color: var(--color-primary-main);
          transform: scale(1.02);
        }

        .project-button-wrapper-${index} .outline-button {
          margin-left: 0 !important;
        }

        @media (max-width: 768px) {
          .project-grid-${index} {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .project-info-${index} {
            text-align: center !important;
          }
          
          .project-tags-${index} {
            justify-content: center !important;
          }

          .project-timeline-column-${index} {
            order: -1;
            flex-direction: row !important;
            width: 100%;
            justify-content: center;
          }

          .project-timeline-line-${index} {
            width: 100% !important;
            height: 3px !important;
            min-height: 3px !important;
          }
        }
      `}</style>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
        <div className={`project-grid-${index}`} style={{ display: 'grid', gridTemplateColumns: isReverse ? '1fr auto 1fr' : '1fr auto 1fr', gap: '3rem', alignItems: 'center' }}>
          {isReverse ? (
            <>
              {project.image ? (
                <div className={`project-image-wrapper-${index}`} style={{ marginBottom: '6rem', position: 'relative', width: '100%', aspectRatio: '16 / 9' }}>
                  <div className={`project-image-glow-${index}`} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '130%', height: '130%', background: 'radial-gradient(circle, var(--color-primary-main) 0%, transparent 70%)', opacity: 0.4, filter: 'blur(30px)', zIndex: 0, transition: 'opacity 0.3s ease', pointerEvents: 'none', borderRadius: '1rem' }} />
                  <div 
                    className={`project-image-container-${index}`}
                    style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '1rem', overflow: 'hidden', transition: 'all 0.3s ease', aspectRatio: '16 / 9' }}
                    onClick={handleNavigate}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                </div>
              ) : (
                <div 
                  className={`project-placeholder-${index}`}
                  style={{ marginBottom: '4rem', width: '100%', aspectRatio: '16 / 9', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-background-paper)', border: '3px solid', borderColor: 'var(--color-primary-dark)', borderRadius: '1rem', transition: 'all 0.3s ease' }}
                  onClick={handleNavigate}
                >
                  <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--color-primary-main)', opacity: 0.2 }}>KSY</div>
                </div>
              )}

              <div className={`project-timeline-column-${index}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', position: 'relative', minHeight: '100%' }}>
                {!isFirst && <div className={`project-timeline-line-${index}`} style={{ width: '3px', flex: 1, backgroundColor: 'var(--color-primary-main)', minHeight: '100%' }} />}
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'var(--color-primary-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, margin: '1rem 0' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-background-default)' }} />
                </div>
                {!isLast && <div className={`project-timeline-line-${index}`} style={{ width: '3px', flex: 1, backgroundColor: 'var(--color-primary-main)', minHeight: '100%' }} />}
              </div>

              <div className={`project-info-${index}`} style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <p style={{ color: 'var(--color-primary-light)', fontSize: '0.875rem', margin: '0 0 0.5rem 0' }}>{project.date}</p>
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary-main)', margin: '0 0 1rem 0' }}>{project.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 1.5rem 0' }}>{project.description}</p>

                <div className={`project-tags-${index}`} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem', justifyContent: 'flex-start' }}>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag
                      key={tagIndex}
                      technology={tag}
                      index={tagIndex}
                      cardIndex={index}
                    />
                  ))}
                </div>

                <div className={`project-button-wrapper-${index}`} style={{ marginLeft: 0 }}>
                  <OutlineButton onClick={handleNavigate}>
                    View Project →
                  </OutlineButton>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={`project-info-${index}`} style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <p style={{ color: 'var(--color-primary-light)', fontSize: '0.875rem', margin: '0 0 0.5rem 0' }}>{project.date}</p>
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-primary-main)', margin: '0 0 1rem 0' }}>{project.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 1.5rem 0' }}>{project.description}</p>

                <div className={`project-tags-${index}`} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem', justifyContent: 'flex-start' }}>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag
                      key={tagIndex}
                      technology={tag}
                      index={tagIndex}
                      cardIndex={index}
                    />
                  ))}
                </div>

                <div className={`project-button-wrapper-${index}`} style={{ marginLeft: 0 }}>
                  <OutlineButton onClick={handleNavigate}>
                    View Project →
                  </OutlineButton>
                </div>
              </div>

              <div className={`project-timeline-column-${index}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', position: 'relative', minHeight: '100%' }}>
                {!isFirst && <div className={`project-timeline-line-${index}`} style={{ width: '3px', flex: 1, backgroundColor: 'var(--color-primary-main)', minHeight: '100%' }} />}
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'var(--color-primary-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, margin: '1rem 0' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-background-default)' }} />
                </div>
                {!isLast && <div className={`project-timeline-line-${index}`} style={{ width: '3px', flex: 1, backgroundColor: 'var(--color-primary-main)', minHeight: '100%' }} />}
              </div>

              {project.image ? (
                <div className={`project-image-wrapper-${index}`} style={{ marginBottom: '6rem', position: 'relative', width: '100%', aspectRatio: '16 / 9' }}>
                  <div className={`project-image-glow-${index}`} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '130%', height: '130%', background: 'radial-gradient(circle, var(--color-primary-main) 0%, transparent 70%)', opacity: 0.4, filter: 'blur(30px)', zIndex: 0, transition: 'opacity 0.3s ease', pointerEvents: 'none', borderRadius: '1rem' }} />
                  <div 
                    className={`project-image-container-${index}`}
                    style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '1rem', overflow: 'hidden', transition: 'all 0.3s ease', aspectRatio: '16 / 9' }}
                    onClick={handleNavigate}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                </div>
              ) : (
                <div 
                  className={`project-placeholder-${index}`}
                  style={{ marginBottom: '4rem', width: '100%', aspectRatio: '16 / 9', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-background-paper)', border: '3px solid', borderColor: 'var(--color-primary-dark)', borderRadius: '1rem', transition: 'all 0.3s ease' }}
                  onClick={handleNavigate}
                >
                  <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--color-primary-main)', opacity: 0.2 }}>KSY</div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
