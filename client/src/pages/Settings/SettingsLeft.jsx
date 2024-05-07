import { useState } from 'react';
import CustomSwitch from './Switch';
import './Settings.css';

const SettingsLeft = () => {
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
                    <div className='fields' style={{ fontWeight: 'bold'}}>
                        <label htmlFor="username">Username:</label>
                        <div id="username">JohnDoe</div>
                        
                    </div>
                    <div className='fields' style={{ fontWeight: 'bold'}}>
                        <label htmlFor="name" >Name:</label>
                        <div id="name">John Doe</div>
                    </div>
                    <div className='fields birthday' style={{ fontWeight: 'bold'}}>
                        <label htmlFor="birthday" style={{ fontWeight: 'bold'}}>Birthday:</label>
                        <div id="birthday">01/01/1990</div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column', fontSize: '12px', marginTop: '0' }}>
                            <CustomSwitch
                                style={{ fontSize: '12px'}}
                                label='Display Birthday Month and Day:'
                                checked={settings.birthdayEnabled}
                                onChange={() => handleToggle('birthdayEnabled')}
                            />
                        </div>
                    </div>
                    <div className='fields'style={{ fontWeight: 'bold'}} >
                        <label htmlFor="email">Email:</label>
                        <div id="email">johndoe@example.com</div>
                    </div>
                    <div className='fields discord' style={{ fontWeight: 'bold'}}>
                        <label htmlFor="discord" style={{ fontWeight: 'bold'}}>Discord Tag:</label>
                        <div id="discord">JohnDoe#1234</div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column', fontSize: '12px', marginTop: '0' }}>
                            <CustomSwitch
                                style={{ fontSize: '12px'}}
                                label='Display Discord Tag:'
                                checked={settings.discordEnabled}
                                onChange={() => handleToggle('discordEnabled')}
                            />
                        </div>
                    </div>
                    <div className='fields' style={{ fontWeight: 'bold'}}>
                        <label htmlFor="phone">Phone Number:</label>
                        <div id="phone">123-456-7890</div>
                    </div>
                </div>
                <div className='password'>
                    <div className='reset'>
                        <h2>Password Reset</h2>
                        <hr className='hr-dash' />
                    </div>
                    <div className='fields'>
                        <label htmlFor="currentPassword" style={{ fontWeight: 'bold'}}>Current Password:</label>
                        <input type="password" id="currentPassword" style={{ backgroundColor: '#4F3052', height: '26px', border: '1px solid rgb(168, 148, 103)' }} />
                    </div>
                    <div className='fields'>
                        <label htmlFor="newPassword" style={{ fontWeight: 'bold'}}>New Password:</label>
                        <input type="password" id="newPassword" style={{ backgroundColor: '#4F3052', height: '26px', border: '1px solid rgb(168, 148, 103)' }} />
                    </div>
                    <div className='fields'>
                        <label htmlFor="confirmPassword" style={{ fontWeight: 'bold'}}>Confirm New Password:</label>
                        <input type="password" id="confirmPassword" style={{ backgroundColor: '#4F3052', height: '26px', border: '1px solid rgb(168, 148, 103)' }} />
                    </div>
                    <div>
                        <button className='button reset-btn' onClick={() => console.log('Reset Password button clicked')}>Reset Password</button>
                    </div>

                </div>
                <div className='security'>
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <h2>Advanced Security</h2>
                        <hr className='hr-dash' />
                    </div>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <CustomSwitch
                                label={<span style={{ fontWeight: 'bold' }}>Advanced Security</span>}
                                checked={settings.securityEnabled}
                                onChange={() => handleToggle('securityEnabled')}
                            />
                            <div style={{ textAlign: 'start', fontSize: '12px' }}>
                                <p> For the safety of your personal data, we will only display your information if you select the field. To learn more, please see the section in the FAQs regarding data securtiy. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default SettingsLeft;
