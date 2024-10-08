import React, { createContext, useState, useContext, useEffect } from 'react';
import themes from './ThemeConfig';
import { GET_DEFAULT_THEME, GET_THEME_DETAILS } from '../../utils/queries';
import { useLazyQuery } from '@apollo/client';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [userDefaultTheme, { data: defaultThemeData, loading: defualtThemeLoading }] =
        useLazyQuery(GET_DEFAULT_THEME);
    const [getThemeDetails] = useLazyQuery(GET_THEME_DETAILS);
    const [defaultTheme, setDefaultTheme] = useState('');
    const [currentTheme, setCurrentTheme] = useState('');

    useEffect(() => {
        userDefaultTheme();
    }, [userDefaultTheme]);

    useEffect(() => {
        const fetchThemeDetails = async () => {
            if (defaultThemeData.me.defaultTheme?._id) {
                const { data } = await getThemeDetails({
                    variables: { themeId: defaultThemeData.me.defaultTheme._id }
                });
                if (data && data.themeDetails) {
                    setDefaultTheme(data.themeDetails);
                }
            }
        };
        if (!defualtThemeLoading && defaultThemeData?.me) {
            fetchThemeDetails();
        }
    }, [defaultThemeData, defualtThemeLoading, getThemeDetails]);

    useEffect(() => {
        if (defaultTheme && defaultTheme.value) {
            setCurrentTheme(defaultTheme.value);
        }
    }, [defaultTheme]);

    const changeTheme = (themeName) => {
        if (themes[themeName]) {
            setCurrentTheme(themeName);
        }
    };

    useEffect(() => {
        if (!currentTheme) return;
        const theme = themes[currentTheme];
        const root = document.documentElement;

        Object.keys(theme).forEach((key) => {
            if (key !== 'headerImage') {
                root.style.setProperty(`--${key}`, theme[key]);
            }
        });

        if (theme.headerImage) {
            root.style.setProperty('--headerImage', `url(${theme.headerImage})`);
        }

        document.body.className = `theme-${currentTheme}`;

        // return () => {
        //     Object.keys(theme).forEach((key) => {
        //         root.style.removeProperty(`--${key}`);
        //     });

        //     document.body.className = '';
        // };
    }, [currentTheme]);

    return (
        <ThemeContext.Provider value={{ theme: themes[currentTheme] || 'main', changeTheme }}>
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
