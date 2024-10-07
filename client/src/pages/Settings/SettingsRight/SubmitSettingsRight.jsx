import { useEffect, useState, useContext } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_ME, QUERY_DEFAULT_DATA } from '../../../utils/queries';
import { EDIT_USER_SETTINGS } from '../../../utils/mutations';
import { CookieSettingsContext } from './CookiesSettings';
import Button from 'react-bootstrap/Button';

const SubmitSettingsRight = () => {
    const { preferences, updatePreferences, dataLoaded } = useContext(CookieSettingsContext);
    const [getMe, { data: currentUserData }] = useLazyQuery(GET_ME);
    const [editUserSettings] = useMutation(EDIT_USER_SETTINGS, {
        refetchQueries: [{ query: QUERY_DEFAULT_DATA }]
    });

    useEffect(() => {
        getMe();
    }, []);

    const [changedPreferences, setChangedPreferences] = useState({});

    useEffect(() => {
        if (!dataLoaded) return;

        const updatedFields = {};

        // Check if 'theme' changed
        if (preferences.theme !== preferences.defaultData.theme) {
            updatedFields.defaultTheme = preferences.theme;
        } else if (updatedFields.defaultTheme && preferences.theme === preferences.defaultData.theme) {
            console.log('deted updated theme');
            delete updatedFields.defaultTheme;
        }

        // Check if 'deck' changed
        if (preferences.deck !== preferences.defaultData.deck) {
            updatedFields.defaultDeck = preferences.deck;
        } else if (updatedFields.defaultDeck && preferences.deck === preferences.defaultData.deck) {
            console.log('deted updated deck');
            delete updatedFields.defaultDeck;
        }

        // Check if 'spread' changed
        if (preferences.spread !== preferences.defaultData.spread) {
            updatedFields.defaultSpread = preferences.spread;
        } else if (updatedFields.defaultSpread && preferences.spread === preferences.defaultData.spread) {
            console.log('deted updated spread');
            delete updatedFields.defaultSpread;
        }

        setChangedPreferences(updatedFields);
    }, [preferences]);

    const updateSettingsRight = async () => {
        const userId = await currentUserData.me._id;

        try {
            const { data } = await editUserSettings({
                variables: {
                    userId: userId,
                    input: changedPreferences
                }
            });
        } catch (e) {
            console.error('Error updating user settings:', e);
        }

        setChangedPreferences({});
        updatePreferences((prev) => ({
            ...prev,
            saveChanges: true
        }));
    };

    return (
        <div>
            {Object.keys(changedPreferences).length > 0 && (
                <Button
                    className='button reset-btn'
                    onClick={() => updateSettingsRight()}>
                    Save Changes
                </Button>
            )}
        </div>
    );
};

export default SubmitSettingsRight;
