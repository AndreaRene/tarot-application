import React, { useState } from 'react';
import CustomSwitch from './Switch';
import './Profile.css';
import Avatar from '../../assets/08_Strength.jpg';
import AvatarIcon from '../../assets/Crystals_wh.png';


const ProfileRight = () => {
    const [settings, setSettings] = useState({
        avatarEnabled: true,
        appearanceEnabled: true,
        decksEnabled: true,
        spreadsEnabled: true,
        notificationsEnabled: true,
    });

    const handleToggle = (key) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [key]: !prevSettings[key],
        }));
    };

    return (
        <section style={{ width: '50%', display: 'flex', justifyContent: 'center', borderLeft: '1px solid lightgrey' }}>
            <section style={{ width: '65%', textAlign: 'center' }}>
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
                <div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <CustomSwitch
                            label='Enable Notifications'
                            checked={settings.notificationsEnabled}
                            onChange={() => handleToggle('notificationsEnabled')}

                        />
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h2>Appearance</h2>
                    <hr className='hr-dash' />
                </div>
                <div className='fields'>
                    <label htmlFor='theme'>Theme</label>
                    <div id='theme'>Include Drop Down Menu</div>
                </div>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <CustomSwitch
                            label='Set Default Theme'
                            checked={settings.appearanceEnabled}
                            onChange={() => handleToggle('appearanceEnabled')}
                        />
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h2>Favorite Decks</h2>
                    <hr className='hr-dash' />
                </div>
                <div className='fields'>
                    <label htmlFor='decks'>Favorite Decks</label>
                    <div id='decks'>Include Drop Down Menu</div>
                </div>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <CustomSwitch
                            label='Set Default Deck'
                            checked={settings.decksEnabled}
                            onChange={() => handleToggle('decksEnabled')}
                        />
                       
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h2>Favorite Spreads</h2>
                    <hr className='hr-dash' />
                </div>
                <div className='fields'>
                    <label htmlFor='spreads'>Favorite Spreads</label>
                    <div id='spreads'>Include Drop Down Menu</div>
                </div>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <CustomSwitch
                            label='Set Default Spread'
                            checked={settings.spreadsEnabled}
                            onChange={() => handleToggle('spreadsEnabled')}
                        />
                       
                    </div>
                </div>
                <div className='avatars'>
                    <h2>Avatars and Icons</h2>
                    <hr className='hr-dash' />
                </div>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <CustomSwitch
                            label='Enable Avatar Icons'
                            checked={settings.avatarEnabled}
                            onChange={() => handleToggle('avatarEnabled')}
                        />
                        <div style={{ textAlign: 'start', fontSize: '12px' }}>
                            <p>Avatar icons are automatically chosen based on events. </p>
                        </div>
                    </div>
                </div>
                <div className='fields'>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                        Active Avatar:
                    </div>
                    <div>
                        <img src={Avatar} alt="Profile" style={{ width: '40px', borderRadius: '50%', border: '2px solid gray', marginTop: '10px' }} />
                    </div>
                </div>
                <div className='fields'>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                        Active Avatar Icon:
                    </div>
                    <div>
                        <img src={AvatarIcon} alt='Profile' style={{ width: '40px', borderRadius: '50%', border: '2px solid gray', marginTop: '10px' }} />
                    </div>
                </div>
            </section>
        </section>
    );
};

export default ProfileRight;
