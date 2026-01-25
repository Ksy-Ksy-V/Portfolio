import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TextButton.module.css';

const TextButton = ({ to, children, isActive = false, onClick, className = '' }) => {
    return (
        <Link
            to={to}
            className={`heading-h3 ${styles.button} ${isActive ? styles.active : ''} ${className}`}
            onClick={onClick}
        >
            {children}
        </Link>
    );
};

export default TextButton;
