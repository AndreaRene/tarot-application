import { createContext, useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
// import { QUERY_ALL_AVATARS } from '../../../utils/queries';

export const CookieSettingsContext = createContext();

const CookieSettings = ({ children }) => {
    const defaultPreferences = {
        theme: 'crystals',
        deck: 'eclipse',
        spread: 'dailyFocus',
        displayDiscordHandle: true,
        displayBirthday: true,
        notifications: true,
        advancedSecurity: false,
        enableAvatarIcons: true,
        avatar: 'https://tarot-deck-images.s3.us-east-2.amazonaws.com/avatars/chibi_fool_avatar.png'
    };

    const [preferences, setPreferences] = useState(() => {
        const storedPreferences = Cookies.get('preferences');
        return storedPreferences ? JSON.parse(storedPreferences) : defaultPreferences;
    });

    // const [allAvatars, { data: allAvatarsData }] = useLazyQuery(QUERY_ALL_AVATARS);
    // // Set the default selected avatar
    // useEffect(() => {
    //     if (Object.keys(avatarUrls).length > 0) {
    //         const firstAvatarUrl = Object.values(avatarUrls)[0];
    //         setSelectedAvatar(firstAvatarUrl);
    //     }
    // }, [avatarUrls]);

    const [hasChanges, setHasChanges] = useState(false);
    const timerRef = useRef(null);

    const syncPreferences = useCallback(() => {
        Cookies.set('preferences', JSON.stringify(preferences), {
            expires: 365
        });
        setHasChanges(false);
        console.log('preferences updated:', preferences);
    }, [preferences]);

    const updatePreferences = (newPreferences) => {
        setHasChanges(true);
        setPreferences((prevPreferences) => ({
            ...prevPreferences,
            ...newPreferences
        }));
    };

    useEffect(() => {
        const handleBeforeUnload = () => {
            if (hasChanges) {
                syncPreferences();
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [hasChanges, syncPreferences]);

    useEffect(() => {
        if (hasChanges) {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            timerRef.current = setTimeout(() => {
                syncPreferences();
                timerRef.current = null;
            }, 5000); // Sync after 5 seconds of inactivity
        }
    }, [hasChanges, syncPreferences]);

    return (
        <CookieSettingsContext.Provider value={{ preferences, updatePreferences }}>
            {children}
        </CookieSettingsContext.Provider>
    );
};

CookieSettings.propTypes = {
    children: PropTypes.node.isRequired
};

export default CookieSettings;
