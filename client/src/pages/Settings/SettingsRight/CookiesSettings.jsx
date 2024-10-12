import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { QUERY_DEFAULT_DATA, GET_AVATAR_DETAILS } from '../../../utils/queries';
import { useLazyQuery } from '@apollo/client';

export const CookieSettingsContext = createContext();

const CookieSettings = ({ children }) => {
    const [getDefaultData, { data: defaultData, loading: defaultLoading }] = useLazyQuery(QUERY_DEFAULT_DATA);
    const [getAvatarDetails, { data: avatarDetailsData }] = useLazyQuery(GET_AVATAR_DETAILS);

    const [preferences, updatePreferences] = useState({
        avatar: '',
        theme: '',
        deck: '',
        spread: '',
        defaultData: {},
        saveChanges: false,
        notifications: true,
        advancedSecurity: false
    });

    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        getDefaultData();
    }, []);

    useEffect(() => {
        if (defaultData) {
            const avatarId = defaultData.me.activeAvatar._id;
            getAvatarDetails({ variables: { avatarId } });

            updatePreferences((prev) => ({
                ...prev,
                activeAvatar: defaultData.me.activeAvatar._id,
                theme: defaultData.me.defaultTheme._id,
                deck: defaultData.me.defaultDeck._id,
                spread: defaultData.me.defaultSpread._id,
                defaultData: {
                    theme: defaultData.me.defaultTheme._id,
                    deck: defaultData.me.defaultDeck._id,
                    spread: defaultData.me.defaultSpread._id,
                    notifications: defaultData.me.notifications,
                    advancedSecurity: defaultData.me.advancedSecurity
                },
                notifications: defaultData.me.notifications,
                advancedSecurity: defaultData.me.advancedSecurity
            }));
            setDataLoaded(true);
        }
    }, [defaultData, getAvatarDetails, defaultLoading]);

    // Update avatar in preferences when avatarDetailsData is available
    useEffect(() => {
        if (avatarDetailsData) {
            updatePreferences((prev) => ({
                ...prev,
                avatar: avatarDetailsData.avatarDetails // Set avatar object
            }));
        }
    }, [avatarDetailsData]);

    const setCookies = () => {
        if (preferences?.defaultData) {
            Cookies.set('defaultData', JSON.stringify(preferences.defaultData));
        }
    };

    const getCookiesData = () => {
        const cookiesStoredPreferences = Cookies.get('defaultData');
        return cookiesStoredPreferences ? JSON.parse(cookiesStoredPreferences) : {};
    };

    useEffect(() => {
        const cookies = getCookiesData();
        const updateCookies = () => {
            let update = false;
            for (let key in cookies) {
                if (cookies[key] !== obj2[key]) {
                    update = true;
                }
            }
            if (update) {
                Cookies.set('defaultData', JSON.stringify(preferences.defaultData));
            }
        };
        if (Object.keys(cookies).length > 0 && Object.keys(preferences.defaultData).length > 0) {
            updateCookies();
        } else if (Object.keys(cookies).length > 0 && preferences?.defaultData) {
            setCookies();
        }
    }, [preferences?.defaultData]);

    return (
        <CookieSettingsContext.Provider value={{ preferences, updatePreferences, dataLoaded, setDataLoaded }}>
            {children}
        </CookieSettingsContext.Provider>
    );
};

CookieSettings.propTypes = {
    children: PropTypes.node.isRequired
};

export default CookieSettings;
