import { useContext } from 'react';
import CustomSwitch from '../Switch';
import { CookieSettingsContext } from '../SettingsRight/CookiesSettings';
import './SettingsRight.css';

const SettingsLeft = () => {
    const { preferences, updatePreferences } = useContext(CookieSettingsContext);

    const handleToggle = (key) => {
        updatePreferences({ [key]: !preferences[key] });
    };

    return (
        <section className='right-set-content'>
            <div>
                <h2>Advanced Security</h2>
                <hr className='hr-dash' />
            </div>
            <div>
                <div className='switch-right'>
                    <CustomSwitch
                        label={<span style={{ fontWeight: 'bold' }}>Advanced Security</span>}
                        checked={preferences.advancedSecurity}
                        onChange={() => handleToggle('advancedSecurity')}
                    />
                    <div className='security'>
                        <p>
                            For the safety of your personal data, we will only display your information if you select
                            the field. To learn more, please see the section in the FAQs regarding data securtiy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SettingsLeft;
