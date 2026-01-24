import React, { useState, useEffect } from 'react';
import { AnimatedBackground } from '../AnimatedBackground.tsx';
import './HeroSection.css';

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const [displayedDescription, setDisplayedDescription] = useState('');
  const fullText = "< Hello, I'm Ksenia />";
  const fullDescription = "Crafting dynamic, user-focused web applications with a blend of technical precision and creativity.";
  const typingSpeed = 100;  

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, fullText]);

  useEffect(() => {
    // Start typing description after greeting is complete
    if (displayedText.length === fullText.length && displayedDescription.length < fullDescription.length) {
      const delay = displayedDescription.length === 0 ? 100 : typingSpeed; // Initial delay only for first character
      const timeout = setTimeout(() => {
        setDisplayedDescription(fullDescription.slice(0, displayedDescription.length + 1));
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, fullText, displayedDescription, fullDescription]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center pt-20 overflow-x-hidden"
      style={{ 
        width: '100%', 
        position: 'relative',
        minWidth: '100%',
        overflow: 'hidden',
        backgroundColor: 'var(--color-background-default)',
      }}
    >
      <AnimatedBackground />
      
      <div className="relative z-10 w-full overflow-hidden">
        <div 
          className="max-w-4xl space-y-8 hero-content hero-content-wrapper"
        >
          <div className="inline-block hero-greeting" style={{ marginTop: '10rem' }}>
            <span className="heading-h3 mb-4 block typewriter-text">
              {displayedText}
              {displayedText.length < fullText.length && <span className="typewriter-cursor">|</span>}
            </span>
          </div>

          <h1 className="headline-h1 hero-title">
            <span 
              style={{ 
                background: 'linear-gradient(to right, var(--color-primary-main), var(--color-primary-light), var(--color-primary-main))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Designer & Front-End 
            </span>
            <br />
            <span style={{ color: '#ffffff' }}>Developer</span>
          </h1>
          
          <p className="body-text-large max-w-2xl hero-description typewriter-text">
            {displayedDescription}
            {displayedDescription.length < fullDescription.length && <span className="typewriter-cursor">|</span>}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-6 hero-buttons">
            <button className="animated-button body-text-regular">
              Download CV
            </button>
            
            <button className="animated-button-outline body-text-regular">
              View Projects
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
        <div 
          className="w-6 h-10 border-2 rounded-full flex justify-center pt-2"
          style={{
            borderColor: 'var(--color-primary-main)',
            opacity: 0.5,
          }}
        >
          <div 
            className="w-1.5 h-1.5 rounded-full scroll-dot"
            style={{
              backgroundColor: 'var(--color-primary-main)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
