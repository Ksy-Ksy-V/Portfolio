import React from 'react';
import { Link } from 'react-router-dom';
import OutlineButton from '../Buttons/OutlineButton';

const TimelineCard = ({ project, index, isMobile, isVisible, isAlternate }) => {
  const shouldShowImageLeft = !isMobile && project.img && isAlternate && index % 2 === 0;
  const shouldShowImageRight = !isMobile && project.img && (!isAlternate || index % 2 !== 0);

  const cardStyle = {
    border: isMobile ? 'solid' : 'none',
    borderColor: 'var(--color-primary-main)',
    marginTop: isMobile ? '1rem' : '0rem',
    borderRadius: '15px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? 'translateY(0px) scale(1)'
      : 'translateY(50px) scale(0.8)',
    transition: 'opacity 0.6s ease, transform 0.6s ease',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'stretch' : 'flex-start',
    width: '100%',
  };

  const imageContainerStyle = {
    position: 'relative',
    margin: 'auto 0',
    flex: '0 0 40%',
    padding: isMobile ? '0' : (shouldShowImageLeft ? '0 2rem 0 0' : '0 0 0 2rem'),
  };

  const imageWrapperStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transform: isVisible ? 'scale(1)' : 'scale(0.8)',
    transition: 'transform 0.6s ease',
    border: '3px solid',
    borderColor: 'var(--color-primary-dark)',
    position: 'relative',
    zIndex: 1,
  };

  const imageGlowStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '110%',
    height: '110%',
    background: `radial-gradient(circle, var(--color-primary-main) 0%, transparent 70%)`,
    opacity: 0.3,
    filter: 'blur(20px)',
    zIndex: 0,
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
  };

  const iconStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
    transform: isVisible ? 'scale(1)' : 'scale(0.8)',
    transition: 'transform 0.6s ease',
  };

  const contentStyle = {
    marginBottom: isMobile ? '1rem' : '6rem',
  };

  const dateStyle = {
    color: 'var(--color-primary-light)',
    textAlign: isMobile ? 'center' : 'auto',
    margin: 0,
  };

  const titleStyle = {
    textDecoration: 'none',
    color: 'var(--color-primary-main)',
    textAlign: isMobile ? 'center' : 'auto',
    display: 'block',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '0.5rem 0',
  };

  const descriptionStyle = {
    textAlign: isMobile ? 'center' : 'auto',
    color: 'var(--color-text-secondary)',
    margin: '1rem 0',
  };

  return (
    <>
      <style>{`
        .timeline-image-wrapper-${index}:hover .timeline-image-glow-${index} {
          opacity: 0.5;
        }
      `}</style>
      <div style={cardStyle} className="timeline-item" data-index={index}>
        {shouldShowImageLeft && (
          <div style={imageContainerStyle}>
            <Link to={`/portfolio-details/${project.id}`}>
              <div className={`timeline-image-wrapper-${index}`} style={imageWrapperStyle}>
                <div className={`timeline-image-glow-${index}`} style={imageGlowStyle} />
                <img
                  src={project.img}
                  alt={project.title}
                  style={imageStyle}
                />
              </div>
            </Link>
          </div>
        )}

      {!isMobile && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1rem', flexShrink: 0 }}>
          <img
            src={project.icon}
            alt={project.title}
            style={iconStyle}
          />
          {index < 3 && (
            <div
              style={{
                width: '3px',
                height: '4rem',
                backgroundColor: 'var(--color-primary-main)',
              }}
            />
          )}
        </div>
      )}

      <div style={{ ...contentStyle, flex: '1 1 auto' }}>
        <p style={dateStyle}>{project.date}</p>
        <Link to={`/portfolio-details/${project.id}`} style={titleStyle}>
          {project.title}
        </Link>
        <p style={descriptionStyle}>{project.description}</p>

        {project.img && isMobile && (
          <div style={{ marginTop: '1rem', position: 'relative' }}>
            <Link to={`/portfolio-details/${project.id}`}>
              <div className={`timeline-image-wrapper-${index}`} style={imageWrapperStyle}>
                <div className={`timeline-image-glow-${index}`} style={imageGlowStyle} />
                <img
                  src={project.img}
                  alt={project.title}
                  style={{
                    ...imageStyle,
                    width: '100%',
                    height: 'auto',
                    display: 'flex',
                  }}
                />
              </div>
            </Link>
          </div>
        )}

        {project.id && (
          <div style={{ marginTop: '2rem', width: '100%' }}>
            <Link 
              to={`/portfolio-details/${project.id}`} 
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <OutlineButton>
                &lt; See more /&gt;
              </OutlineButton>
            </Link>
          </div>
        )}
      </div>

        {shouldShowImageRight && (
          <div style={imageContainerStyle}>
            <Link to={`/portfolio-details/${project.id}`}>
              <div className={`timeline-image-wrapper-${index}`} style={imageWrapperStyle}>
                <div className={`timeline-image-glow-${index}`} style={imageGlowStyle} />
                <img
                  src={project.img}
                  alt={project.title}
                  style={imageStyle}
                />
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default TimelineCard;
