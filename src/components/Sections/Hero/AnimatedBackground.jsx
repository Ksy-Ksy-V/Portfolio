import { useMemo, useEffect, useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import styles from './AnimatedBackground.module.css';

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 214, g: 52, b: 132 };
};

const getGridColor = () => {
  const isDarkMode =
    document.documentElement.classList.contains('dark') ||
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const primaryMain =
    getComputedStyle(document.documentElement)
      .getPropertyValue('--color-primary-main')
      .trim() || '#D63484';
  const rgb = hexToRgb(primaryMain);
  const opacity = isDarkMode ? 0.15 : 0.5;
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
};

const BLUR_SHAPES_CONFIG = [
  { id: 1, x: 20, y: 15, scale: 1.15, duration: 12, className: styles.blurShape1 },
  { id: 2, x: -25, y: 20, scale: 1.2, duration: 15, className: styles.blurShape2 },
  { id: 3, x: 15, y: -20, scale: 1.1, duration: 14, className: styles.blurShape3 },
  { id: 4, x: -18, y: -25, scale: 1.18, duration: 16, className: styles.blurShape4 },
  { id: 5, x: 30, y: -20, scale: 1.1, duration: 18, className: styles.blurShape5 },
  { id: 6, x: -30, y: 25, scale: 1.12, duration: 20, className: styles.blurShape6 },
];

const BLUR_SHAPES_POSITION = [
  'absolute -top-40 -left-40 w-[820px] h-[820px] rounded-full blur-[140px]',
  'absolute -top-40 -right-40 w-[920px] h-[920px] rounded-full blur-[150px]',
  'absolute -bottom-40 -left-40 w-[860px] h-[860px] rounded-full blur-[130px]',
  'absolute -bottom-40 -right-40 w-[900px] h-[900px] rounded-full blur-[140px]',
  'absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[120px]',
  'absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] rounded-full blur-[130px]',
];

const FLOATING_KEYFRAMES = [
  [
    { x: 150, y: -200, rotation: 90, scale: 1.1 },
    { x: -120, y: -300, rotation: 180, scale: 0.9 },
    { x: -200, y: -150, rotation: 270, scale: 1.05 },
    { x: 0, y: 0, rotation: 360, scale: 1 },
  ],
  [
    { x: 200, y: 150, rotation: 120, scale: 1.15 },
    { x: -150, y: 200, rotation: 240, scale: 0.85 },
    { x: 0, y: 0, rotation: 360, scale: 1 },
  ],
  [
    { x: 180, y: -220, rotation: 180, scale: 1.2 },
    { x: 0, y: 0, rotation: 360, scale: 1 },
  ],
  [
    { x: -140, y: -180, rotation: 72, scale: 1.1 },
    { x: 180, y: -140, rotation: 144, scale: 0.95 },
    { x: 140, y: 180, rotation: 216, scale: 1.05 },
    { x: -180, y: 140, rotation: 288, scale: 0.9 },
    { x: 0, y: 0, rotation: 360, scale: 1 },
  ],
];

export function AnimatedBackground() {
  const [gridColor, setGridColor] = useState(() => getGridColor());
  const containerRef = useRef(null);

  const particles = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 20 + 10,
        xOffset: Math.random() * 20 - 10,
        delay: Math.random() * 5,
      })),
    []
  );

  const floatingShapes = useMemo(() => {
    const types = ['circle', 'square'];
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      type: types[Math.floor(Math.random() * types.length)],
      size: Math.random() * 140 + 180,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      duration: Math.random() * 40 + 25,
      delay: Math.random() * 15,
      opacity: Math.random() * 0.35 + 0.3,
    }));
  }, []);

  const blurShapes = useMemo(
    () =>
      BLUR_SHAPES_CONFIG.map((config, i) => ({
        ...config,
        positionClass: BLUR_SHAPES_POSITION[i],
        opacity: [0.48, 0.44, 0.46, 0.42, 0.38, 0.35][i],
      })),
    []
  );

  useEffect(() => {
    const updateGridColor = () => {
      setTimeout(() => setGridColor(getGridColor()), 100);
    };
    updateGridColor();
    const observer = new MutationObserver(updateGridColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      if (!container) return;

      const particleEls = container.querySelectorAll('[data-particle]');
      particleEls.forEach((el, i) => {
        const p = particles[i];
        if (!p) return;
        gsap.fromTo(
          el,
          { x: 0, y: 0, opacity: 0.35 },
          {
            x: p.xOffset,
            y: -50,
            opacity: 0.8,
            duration: p.duration / 2,
            delay: p.delay,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
          }
        );
      });

      const blurEls = container.querySelectorAll('[data-blur-shape]');
      blurEls.forEach((el, i) => {
        const cfg = blurShapes[i];
        if (!cfg) return;
        const isCentered = i >= 4;
        const fromVars = { x: 0, y: 0, scale: 1 };
        const toVars = {
          x: cfg.x,
          y: cfg.y,
          scale: cfg.scale,
          duration: cfg.duration / 2,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        };
        if (isCentered) {
          fromVars.xPercent = -50;
          fromVars.yPercent = -50;
          toVars.xPercent = -50;
          toVars.yPercent = -50;
        }
        gsap.fromTo(el, fromVars, toVars);
      });

      const floatingEls = container.querySelectorAll('[data-floating-shape]');
      floatingEls.forEach((el, i) => {
        const shape = floatingShapes[i];
        if (!shape) return;
        const keyframes = FLOATING_KEYFRAMES[shape.id % 4];
        const segmentDuration = shape.duration / keyframes.length;
        const tl = gsap.timeline({ delay: shape.delay, repeat: -1 });
        keyframes.forEach((kf) => {
          tl.to(el, {
            x: kf.x,
            y: kf.y,
            rotation: kf.rotation,
            scale: kf.scale,
            duration: segmentDuration,
            ease: 'sine.inOut',
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [particles, blurShapes, floatingShapes]);

  return (
    <div className={styles.animatedBackground} ref={containerRef}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          data-particle
          className={`absolute rounded-full ${styles.particle}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background:
              'linear-gradient(to bottom right, var(--color-primary-main), var(--color-primary-light))',
          }}
        />
      ))}

      {blurShapes.map((shape) => (
        <div
          key={shape.id}
          data-blur-shape
          className={`${shape.positionClass} ${shape.className}`}
          style={{
            background: `radial-gradient(circle, var(--color-primary-main) 0%, transparent 90%)`,
            opacity: shape.opacity,
          }}
        />
      ))}

      {floatingShapes.map((shape) => {
        const primaryMain =
          getComputedStyle(document.documentElement)
            .getPropertyValue('--color-primary-main')
            .trim() || '#D63484';
        const primaryLight =
          getComputedStyle(document.documentElement)
            .getPropertyValue('--color-primary-light')
            .trim() || '#ff9bd2';
        const mainRgb = hexToRgb(primaryMain);
        const lightRgb = hexToRgb(primaryLight);
        const background =
          shape.type === 'circle'
            ? `radial-gradient(circle, rgba(${mainRgb.r}, ${mainRgb.g}, ${mainRgb.b}, 0.5), rgba(${lightRgb.r}, ${lightRgb.g}, ${lightRgb.b}, 0.4))`
            : `radial-gradient(circle, rgba(${mainRgb.r}, ${mainRgb.g}, ${mainRgb.b}, 0.45), rgba(${lightRgb.r}, ${lightRgb.g}, ${lightRgb.b}, 0.35))`;

        return (
          <div
            key={shape.id}
            data-floating-shape
            className={`${styles.floatingShape} ${shape.type === 'circle' ? styles.floatingShapeCircle : styles.floatingShapeSquare}`}
            style={{
              left: `${shape.startX}%`,
              top: `${shape.startY}%`,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              opacity: shape.opacity,
              background,
            }}
          />
        );
      })}

      <div
        className={styles.notebookGridOverlay}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          backgroundImage:
            `linear-gradient(${gridColor} 1px, transparent 1px), ` +
            `linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          backgroundPosition: '0 0',
          mixBlendMode: 'normal',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
