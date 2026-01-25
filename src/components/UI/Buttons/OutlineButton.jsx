const OutlineButton = ({ children = 'View Projects', onClick, className = '' }) => {
  return (
    <>
      <style>
        {`
          .outline-button {
            position: relative;
            padding: 10px 30px;
            margin: 2rem;
            margin-bottom: 6rem;
            color: var(--color-primary-light);
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 16px;
            overflow: hidden;
            transition: 0.5s;
            background: transparent;
            border: 1px solid var(--color-primary-light);
            cursor: pointer;
            font-family: 'Consolas', 'Courier New', monospace;
            border-radius: 0.15rem;
          }
          .outline-button:hover {
            color: var(--color-primary-light);
            background: transparent;
            box-shadow: 
              0 0 10px var(--color-primary-main), 
              0 0 40px var(--color-primary-main), 
              0 0 80px var(--color-primary-main);
            transition-delay: 0s;
          }
          .outline-button span {
            position: absolute;
            display: block;
          }
          .outline-button span:nth-child(1) {
            top: 0;
            left: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--color-primary-main));
          }
          .outline-button:hover span:nth-child(1) {
            left: 100%;
            transition: 1s;
          }
          .outline-button span:nth-child(3) {
            bottom: 0;
            right: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(270deg, transparent, var(--color-primary-main));
          }
          .outline-button:hover span:nth-child(3) {
            right: 100%;
            transition: 1s;
            transition-delay: 0.5s;
          }
          .outline-button span:nth-child(2) {
            top: -100%;
            right: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(180deg, transparent, var(--color-primary-main));
          }
          .outline-button:hover span:nth-child(2) {
            top: 100%;
            transition: 1s;
            transition-delay: 0.25s;
          }
          .outline-button span:nth-child(4) {
            bottom: -100%;
            left: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(360deg, transparent, var(--color-primary-main));
          }
          .outline-button:hover span:nth-child(4) {
            bottom: 100%;
            transition: 1s;
            transition-delay: 0.75s;
          }
        `}
      </style>
      <button 
        className={`outline-button body-text-regular ${className}`}
        onClick={onClick}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {children}
      </button>
    </>
  );
};

export default OutlineButton;
