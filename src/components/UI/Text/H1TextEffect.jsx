const H1TextEffect = ({ children }) => {
  return (
    <>
      <style>
        {`
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .h1-text-effect {
            background: linear-gradient(90deg, 
              var(--color-primary-main), 
              var(--color-primary-light), 
              var(--color-primary-main), 
              var(--color-primary-light), 
              var(--color-primary-main));
            background-size: 200% 100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradientShift 10s ease-in-out infinite;
          }
        `}
      </style>
      <span className="h1-text-effect">
        {children}
      </span>
    </>
  );
};

export default H1TextEffect;
