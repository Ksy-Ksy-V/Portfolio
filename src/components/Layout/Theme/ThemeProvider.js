import { createContext, useMemo, useState, useEffect } from 'react';
import { getTheme, applyThemeVariables } from '../../../styles/theme.config';

export const ColorModeContext = createContext({ 
    mode: 'dark',
    toggleColorMode: () => {},
    theme: null
});

const STORAGE_KEY = 'theme';
const DEFAULT_MODE = 'dark';

const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'light' || stored === 'dark') {
            return stored;
        }
        
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : DEFAULT_MODE;
    });

    useEffect(() => {
        applyThemeVariables(mode);
        localStorage.setItem(STORAGE_KEY, mode);
    }, [mode]);

    const colorMode = useMemo(
        () => ({
            mode,
            toggleColorMode: () => {
                setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
            },
            theme: getTheme(mode),
        }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            {children}
        </ColorModeContext.Provider>
    );
};

export default ThemeProvider;
