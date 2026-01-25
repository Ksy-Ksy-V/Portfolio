import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import ModeSwitchBtn from '../../UI/Buttons/ModeSwitchBtn';
import './Header.css';

const Header = () => {
    const location = useLocation();
    const isMobile = useMediaQuery('(max-width: 767px)');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const currentPath = location.pathname;
    const isHome = currentPath === '/';
    const isPortfolio = currentPath.startsWith('/portfolio');
    const isContact = currentPath === '/contact';

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const navLinks = [
        { path: '/', label: 'Home', isActive: isHome },
        { path: '/portfolio', label: 'Portfolio', isActive: isPortfolio },
        { path: '/contact', label: 'Contact', isActive: isContact },
    ];

    return (
        <header className="header">
            <div className="header-container">
                <Link 
                    to="/" 
                    className="header-logo"
                    onClick={closeMobileMenu}
                >
                    KSY
                </Link>
                
                {isMobile ? (
                    <>
                        <button 
                            className="mobile-menu-button"
                            onClick={toggleMobileMenu}
                            aria-label="menu"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                            </svg>
                        </button>
                        {mobileMenuOpen && (
                            <div className="mobile-menu">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`mobile-menu-item ${link.isActive ? 'active' : ''}`}
                                        onClick={closeMobileMenu}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="mobile-menu-item" onClick={closeMobileMenu}>
                                    <ModeSwitchBtn />
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <nav className="header-nav">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-button ${link.isActive ? 'active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <ModeSwitchBtn />
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
