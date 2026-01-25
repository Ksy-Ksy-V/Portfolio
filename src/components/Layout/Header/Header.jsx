import { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import ModeSwitchBtn from '../../UI/Buttons/ModeSwitchBtn';
import TextButton from '../../UI/Buttons/TextButton';
import Logo from '../../UI/Logo/Logo';
import { navigationLinks } from '../../../data/navigationData';
import styles from './Header.module.css';

const Header = () => {
    const location = useLocation();
    const isMobile = useMediaQuery('(max-width: 767px)');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const navLinks = useMemo(() => {
        const currentPath = location.pathname;
        return navigationLinks.map(link => ({
            ...link,
            isActive: link.path === '/' 
                ? currentPath === '/' 
                : currentPath.startsWith(link.path)
        }));
    }, [location.pathname]);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo 
                    onClick={closeMobileMenu}
                    className={styles.logo}
                />
                
                {isMobile ? (
                    <>
                        <button 
                            className={styles.mobileMenuButton}
                            onClick={toggleMobileMenu}
                            aria-label="menu"
                        >
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                            </svg>
                        </button>
                        {mobileMenuOpen && (
                            <div className={styles.mobileMenu}>
                                {navLinks.map((link) => (
                                    <TextButton
                                        key={link.path}
                                        to={link.path}
                                        isActive={link.isActive}
                                        onClick={closeMobileMenu}
                                        className={styles.mobileMenuItem}
                                    >
                                        {link.label}
                                    </TextButton>
                                ))}
                                <div className={styles.mobileMenuItem} onClick={closeMobileMenu}>
                                    <ModeSwitchBtn />
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <nav className={styles.nav}>
                        {navLinks.map((link) => (
                            <TextButton
                                key={link.path}
                                to={link.path}
                                isActive={link.isActive}
                            >
                                {link.label}
                            </TextButton>
                        ))}
                        <ModeSwitchBtn />
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
