import Tag from '../Tag/Tag';

const WorkflowCard = ({ stage, index, randomDelay, randomDuration }) => {
  const cardStyle = {
    position: 'relative',
    borderRadius: '1rem',
    padding: '3px',
    transition: 'all 0.3s ease',
    animation: 'fadeInUp 0.8s ease-out forwards',
    opacity: 0,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
    margin: '2rem',
    '--card-animation-delay': `${randomDelay}s`,
    '--card-animation-duration': `${randomDuration}s`,
  };


  return (
    <>
      <style>{`
        @property --rotate {
          syntax: "<angle>";
          initial-value: 132deg;
          inherits: false;
        }

        .workflow-card-${index}::before {
          content: "";
          width: 108%;
          height: 108%;
          border-radius: 1.125rem;
          background-image: linear-gradient(
            var(--rotate),
            var(--color-primary-light),
            var(--color-primary-main) 35%,
            var(--color-primary-dark) 65%,
            var(--color-primary-light)
          );
          position: absolute;
          z-index: -1;
          top: -4%;
          left: -4%;
          animation: slowChaoticSpin var(--card-animation-duration, 15s) ease-in-out infinite;
          animation-delay: var(--card-animation-delay, 0s);
          opacity: 0.4;
          transition: opacity 0.4s ease;
          filter: blur(6px);
        }

        .workflow-card-${index}::after {
          position: absolute;
          content: "";
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1.2);
          z-index: -2;
          height: 120%;
          width: 120%;
          background-image: linear-gradient(
            var(--rotate),
            var(--color-primary-light),
            var(--color-primary-main) 35%,
            var(--color-primary-dark) 65%,
            var(--color-primary-light)
          );
          filter: blur(40px);
          opacity: 0.2;
          transition: opacity 0.4s ease;
          animation: slowChaoticSpinReverse calc(var(--card-animation-duration, 18s) * 1.2) ease-in-out infinite;
          animation-delay: calc(var(--card-animation-delay, 0s) * 1.5);
        }

        .workflow-card-content-${index} {
          background: #191c29;
        }

        .dark .workflow-card-content-${index} {
          background: #191c29;
        }

        .workflow-card-${index}:hover {
          transform: translateY(-5px);
        }

        .workflow-card-${index}:hover .workflow-card-content-${index} {
          background: #191c29;
        }

        .dark .workflow-card-${index}:hover .workflow-card-content-${index} {
          background: #191c29;
        }

        .workflow-card-${index}:hover .workflow-number-${index} {
          transform: scale(1.1);
        }

        .workflow-card-${index}:hover .workflow-title-${index} {
          color: var(--color-primary-main) !important;
          transform: translateX(4px);
        }



        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slowChaoticSpin {
          0% {
            --rotate: 0deg;
          }
          20% {
            --rotate: 85deg;
          }
          40% {
            --rotate: 180deg;
          }
          60% {
            --rotate: 250deg;
          }
          80% {
            --rotate: 320deg;
          }
          100% {
            --rotate: 360deg;
          }
        }

        @keyframes slowChaoticSpinReverse {
          0% {
            --rotate: 360deg;
          }
          25% {
            --rotate: 280deg;
          }
          50% {
            --rotate: 180deg;
          }
          75% {
            --rotate: 90deg;
          }
          100% {
            --rotate: 0deg;
          }
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
      <div
        className={`workflow-card-${index}`}
        style={cardStyle}
      >
        <div 
          className={`workflow-card-content-${index}`}
          style={{
            position: 'relative',
            zIndex: 10,
            background: '#191c29',
            borderRadius: 'calc(1rem - 3px)',
            padding: '1.5rem',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <div 
            className={`workflow-number-${index} heading-h2`}
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: 'var(--color-primary-main)',
              transition: 'transform 0.4s ease',
            }}
          >
            {stage.number}
          </div>

          <div 
            className={`workflow-title-${index} heading-h4`}
            style={{
              fontWeight: 'bold',
              fontSize: '1.25rem',
              color: 'var(--color-text-primary)',
              margin: '0 0 1.5rem 0',
              transition: 'color 0.4s ease, transform 0.4s ease',
            }}
          >
            {stage.title}
          </div>

          <div 
            className={`workflow-description , body-text-regular`}
            style={{
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
              fontSize: '0.9rem',
              margin: '0 0 1.5rem 0',
            }}
          >
            {stage.description}
          </div>

          {stage.technologies && stage.technologies.length > 0 && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginTop: 'auto',
              }}
            >
              {stage.technologies.map((tech, techIndex) => (
                <Tag
                  key={techIndex}
                  technology={tech}
                  index={techIndex}
                  cardIndex={index}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WorkflowCard;
