import { useContext } from 'react';
import CustomSwitch from '../Switch';
import { CookieSettingsContext } from '../SettingsRight/CookiesSettings';
import '../Settings.css';
import './SettingsRight.css';

const Notifications = () => {
    const { preferences, updatePreferences } = useContext(CookieSettingsContext);

    const handleToggle = () => {
        updatePreferences((prev) => ({ ...prev, notifications: !preferences.notifications }));
    };

    return (
        <div>
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
                <div className='notifications-switch'>
                    <CustomSwitch
                        label={<span style={{ fontWeight: 'bold' }}>Enable Notifications:</span>}
                        checked={preferences.notifications}
                        onChange={() => handleToggle()}
                    />
                </div>
            </div>
        </div>
    );
};

export default Notifications;
