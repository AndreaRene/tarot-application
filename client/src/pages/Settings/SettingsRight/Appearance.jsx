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
import './SettingsRight.css';

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
        <section className='right-set-content'>
            <div className='form-settings'>
                <h2>Appearance</h2>
                <hr />
            </div>
            <div className='fields'>
                <div className='field-items'>
                    Theme:
                </div>
                <SelectorComponent
                    options={themeOptions}
                    value={preferences.theme}
                    onChange={(event) => handleSelectorChange('theme', event.target.value)}
                />
            </div>
            <div className='fields'>
                <div className='field-items'>
                    Default Deck:
                </div>
                <SelectorComponent
                    options={deckOptions}
                    value={preferences.deck}
                    onChange={(event) => handleSelectorChange('deck', event.target.value)}
                />
            </div>
            <div className='fields'>
                <div className='field-items'>
                    Default Spread:
                </div>
                <SelectorComponent
                    options={spreadOptions}
                    value={preferences.spread}
                    onChange={(event) => handleSelectorChange('spread', event.target.value)}
                />
            </div>
            <div className='fields'>
                <div className='field-avatars'>
                    Active Avatar:
                </div>
                <div className='field-settings'>
                    <img
                        src={Avatar}
                        alt='settings'
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
                <div className='field-avatars'>
                    Active Avatar Icon:
                </div>
                <div className='field-settings'>
                    <img
                        src={AvatarIcon}
                        alt='settings'
                    />
                </div>
            </div>
            <div>
                <div className='switch-right'>
                    <CustomSwitch
                        label={<span style={{ fontWeight: 'bold' }}>Enable Avatar Icons:</span>}
                        checked={preferences.enableAvatarIcons}
                        onChange={() => handleToggle('enableAvatarIcons')}
                    />
                    <div className='avatar'>
                        <p>Avatar icons are automatically chosen based on events.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appearance;
