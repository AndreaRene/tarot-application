import React, { createContext, useState, useContext } from 'react';
import themes from './ThemeConfig';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('crystals');

    const changeTheme = (themeName) => {
        if (themes[themeName]) {
            setCurrentTheme(themeName);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme: themes[currentTheme], changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);