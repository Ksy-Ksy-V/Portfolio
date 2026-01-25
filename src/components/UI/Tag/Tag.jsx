import React from 'react';

const TechnologyTag = ({ technology, index, cardIndex }) => {
  return (
    <>
      <style>{`
        .workflow-tag-${cardIndex} {
          background: rgba(214, 52, 132, 0.1);
          border: 1px solid rgba(214, 52, 132, 0.2);
          color: var(--color-primary-main);
          transition: all 0.3s ease;
        }

        .workflow-card-${cardIndex}:hover .workflow-tag-${cardIndex} {
          background: rgba(214, 52, 132, 0.2);
          border-color: rgba(214, 52, 132, 0.4);
          transform: translateY(-2px);
        }
      `}</style>
      <span
        className={`workflow-tag-${cardIndex}`}
        style={{
          padding: '0.375rem 0.75rem',
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
          fontWeight: '500',
          transition: 'all 0.3s ease',
        }}
      >
        {technology}
      </span>
    </>
  );
};

export default TechnologyTag;
