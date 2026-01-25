import React from 'react';
import './RunningLine.css';

export function TechStackTicker() {
  const technologies = [
    'TypeScript',
    'JavaScript',
    'React',
    'HTML5',
    'Next.js',
    'Node.js',
    'CSS3',
    'Tailwind',
    'Git',
    'Figma',
    'Photoshop',
    'Illustrator',
    'Responsive Design',
    'Web Performance',
  ];

  return (
    <div className="tech-stack-ticker">
      <div className="tech-stack-track">
        {[...Array(3)].map((_, setIndex) => (
          <React.Fragment key={setIndex}>
            <div className="tech-stack-set">
              {technologies.map((tech, index) => (
                <React.Fragment key={`${setIndex}-${index}`}>
                  <span className="tech-stack-text">
                    {tech}
                  </span>
                  {index < technologies.length - 1 && (
                    <span className="tech-stack-separator">●</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            {setIndex < 2 && (
              <span className="tech-stack-separator">●</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default TechStackTicker;
