import { useState } from 'react';
import CustomSwitch from './Switch';
import './Settings.css';
import Avatar from '../../assets/08_Strength.jpg';
import AvatarIcon from '../../assets/Icons/Crystals_wh.png';
import SelectorComponent from './SelectorMenu';

const SettingsRight = () => {
    const [settings, setSettings] = useState({
        avatarEnabled: true,
        appearanceEnabled: true,
        decksEnabled: true,
        spreadsEnabled: true,
        notificationsEnabled: true,
        selectedTheme: '',
        selectedDeck: '',
        selectedSpread: '',
    });

    const handleToggle = (key) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [key]: !prevSettings[key],
        }));
    };

    const handleSelectorChange = (key, value) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [key]: value,
        }));
    };
    const themeOptions = [
        { value: 'crystals', label: 'Gilded Onyx' },
        { value: 'fall', label: 'Fall Moods' },
        { value: 'moody', label: 'Scarlet Shadows' },
        { value: 'pastel', label: 'Pastel Haunt' },
        { value: 'purples', label: 'Dusk Horizon' },
    ];
    const deckOptions = [
        { value: 'eclipse', label: 'Eclipse of the Soul' },
        { value: 'two', label: 'Deck Two' },
        { value: 'three', label: 'Deck Three' },
    ];
    const spreadOptions = [
        { value: 'dailyFocus', label: 'Daily Focus Spread' },
        { value: 'threeCard', label: 'Three Card Spread' },
        { value: 'interview', label: 'Interview Spread' },
    ];

    return (
        <section
            style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'center',
                borderLeft: '1px solid lightgrey',
            }}
        >
            <section style={{ width: '65%', textAlign: 'center' }}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h2>Appearance</h2>
                    <hr />
                </div>
                <div className='fields' style={{ fontWeight: 'bold' }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: '10px',
                            fontWeight: 'bold',
                        }}
                    >
                        Theme:
                    </div>
                    <SelectorComponent
                        label='Theme'
                        options={themeOptions}
                        value={settings.selectedTheme}
                        onChange={(event) =>
                            handleSelectorChange(
                                'selectedTheme',
                                event.target.value
                            )
                        }
                    />
                </div>
                <div className='fields' style={{ fontWeight: 'bold' }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: '10px',
                            fontWeight: 'bold',
                        }}
                    >
                        Default Deck:
                    </div>
                    <SelectorComponent
                        label='Default Deck'
                        options={deckOptions}
                        value={settings.selectedDeck}
                        onChange={(event) =>
                            handleSelectorChange(
                                'selectedDeck',
                                event.target.value
                            )
                        }
                    />
                </div>
                <div className='fields' style={{ fontWeight: 'bold' }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: '10px',
                            fontWeight: 'bold',
                        }}
                    >
                        Default Spread:
                    </div>
                    <SelectorComponent
                        label='Default Spread'
                        options={spreadOptions}
                        value={settings.selectedSpread}
                        onChange={(event) =>
                            handleSelectorChange(
                                'selectedSpread',
                                event.target.value
                            )
                        }
                    />
                </div>
                <div className='fields'>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: '20px',
                            fontWeight: 'bold',
                        }}
                    >
                        Active Avatar:
                    </div>
                    <div>
                        <img
                            src={Avatar}
                            alt='settings'
                            style={{
                                width: '40px',
                                borderRadius: '50%',
                                border: '2px solid gray',
                                marginTop: '10px',
                            }}
                        />
                    </div>
                </div>
                <div className='fields'>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: '20px',
                            fontWeight: 'bold',
                        }}
                    >
                        Active Avatar Icon:
                    </div>
                    <div>
                        <img
                            src={AvatarIcon}
                            alt='settings'
                            style={{
                                width: '40px',
                                borderRadius: '50%',
                                border: '2px solid gray',
                                marginTop: '10px',
                            }}
                        />
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <CustomSwitch
                            label={
                                <span style={{ fontWeight: 'bold' }}>
                                    Enable Avatar Icons:
                                </span>
                            }
                            checked={settings.avatarEnabled}
                            onChange={() => handleToggle('avatarEnabled')}
                        />
                        <div
                            className='avatar'
                            style={{ textAlign: 'start', fontSize: '12px' }}
                        >
                            <p>
                                Avatar icons are automatically chosen based on
                                events.{' '}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='notifications'>
                    <h2>Notifications</h2>
                    <hr />
                </div>
                <div>
                    <div>
                        <p className='notes'>
                            We will only send notifications for one of the
                            following reasons:
                        </p>
                    </div>
                    <div>
                        <ul className='ul-list'>
                            <li className='list'>
                                Birthday wishes/in app gifts from our team
                            </li>
                            <li className='list'>
                                User interaction on your shared readings
                            </li>
                            <li className='list'>Account access warnings</li>
                            <li className='list'>New features</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <CustomSwitch
                            label={
                                <span style={{ fontWeight: 'bold' }}>
                                    Enable Notifications:
                                </span>
                            }
                            checked={settings.notificationsEnabled}
                            onChange={() =>
                                handleToggle('notificationsEnabled')
                            }
                        />
                    </div>
                </div>
            </section>
        </section>
    );
};

export default SettingsRight;
