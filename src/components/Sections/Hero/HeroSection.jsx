import React, { useState } from 'react';
import { AnimatedBackground } from './AnimatedBackground.jsx';
import MainButton from '../../UI/Buttons/MainButton';
import OutlineButton from '../../UI/Buttons/OutlineButton';
import H1TextEffect from '../../UI/Text/H1TextEffect';
import TypewriterText from '../../UI/Text/TypewriterText';
import './HeroSection.css';

export default function HeroSection() {
  const [greetingComplete, setGreetingComplete] = useState(false);
  const fullText = "< Hello, I'm Ksenia Voitikh/>";
  const fullDescription = "Crafting dynamic, user-focused web applications with a blend of technical precision and creativity.";
  const typingSpeed = 100;

  return (
    <>
      <style>{`
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
      `}</style>
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
              <span className="heading-h3 mb-4 block">
                <TypewriterText 
                  text={fullText}
                  typingSpeed={typingSpeed}
                  onComplete={() => setGreetingComplete(true)}
                />
              </span>
            </div>

            <h1 className="headline-h1 hero-title">
              <H1TextEffect>
                Front-End  Developer
              </H1TextEffect>
              <br />
              <span style={{ color: '#ffffff' }}> & Designer</span>
            </h1>
            
            <p className="body-text-large max-w-2xl hero-description">
              {greetingComplete ? (
                <TypewriterText 
                  text={fullDescription}
                  typingSpeed={typingSpeed}
                  delay={100}
                />
              ) : (
                <span style={{ 
                  fontFamily: "'Consolas', 'Courier New', monospace",
                  color: 'var(--color-primary-main)',
                  animation: 'blink 1s infinite'
                }}>
                  |
                </span>
              )}
            </p>
          
          <div className="flex flex-wrap gap-4 pt-6 hero-buttons">
            <MainButton />
            
            <OutlineButton />
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
    </>
  );
}
