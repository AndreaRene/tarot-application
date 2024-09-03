import { useState, forwardRef, cloneElement } from 'react';
import { Button, Modal } from '@mui/material';
import PropTypes from 'prop-types';
import { useSpring, animated } from '@react-spring/web';
import DecksModal from './DecksModal';

import './BrowseDecks.css';

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

const BrowseDecks = () => {
    const [open, setOpen] = useState(false); // Toggles Spread Modal

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <section className='decksWrapper'>
            <div className='topSection'>
                <div className='deckLeftSide'>
                    <h3 className='featuredDeckTitle'>Featured Deck: Eclipse of the Soul</h3>
                    <img
                        className='featuredDeckImg'
                        alt='eclipseOfTheSoul'></img>
                </div>
                <div className='deckRightSide'>
                    <div className='rightSideInsideContainer'>
                        <h1 className='title'>Tarot Card Decks</h1>
                        <h3 className='description'>
                            Find decks that speak to you. Choose from a variety of themes and styles to customize your
                            experience.
                        </h3>
                        <Button sx={{ textTransform: 'none', fontSize: '2.2rem', margin: '25px 0 25px' }}>
                            Browse Decks
                        </Button>
                    </div>
                </div>
            </div>
            <div className='bottomSection'>
                <Button className='arrow'>❮</Button>
                <div className='deckContainer'>
                    <img
                        className='deckImgs'
                        alt='deck1'
                        onClick={handleOpen}
                    />
                    <img
                        className='deckImgs'
                        alt='deck2'
                        onClick={handleOpen}
                    />
                    <img
                        className='deckImgs'
                        alt='deck3'
                        onClick={handleOpen}
                    />
                </div>
                <Button className='arrow'>❯</Button>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'>
                <Fade in={open}>
                    <DecksModal onClose={handleClose} />
                </Fade>
            </Modal>
        </section>
    );
};

export default BrowseDecks;
