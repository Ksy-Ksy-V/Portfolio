import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import styles from './Logo.module.css';

const Logo = ({ onClick, className = '' }) => {
  const logoRef = useRef(null);

  useLayoutEffect(() => {
    const el = logoRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
      );
    }, logoRef);

    return () => ctx.revert();
  }, []);

  return (
    <Link
      ref={logoRef}
      to="/"
      className={`heading-h3 ${styles.logo} ${className}`}
      onClick={onClick}
    >
      <span className={styles.line}>Ksenia</span>
      <span className={styles.line}>Voitikh</span>
    </Link>
  );
};

export default Logo;
