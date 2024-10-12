import React, { createContext, useState, useContext, useEffect } from 'react';
import themes from './ThemeConfig';
import { GET_DEFAULT_THEME, GET_THEME_DETAILS } from '../../utils/queries';
import { useLazyQuery } from '@apollo/client';
import LoadingScreen from '../Loading/LoadingScreen';
import { useAuth } from '../../utils/AuthContext';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [userDefaultTheme, { data: defaultThemeData, loading: defualtThemeLoading }] =
        useLazyQuery(GET_DEFAULT_THEME);
    const [getThemeDetails] = useLazyQuery(GET_THEME_DETAILS);
    const [defaultTheme, setDefaultTheme] = useState('');
    const [currentTheme, setCurrentTheme] = useState('');
    const [loading, setLoading] = useState(true);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const { checkLoggedIn } = useAuth();

    useEffect(() => {
        const verifyLogin = async () => {
            const loggedIn = await checkLoggedIn();
            setUserLoggedIn(loggedIn);
        };

        verifyLogin();
    }, [checkLoggedIn]);

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
            setLoading(false);
        }
    }, [defaultTheme]);

    const changeTheme = (themeName) => {
        if (themes[themeName]) {
            setCurrentTheme(themeName);
        }
    };

    useEffect(() => {
        if (loading || !currentTheme) return;

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

        return () => {
            Object.keys(theme).forEach((key) => {
                root.style.removeProperty(`--${key}`);
            });

            document.body.className = '';
        };
    }, [currentTheme, loading]);

    // useEffect(() => {
    //     // Set the theme class on body
    //     document.body.className = `theme-${currentTheme}`;

    //     // Check for the incorrect theme class
    //     const checkThemeClass = () => {
    //         if (document.body.className === 'theme-[object Object]') {
    //             document.body.className = `theme-${currentTheme}`; // Reset to correct theme
    //         }
    //     };

    //     // Run check initially
    //     checkThemeClass();

    //     // Set up an interval to check periodically (optional)
    //     const interval = setInterval(checkThemeClass, 1000); // Check every second

    //     // Clean up the interval on component unmount
    //     return () => clearInterval(interval);
    // }, [currentTheme]);

    return (
        <ThemeContext.Provider value={{ theme: themes[currentTheme] || 'pastel', changeTheme, loading }}>
            {loading && userLoggedIn ? <LoadingScreen /> : children}
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
