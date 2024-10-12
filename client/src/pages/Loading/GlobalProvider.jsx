import { createContext, useState, useEffect, useContext } from 'react';
import { useTheme } from '../Settings/ThemeContext';
import Cookies from 'js-cookie';
import { CookieSettingsContext } from '../Settings/SettingsRight/CookiesSettings.jsx';
import LoadingScreen from './LoadingScreen.jsx';
import { useAuth } from '../../utils/AuthContext';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const { preferences, dataLoaded: userLoading } = useContext(CookieSettingsContext);
    const { defaultTheme, loading: themeLoading } = useTheme();
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

    const manageCookies = () => {
        const cookiesData = Cookies.get('defaultData');
        const themeData = Cookies.get('themeData');

        const defaultCookies = cookiesData ? JSON.parse(cookiesData) : {};
        const themeCookies = themeData ? JSON.parse(themeData) : {};

        const shouldUpdateCookies = (cookies, data) => {
            return Object.keys(data).some((key) => cookies[key] !== data[key]);
        };

        // Check and update defaultData cookies
        if (Object.keys(defaultCookies).length && preferences?.defaultData) {
            if (shouldUpdateCookies(defaultCookies, preferences.defaultData)) {
                Cookies.set('defaultData', JSON.stringify(preferences.defaultData));
            }
        } else if (preferences?.defaultData) {
            Cookies.set('defaultData', JSON.stringify(preferences.defaultData));
        }

        // Check and update theme cookies
        if (Object.keys(themeCookies).length && defaultTheme) {
            if (shouldUpdateCookies(themeCookies, { defaultTheme })) {
                Cookies.set('themeData', JSON.stringify({ defaultTheme }));
            }
        } else if (defaultTheme) {
            Cookies.set('themeData', JSON.stringify({ defaultTheme }));
        }
    };

    // Call manageCookies inside useEffect
    useEffect(() => {
        manageCookies();
    }, [preferences?.defaultData, defaultTheme]);

    return (
        <GlobalContext.Provider value={{ globalLoading }}>
            {globalLoading && userLoggedIn ? <LoadingScreen /> : children}
        </GlobalContext.Provider>
    );
};
