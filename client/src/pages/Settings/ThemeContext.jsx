import React, { createContext, useState, useContext, useEffect } from 'react';
import themes from './ThemeConfig';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('main');

    const changeTheme = (themeName) => {
        if (themes[themeName]) {
            setCurrentTheme(themeName);
        }
    };

    useEffect(() => {
        const theme = themes[currentTheme] || themes['main'];
        const root = document.documentElement;

        Object.keys(theme).forEach((key) => {
            root.style.setProperty(`--${key}`, theme[key]);
        });

        document.body.className = `theme-${currentTheme}`;

        return () => {
            Object.keys(theme).forEach((key) => {
                root.style.removeProperty(`--${key}`);
            });

            document.body.className = '';
        };
    }, [currentTheme]);

    return (
        <ThemeContext.Provider value={{ theme: themes[currentTheme] || themes['main'], changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
