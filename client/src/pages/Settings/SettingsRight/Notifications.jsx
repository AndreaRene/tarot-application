import { useContext } from 'react';
import CustomSwitch from '../Switch';
import { CookieSettingsContext } from '../SettingsRight/CookiesSettings';
import '../Settings.css';

const Notifications = () => {
    const { preferences, updatePreferences } = useContext(CookieSettingsContext);

    const handleToggle = (key) => {
        updatePreferences({ [key]: !preferences[key] });
    };

    return (
        <section style={{ width: '65%', textAlign: 'center' }}>
            <div className='notifications'>
                <h2>Notifications</h2>
                <hr />
            </div>
            <div>
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
            </div>
            <div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
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
