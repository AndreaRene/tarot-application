import { createContext, useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

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
        enableAvatarIcons: true
    };

    const [preferences, setPreferences] = useState(() => {
        const storedPreferences = Cookies.get('preferences');
        return storedPreferences ? JSON.parse(storedPreferences) : defaultPreferences;
    });

    const [hasChanges, setHasChanges] = useState(false);
    const timerRef = useRef(null);

    const syncPreferences = useCallback(() => {
        Cookies.set('preferences', JSON.stringify(preferences), {
            expires: 365
        });
        setHasChanges(false);
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
