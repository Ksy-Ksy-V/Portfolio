import React from 'react';
import { useEffect, useState } from 'react';
import './AnimatedBackground.css';

export function AnimatedBackground() {
    const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; xOffset: number; delay: number }>>([]);
    const [floatingShapes, setFloatingShapes] = useState<Array<{ id: number; type: 'circle' | 'square'; size: number; startX: number; startY: number; duration: number; delay: number; opacity: number }>>([]);
    const [isDark, setIsDark] = useState(false);
    const [gridColor, setGridColor] = useState('rgba(214, 52, 132, 0.5)');

    useEffect(() => {
        const hexToRgb = (hex: string) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : { r: 214, g: 52, b: 132 };
        };

        const checkTheme = () => {
            setTimeout(() => {
                const isDarkMode = document.documentElement.classList.contains('dark') ||
                    window.matchMedia('(prefers-color-scheme: dark)').matches;
                setIsDark(isDarkMode);

                const primaryMain = getComputedStyle(document.documentElement).getPropertyValue('--color-primary-main').trim() || '#D63484';
                const rgb = hexToRgb(primaryMain);

                const opacity = isDarkMode ? 0.15 : 0.5;
                setGridColor(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`);
            }, 100);
        };

        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const generatedParticles = Array.from({ length: 60 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 20 + 10,
            xOffset: Math.random() * 20 - 10,
            delay: Math.random() * 5,
        }));
        setParticles(generatedParticles);

        const types: ('circle' | 'square')[] = ['circle', 'square'];
        const generatedShapes = Array.from({ length: 6 }, (_, i) => ({
            id: i,
            type: types[Math.floor(Math.random() * types.length)],
            size: Math.random() * 100 + 100,
            startX: Math.random() * 100,
            startY: Math.random() * 100,
            duration: Math.random() * 40 + 25,
            delay: Math.random() * 15,
            opacity: Math.random() * 0.25 + 0.15,
        }));
        setFloatingShapes(generatedShapes);
    }, []);

    return (
        <div
            className="animated-background"
            style={{
                backgroundColor: 'var(--color-background-default)',
                position: 'relative',
            }}
        >
            {/* Animated particles */}
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute rounded-full particle"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        background: 'linear-gradient(to bottom right, var(--color-primary-main), var(--color-primary-light))',
                        '--particle-x': `${particle.xOffset}px`,
                        '--particle-duration': `${particle.duration}s`,
                        '--particle-delay': `${particle.delay}s`,
                    } as React.CSSProperties}
                />
            ))}

            {/* Large blurred shapes positioned far at edges */}
            <div
                className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[120px] blur-shape-1"
                style={{
                    background: `radial-gradient(circle, var(--color-primary-main) 0%, transparent 90%)`,
                    opacity: 0.25,
                }}
            />

            <div
                className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full blur-[130px] blur-shape-2"
                style={{
                    background: `radial-gradient(circle, var(--color-primary-main) 0%, transparent 90%)`,
                    opacity: 0.2,
                }}
            />

            <div
                className="absolute -bottom-40 -left-40 w-[650px] h-[650px] rounded-full blur-[110px] blur-shape-3"
                style={{
                    background: `radial-gradient(circle, var(--color-primary-main) 0%, transparent 90%)`,
                    opacity: 0.22,
                }}
            />

            <div
                className="absolute -bottom-40 -right-40 w-[680px] h-[680px] rounded-full blur-[120px] blur-shape-4"
                style={{
                    background: `radial-gradient(circle, var(--color-primary-main) 0%, transparent 90%)`,
                    opacity: 0.18,
                }}
            />

            {/* Additional center shapes for better coverage */}
            <div
                className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[100px] blur-shape-5"
                style={{
                    background: `radial-gradient(circle, var(--color-primary-main) 0%, transparent 90%)`,
                    opacity: 0.15,
                }}
            />

            <div
                className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[110px] blur-shape-6"
                style={{
                    background: `radial-gradient(circle, var(--color-primary-main) 0%, transparent 90%)`,
                    opacity: 0.12,
                }}
            />

            {/* Floating animated shapes - сильно заблюренные */}
            {floatingShapes.map((shape) => {

                const primaryMain = getComputedStyle(document.documentElement).getPropertyValue('--color-primary-main').trim() || '#D63484';
                const primaryLight = getComputedStyle(document.documentElement).getPropertyValue('--color-primary-light').trim() || '#ff9bd2';


                const hexToRgb = (hex) => {
                    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                    return result ? {
                        r: parseInt(result[1], 16),
                        g: parseInt(result[2], 16),
                        b: parseInt(result[3], 16)
                    } : { r: 214, g: 52, b: 132 };
                };

                const mainRgb = hexToRgb(primaryMain);
                const lightRgb = hexToRgb(primaryLight);

                return (
                    <div
                        key={shape.id}
                        className={`floating-shape floating-shape-${shape.type}`}
                        style={{
                            left: `${shape.startX}%`,
                            top: `${shape.startY}%`,
                            width: `${shape.size}px`,
                            height: `${shape.size}px`,
                            opacity: shape.opacity,
                            animation: `floatShape${shape.id % 4} ${shape.duration}s ease-in-out infinite`,
                            animationDelay: `${shape.delay}s`,
                            background: shape.type === 'circle'
                                ? `radial-gradient(circle, rgba(${mainRgb.r}, ${mainRgb.g}, ${mainRgb.b}, 0.5), rgba(${lightRgb.r}, ${lightRgb.g}, ${lightRgb.b}, 0.4))`
                                : `radial-gradient(circle, rgba(${mainRgb.r}, ${mainRgb.g}, ${mainRgb.b}, 0.45), rgba(${lightRgb.r}, ${lightRgb.g}, ${lightRgb.b}, 0.35))`,
                        } as React.CSSProperties}
                    />
                );
            })}

            {/* Notebook grid  */}
            <div
                className="notebook-grid-overlay"
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
                } as React.CSSProperties}
            />
        </div>
    );
}
