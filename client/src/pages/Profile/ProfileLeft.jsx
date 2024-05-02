import React, { useState } from 'react';
import CustomSwitch from './Switch';
import './Profile.css';

const ProfileLeft = () => {
    const [settings, setSettings] = useState({
        securityEnabled: true,
        birthdayEnabled: true,
        discordEnabled: true,
    });

    const handleToggle = (key) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [key]: !prevSettings[key],
        }));
    };

    return (
        <section className='left-pro-container'>
            <section className='left-pro-content' style={{ width: '65%', textAlign: 'center', padding: '20px' }}>
                <div>
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap' }}>
                            <div style={{ flex: 1 }}></div>
                            <span style={{ flexShrink: 0 }}>User Information</span>
                            <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                                <i className="fas fa-pencil-alt" style={{ marginLeft: '10px' }}></i>
                            </div>
                        </h2>
                        <hr />
                    </div>
                    <div className='fields'>
                        <label htmlFor="username">Username:</label>
                        <div id="username">JohnDoe</div>
                    </div>
                    <div className='fields'>
                        <label htmlFor="name">Name:</label>
                        <div id="name">John Doe</div>
                    </div>
                    <div className='fields'>
                        <label htmlFor="birthday">Birthday:</label>
                        <div id="birthday">01/01/1990</div>
                    </div>
                    <div className='fields'>
                        <label htmlFor="email">Email:</label>
                        <div id="email">johndoe@example.com</div>
                    </div>
                    <div className='fields'>
                        <label htmlFor="discord">Discord Tag:</label>
                        <div id="discord">JohnDoe#1234</div>
                    </div>
                    <div className='fields'>
                        <label htmlFor="phone">Phone Number:</label>
                        <div id="phone">123-456-7890</div>
                    </div>
                </div>
                <div className='password'>
                    <div className='reset'>
                        <h2>Reset Password</h2>
                        <hr className='hr-dash' />
                    </div>
                    <div className='fields'>
                        <label htmlFor="currentPassword">Current Password:</label>
                        <input type="password" id="currentPassword" style={{ backgroundColor: '#4F3052', border: '1px solid rgb(168, 148, 103)' }} />
                    </div>
                    <div className='fields'>
                        <label htmlFor="newPassword">New Password:</label>
                        <input type="password" id="newPassword" style={{ backgroundColor: '#4F3052', border: '1px solid rgb(168, 148, 103)' }} />
                    </div>
                    <div className='fields'>
                        <label htmlFor="confirmPassword">Confirm New Password:</label>
                        <input type="password" id="confirmPassword" style={{ backgroundColor: '#4F3052', border: '1px solid rgb(168, 148, 103)' }} />
                    </div>
                    <div>
                        <button className='button reset-btn' onClick={() => console.log('Reset Password button clicked')}>Reset Password</button>
                    </div>
                    <div className='reset-link'>
                        <a href="#reset-email" style={{ color: 'whitesmoke', textDecoration: 'underline' }}>Reset via Email</a>
                    </div>
                </div>
                <div className='settings'>
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <h2>Personal Settings</h2>
                        <hr className='hr-dash' />
                    </div>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <CustomSwitch
                                label='Advanced Security'
                                checked={settings.securityEnabled}
                                onChange={() => handleToggle('securityEnabled')}
                            />
                            <div style={{ textAlign: 'start', fontSize: '12px' }}>
                                <p> For the safety of your personal data, we will only display your information if you select the "View" button for a field. To learn more about why, please see the section in the FAQs regarding data securtiy. </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <CustomSwitch
                                label='Display Birthday'
                                checked={settings.birthdayEnabled}
                                onChange={() => handleToggle('birthdayEnabled')}
                            />
                            <div style={{ textAlign: 'start', fontSize: '12px' }}>
                                <p>We will only display the month and day. </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <CustomSwitch
                                label='Display Discord Tag'
                                checked={settings.discordEnabled}
                                onChange={() => handleToggle('discordEnabled')}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default ProfileLeft;
