import { useState } from 'react';
import CustomSwitch from '../Switch';

import UserInformation from './UserInformation';
import PasswordReset from './PasswordReset';
// import EmailReset from './EmailReset';
import '../Settings.css';

const SettingsLeft = () => {
    const [settings, setSettings] = useState({
        securityEnabled: true,
    });

    const handleToggle = (key) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [key]: !prevSettings[key],
        }));
    };

    return (
        <section className='left-pro-container'>
            <section
                className='left-pro-content'
                style={{ width: '65%', textAlign: 'center', padding: '20px' }}
            >
                <UserInformation />

                {/* <EmailReset /> */}

                <PasswordReset />
                <div className='security'>
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <h2>Advanced Security</h2>
                        <hr className='hr-dash' />
                    </div>
                    <div>
                        <div
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <CustomSwitch
                                label={
                                    <span style={{ fontWeight: 'bold' }}>
                                        Advanced Security
                                    </span>
                                }
                                checked={settings.securityEnabled}
                                onChange={() => handleToggle('securityEnabled')}
                            />
                            <div
                                style={{ textAlign: 'start', fontSize: '12px' }}
                            >
                                <p>
                                    {' '}
                                    For the safety of your personal data, we
                                    will only display your information if you
                                    select the field. To learn more, please see
                                    the section in the FAQs regarding data
                                    securtiy.{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default SettingsLeft;
