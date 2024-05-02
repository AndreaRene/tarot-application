import React, { useState } from 'react';
import CustomSwitch from './Switch';
import './Profile.css';
import ProfilePicture from '../../assets/08_Strength.jpg'

const ProfileRight = () => {
    const [securityEnabled, setSecurityEnabled] = useState(true);
    const [birthdayEnabled, setBirthdayEnabled] = useState(true);
    const [discordEnabled, setDiscordEnabled] = useState(true);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [avatarEnabled, setAvatarEnabled] = useState(true);

    const handleSecurityToggle = () => {
        setSecurityEnabled(!securityEnabled);
    };
    const handleBirthdayToggle = () => {
        setBirthdayEnabled(!birthdayEnabled);
    };
    const handleDiscordToggle = () => {
        setDiscordEnabled(!discordEnabled);
    };
    const handleNotificationsToggle = () => {
        setNotificationsEnabled(!notificationsEnabled);
    };
    const handleAvatarToggle = () => {
        setAvatarEnabled(!avatarEnabled);
    };

    return (
        <section style={{ width: '50%', display: 'flex', justifyContent: 'center', borderLeft: '1px solid lightgrey' }}>
            <section style={{ width: '65%', textAlign: 'center' }}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h2>Personal Settings</h2>
                    <hr className='hr-dash' />
                </div>
                <div className='fields'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <CustomSwitch
                            label='Advanced Security'
                            checked={securityEnabled}
                            onChange={handleSecurityToggle}
                        />
                        <div style={{ textAlign: 'start', fontSize: '12px' }}>
                            <p> For the safety of your personal data, we will only display your information if you select the "View" button for a field. To learn more about why, please see the section in the FAQs regarding data securtiy. </p>
                        </div>
                    </div>
                </div>
                <div className='fields'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <CustomSwitch
                            label='Display Birthday'
                            checked={birthdayEnabled}
                            onChange={handleBirthdayToggle}
                            sx={{ display: 'flex', textAlign: 'space-between' }}
                        />
                        <div style={{ textAlign: 'start', fontSize: '12px' }}>
                            <p>We will only display the month and day. </p>
                        </div>
                    </div>
                </div>
                <div className='fields'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <CustomSwitch
                            label='Display Discord Tag'
                            checked={discordEnabled}
                            onChange={handleDiscordToggle}
                            sx={{ display: 'flex', textAlign: 'space-between' }}
                        />
                    </div>
                </div>
                <div className='fields'>
                    <label htmlFor="email">Theme</label>
                    <div id="email">Include Drop Down Menu</div>
                </div>

                <div className='notifications'>
                    <h2>Notifications</h2>
                    <hr className='hr-dash' />
                </div>
                <div >
                    <div>
                        <p className='notes'>We will only send notifications for the following reasons:</p>
                    </div>
                    <div>
                        <ul>
                            <li className='list'>Birthday wishes/in app gifts from our team</li>
                            <li className='list'>User interaction on your shared readings</li>
                            <li className='list'>Account access warnings</li>
                            <li className='list'>New features</li>
                        </ul>
                    </div>
                </div>
                <div className='fields'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <CustomSwitch
                            label='Enable Notifications'
                            checked={notificationsEnabled}
                            onChange={handleNotificationsToggle}
                            sx={{ display: 'flex', textAlign: 'space-between' }}
                        />
                    </div>
                </div>

                <div className='avatars'>
                    <h2>Avatars and Icons</h2>
                    <hr className='hr-dash' />
                </div>
                <div className='fields'>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <CustomSwitch
                            label='Enable Avatar Icons'
                            checked={avatarEnabled}
                            onChange={handleAvatarToggle}
                            sx={{ display: 'flex', textAlign: 'space-between' }}
                        />
                        <div style={{ textAlign: 'start', fontSize: '12px' }}>
                            <p>Avatar icons are automatically chosen based on events. </p>
                        </div>
                    </div>
                </div>
                <div className='fields'>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '15px' }}>
                        Active Avatar:
                    </div>
                    <div>
                        <img src={ProfilePicture} alt="Profile" style={{ width: '40px', borderRadius: '50%', border: '4px solid gray' }} />
                    </div>
                </div>
                <div className='fields'>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '15px' }}>
                        Active Avatar Icon:
                    </div>
                    <div>
                        <img src={ProfilePicture} alt="Profile" style={{ width: '40px', borderRadius: '50%', border: '4px solid gray' }} />
                    </div>
                </div>
            </section>
        </section>
    );
};

export default ProfileRight;
