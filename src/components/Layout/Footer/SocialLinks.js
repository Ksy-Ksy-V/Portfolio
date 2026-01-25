import React from 'react';
import { Github, Linkedin, Figma } from 'lucide-react';
import styles from './SocialLinks.module.css';

const SocialLinks = () => {
    return (
        <div className={styles.container}>
            <a
                href="https://www.figma.com/files/project/45598373"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Figma"
            >
                <Figma className={styles.icon} />
            </a>

            <a
                href="https://www.linkedin.com/in/kseniia-voitikh"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
            >
                <Linkedin className={styles.icon} />
            </a>

            <a
                href="https://github.com/Ksy-Ksy-V"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
            >
                <Github className={styles.icon} />
            </a>
        </div>
    );
};

export default SocialLinks;
