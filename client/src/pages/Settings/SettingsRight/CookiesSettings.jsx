import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import Cookies from 'js-cookie';
import { QUERY_DEFAULT_DATA, GET_AVATAR_DETAILS } from '../../../utils/queries';
import { useLazyQuery } from '@apollo/client';

export const CookieSettingsContext = createContext();

const CookieSettings = ({ children }) => {
    const [getDefaultData, { data: defaultData, loading: defaultLoading }] = useLazyQuery(QUERY_DEFAULT_DATA);
    const [getAvatarDetails, { data: avatarDetailsData }] = useLazyQuery(GET_AVATAR_DETAILS);

    const [preferences, updatePreferences] = useState({
        avatar: {},
        theme: '',
        deck: '',
        spread: '',
        defaultData: {
            theme: '',
            deck: '',
            spread: ''
        },
        saveChanges: false,
        notifications: true,
        advancedSecurity: false,
        enableAvatarIcons: true
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
                avatar: defaultData.me.activeAvatar._id || '',
                theme: defaultData.me.defaultTheme._id || '',
                deck: defaultData.me.defaultDeck._id || '',
                spread: defaultData.me.defaultSpread._id || '',
                defaultData: {
                    theme: defaultData.me.defaultTheme._id || '',
                    deck: defaultData.me.defaultDeck._id || '',
                    spread: defaultData.me.defaultSpread._id || ''
                },
                notifications: defaultData.me.notifications || true,
                advancedSecurity: defaultData.me.advancedSecurity || false,
                enableAvatarIcons: defaultData.me.enableAvatarIcons || true
            }));
            setDataLoaded(true);
            console.log(defaultData.me.defaultTheme);
        }
    }, [defaultData, getAvatarDetails, defaultLoading]);

    console.log(preferences.defaultData.theme);

    // Update avatar in preferences when avatarDetailsData is available
    useEffect(() => {
        if (avatarDetailsData) {
            updatePreferences((prev) => ({
                ...prev,
                avatar: avatarDetailsData.avatarDetails // Set avatar object
            }));
        }
    }, [avatarDetailsData]);

    // console.log(preferences);

    // const defaultPreferences = {
    //     theme: 'main',
    //     deck: 'eclipse',
    //     spread: 'dailyFocus',
    //     displayDiscordHandle: true,
    //     displayBirthday: true,
    //     notifications: true,
    //     advancedSecurity: false,
    //     enableAvatarIcons: true,
    //     avatar: 'https://tarot-deck-images.s3.us-east-2.amazonaws.com/avatars/chibi_fool_avatar.png'
    // };

    // const [preferences, setPreferences] = useState(() => {
    //     // const storedPreferences = Cookies.get('preferences');
    //     // return storedPreferences ? JSON.parse(storedPreferences) : defaultPreferences;
    //     return defaultPreferences;
    // });

    // console.log(preferences);

    // const [hasChanges, setHasChanges] = useState(false);
    // const timerRef = useRef(null);

    // const syncPreferences = useCallback(() => {
    //     // Cookies.set('preferences', JSON.stringify(preferences), {
    //     //     expires: 365
    //     // });
    //     setHasChanges(false);
    //     console.log('preferences updated:', preferences);
    // }, [preferences]);

    // const updatePreferences = (newPreferences) => {
    //     setHasChanges(true);
    //     setPreferences((prevPreferences) => ({
    //         ...prevPreferences,
    //         ...newPreferences
    //     }));
    // };

    // useEffect(() => {
    //     const handleBeforeUnload = () => {
    //         if (hasChanges) {
    //             syncPreferences();
    //         }
    //     };

    //     window.addEventListener('beforeunload', handleBeforeUnload);

    //     return () => {
    //         window.removeEventListener('beforeunload', handleBeforeUnload);
    //         if (timerRef.current) {
    //             clearTimeout(timerRef.current);
    //         }
    //     };
    // }, [hasChanges, syncPreferences]);

    // useEffect(() => {
    //     if (hasChanges) {
    //         if (timerRef.current) {
    //             clearTimeout(timerRef.current);
    //         }
    //         timerRef.current = setTimeout(() => {
    //             syncPreferences();
    //             timerRef.current = null;
    //         }, 5000); // Sync after 5 seconds of inactivity
    //     }
    // }, [hasChanges, syncPreferences]);

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
