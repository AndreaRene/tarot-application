import { useContext } from 'react';
import CustomSwitch from '../Switch';
import { CookieSettingsContext } from '../SettingsRight/CookiesSettings';
import './SettingsRight.css';

const Notifications = () => {
    const { preferences, updatePreferences } = useContext(CookieSettingsContext);

    const handleToggle = (key) => {
        updatePreferences({ [key]: !preferences[key] });
    };

    return (
        <section className='right-set-content'>
            <div className='notifications'>
                <h2>Notifications</h2>
                <hr className='hr-dash' />
            </div>
            <div>
                <p className='notes'>We will only send notifications for one of the following reasons:</p>
            </div>
            <div>
                <ul className='ul-list'>
                    <li className='list'>Birthday wishes/in app gifts from our team</li>
                    <li className='list'>User interaction on your shared readings</li>
                    <li className='list'>Account access warnings</li>
                    <li className='list'>New features</li>
                </ul>
            </div>
            <div>
                <div className='switch-right'>
                    <CustomSwitch
                        label={<span style={{ fontWeight: 'bold' }}>Enable Notifications:</span>}
                        checked={preferences.notifications}
                        onChange={() => handleToggle('notifications')}
                    />
                </div>
            </div>
        </section>
    );
};

export default Notifications;
