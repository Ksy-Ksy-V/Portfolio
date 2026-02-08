import styles from './MainButton.module.css';

const MainButton = ({ children = 'Download CV', onClick, href, download: downloadAttr, className = '' }) => {
  const buttonClass = `${styles.button} body-text-regular ${className}`;

  if (href) {
    return (
      <a
        href={href}
        download={downloadAttr !== false}
        className={buttonClass}
        rel={downloadAttr ? undefined : 'noopener noreferrer'}
        target={downloadAttr ? undefined : '_blank'}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={buttonClass}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MainButton;
