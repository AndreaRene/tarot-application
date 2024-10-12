import { createContext, useState, useEffect, useContext } from 'react';
import { useTheme } from '../Settings/ThemeContext';
import Cookies from 'js-cookie';
import { CookieSettingsContext } from '../Settings/SettingsRight/CookiesSettings.jsx';
import LoadingScreen from './LoadingScreen.jsx';
import { useAuth } from '../../utils/AuthContext';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const { preferences, dataLoaded: userLoading } = useContext(CookieSettingsContext);
    const { theme, loading: themeLoading } = useTheme();
    const { checkLoggedIn } = useAuth();
    const [globalLoading, setGlobalLoading] = useState(true);
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    useEffect(() => {
        const verifyLogin = async () => {
            const loggedIn = await checkLoggedIn();
            setUserLoggedIn(loggedIn);
        };

        verifyLogin();
    }, [checkLoggedIn]);

    useEffect(() => {
        // When both user and theme data are done loading, globalLoading is set to false
        if (userLoading && !themeLoading) {
            setGlobalLoading(false);
        } else {
            setGlobalLoading(true);
        }
    }, [userLoading, themeLoading]);

    const setCookies = () => {
        if (preferences?.defaultData) {
            Cookies.set('defaultData', JSON.stringify(preferences.defaultData));
        }
        if (theme) {
            console.log(theme);
            // Cookies.set('theme', theme);
        }
    };

    const getCookiesData = () => {
        const cookiesStoredPreferences = Cookies.get('defaultData');
        return cookiesStoredPreferences ? JSON.parse(cookiesStoredPreferences) : {};
    };
    const getThemeCookiesData = () => {
        const cookiesStoredPreferences = Cookies.get('defaultData');
        return cookiesStoredPreferences ? JSON.parse(cookiesStoredPreferences) : {};
    };

    // const updateCookies = (cookies) => {
    //     let update = false;
    //     for (let key in cookies) {
    //         if (cookies[key] !== obj2[key]) {
    //             update = true;
    //         }
    //     }
    //     if (update) {
    //         Cookies.set('defaultData', JSON.stringify(preferences.defaultData));
    //     }
    // };

    // useEffect(() => {
    //     const defaultCookies = getCookiesData();
    //     const themeCookies = getThemeCookiesData();

    //     if (Object.keys(defaultCookies).length > 0 && Object.keys(preferences.defaultData).length > 0) {
    //         updateCookies();
    //     } else if (Object.keys(defaultCookies).length > 0 && preferences?.defaultData) {
    //         setCookies();
    //     }

    //     // if (Object.keys(themeCookies).length > 0 && Object.keys(preferences.defaultData).length > 0) {
    //     //     updateCookies();
    //     // } else if (Object.keys(defaultCookies).length > 0 && preferences?.defaultData) {
    //     //     setCookies();
    //     // }
    // }, [preferences?.defaultData]);

    return (
        <GlobalContext.Provider value={{ globalLoading }}>
            {globalLoading && userLoggedIn ? <LoadingScreen /> : children}
        </GlobalContext.Provider>
    );
};
