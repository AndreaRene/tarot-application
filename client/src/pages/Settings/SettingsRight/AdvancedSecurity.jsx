import { useContext } from 'react';
import CustomSwitch from '../Switch';
import { CookieSettingsContext } from '../SettingsRight/CookiesSettings';
import '../Settings.css';

const SettingsLeft = () => {
    const { preferences, updatePreferences } = useContext(
        CookieSettingsContext
    );

    const handleToggle = (key) => {
        updatePreferences({ [key]: !preferences[key] });
    };

    return (
        <section style={{ width: '65%', textAlign: 'center' }}>
            <div className='security'>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h2>Advanced Security</h2>
                    <hr className='hr-dash' />
                </div>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <CustomSwitch
                            label={
                                <span style={{ fontWeight: 'bold' }}>
                                    Advanced Security
                                </span>
                            }
                            checked={preferences.advancedSecurity}
                            onChange={() => handleToggle('advancedSecurity')}
                        />
                        <div style={{ textAlign: 'start', fontSize: '12px' }}>
                            <p>
                                For the safety of your personal data, we will
                                only display your information if you select the
                                field. To learn more, please see the section in
                                the FAQs regarding data securtiy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SettingsLeft;
