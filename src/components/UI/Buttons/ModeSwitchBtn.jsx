import React, { useContext } from 'react';
import { Sun, Moon } from 'lucide-react';
import { ColorModeContext } from '../../Layout/Theme/ThemeProvider';
import styles from './ModeSwitchBtn.module.css';

const ModeSwitchBtn = ({ children }) => {
    const { mode, toggleColorMode } = useContext(ColorModeContext);

    const handleToggleTheme = () => {
        toggleColorMode();
    };

    return (
        <div
            onClick={handleToggleTheme}
            className={styles.container}
        >
            <button
                className={styles.button}
                aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
                {mode === 'dark' ? (
                    <Sun className={styles.icon} />
                ) : (
                    <Moon className={styles.icon} />
                )}
            </button>
            {children}
        </div>
    );
};

export default ModeSwitchBtn;
