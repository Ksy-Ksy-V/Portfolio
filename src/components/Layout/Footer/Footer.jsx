import { useLocation } from 'react-router-dom';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import Logo from '../../UI/Logo/Logo';
import SocialLinks from './SocialLinks';
import styles from './Footer.module.css';

const Footer = () => {
    const { pathname } = useLocation();
    const isMobile = useMediaQuery('(max-width: 767px)');

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoWrapper}>
                    <Logo />
                </div>

                {!isMobile && (
                    <div className={styles.centerWrapper}>
                        {pathname === '/contact' ? (
                            <div style={{ width: '100%', height: '100%' }} />
                        ) : (
                            <SocialLinks />
                        )}
                    </div>
                )}

                <div className={`${styles.copyrightWrapper} ${isMobile ? styles.mobile : ''}`}>
                    <p className={`body-text-regular ${styles.copyright}`}>
                        Copyright © 2026 Kseniia Voitikh®. <br /> All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
