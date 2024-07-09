import { useState, forwardRef, cloneElement, useContext } from 'react';
import { CookieSettingsContext } from './CookiesSettings';
import PropTypes from 'prop-types';
import CustomSwitch from '../Switch';
import Avatar from '../../../assets/08_Strength.jpg';
import AvatarIcon from '../../../assets/Icons/Crystals_wh.png';
import SelectorComponent from '../SelectorMenu';
import Modal from '@mui/material/Modal';
import AvatarModal from './AvatarModal';
import { useSpring, animated } from '@react-spring/web';
// import { GET_ME } from '../../../utils/queries';
// import { useLazyQuery } from '@apollo/client';
import '../Settings.css';

const Fade = forwardRef(function Fade(props, ref) {
    const { children, in: open, onClick, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null, true);
            }
        }
    });

    return (
        <animated.div
            ref={ref}
            style={style}
            {...other}>
            {cloneElement(children, { onClick })}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element.isRequired,
    in: PropTypes.bool,
    onClick: PropTypes.any,
    onEnter: PropTypes.func,
    onExited: PropTypes.func
};

const Appearance = () => {
    const { preferences, updatePreferences } = useContext(CookieSettingsContext);

    const [open, setOpen] = useState(false); // sets whether or not work modal is opened

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleModalClose = () => {
        handleClose(); // Close the modal in Cards component
    };

    const handleSelectorChange = (key, value) => {
        updatePreferences({ [key]: value });
    };

    const handleToggle = (key) => {
        updatePreferences({ [key]: !preferences[key] });
    };

    // const [settings, setSettings] = useState({
    //     avatarEnabled: true,
    //     appearanceEnabled: true,
    //     decksEnabled: true,
    //     spreadsEnabled: true,
    //     selectedTheme: 'crystals',
    //     selectedDeck: 'eclipse',
    //     selectedSpread: 'dailyFocus',
    // });

    // const handleToggle = (key) => {
    //     setSettings((prevSettings) => ({
    //         ...prevSettings,
    //         [key]: !prevSettings[key],
    //     }));
    // };

    // const handleSelectorChange = (key, value) => {
    //     setSettings((prevSettings) => ({
    //         ...prevSettings,
    //         [key]: value,
    //     }));
    // };

    const themeOptions = [
        { value: 'crystals', label: 'Gilded Onyx' },
        { value: 'fall', label: 'Fall Moods' },
        { value: 'moody', label: 'Scarlet Shadows' },
        { value: 'pastel', label: 'Pastel Haunt' },
        { value: 'purples', label: 'Dusk Horizon' }
    ];
    const deckOptions = [
        { value: 'eclipse', label: 'Eclipse of the Soul' },
        { value: 'two', label: 'Deck Two' },
        { value: 'three', label: 'Deck Three' }
    ];
    const spreadOptions = [
        { value: 'dailyFocus', label: 'Daily Focus Spread' },
        { value: 'threeCard', label: 'Three Card Spread' },
        { value: 'interview', label: 'Interview Spread' }
    ];

    return (
        <section style={{ width: '65%', textAlign: 'center' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h2>Appearance</h2>
                <hr />
            </div>
            <div
                className='fields'
                style={{ fontWeight: 'bold' }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '10px',
                        fontWeight: 'bold'
                    }}>
                    Theme:
                </div>
                <SelectorComponent
                    label='Theme'
                    options={themeOptions}
                    value={preferences.theme}
                    onChange={(event) => handleSelectorChange('theme', event.target.value)}
                />
            </div>
            <div
                className='fields'
                style={{ fontWeight: 'bold' }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '10px',
                        fontWeight: 'bold'
                    }}>
                    Default Deck:
                </div>
                <SelectorComponent
                    label='Default Deck'
                    options={deckOptions}
                    value={preferences.deck}
                    onChange={(event) => handleSelectorChange('deck', event.target.value)}
                />
            </div>
            <div
                className='fields'
                style={{ fontWeight: 'bold' }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '10px',
                        fontWeight: 'bold'
                    }}>
                    Default Spread:
                </div>
                <SelectorComponent
                    label='Default Spread'
                    options={spreadOptions}
                    value={preferences.spread}
                    onChange={(event) => handleSelectorChange('spread', event.target.value)}
                />
            </div>
            <div className='fields'>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '20px',
                        fontWeight: 'bold'
                    }}>
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
                            marginTop: '10px'
                        }}
                        onClick={handleOpen}
                    />
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'>
                <Fade in={open}>
                    <AvatarModal onClose={handleModalClose} />
                </Fade>
            </Modal>
            <div className='fields'>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '20px',
                        fontWeight: 'bold'
                    }}>
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
                            marginTop: '10px'
                        }}
                    />
                </div>
            </div>
            <div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <CustomSwitch
                        label={<span style={{ fontWeight: 'bold' }}>Enable Avatar Icons:</span>}
                        checked={preferences.enableAvatarIcons}
                        onChange={() => handleToggle('enableAvatarIcons')}
                    />
                    <div
                        className='avatar'
                        style={{ textAlign: 'start', fontSize: '12px' }}>
                        <p>Avatar icons are automatically chosen based on events.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appearance;
