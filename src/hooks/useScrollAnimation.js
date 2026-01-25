import { useState, useEffect, useRef, useLayoutEffect } from 'react';

export const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);
  const isInitialized = useRef(false);

  useLayoutEffect(() => {
    if (elementRef.current && !isInitialized.current) {
      const element = elementRef.current;
      element.style.opacity = '0';
      element.style.transform = 'translateY(60px) scale(0.95)';
      isInitialized.current = true;
    }
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observerOptions = {
      root: null,
      rootMargin: options.rootMargin || '-100px',
      threshold: options.threshold || 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (entry.target) {
                entry.target.style.opacity = '';
                entry.target.style.transform = '';
              }
              setIsVisible(true);
              hasAnimated.current = true;
            });
          });
        }
      });
    }, observerOptions);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.rootMargin, options.threshold]);

  return {
    ref: elementRef,
    isVisible,
  };
};
