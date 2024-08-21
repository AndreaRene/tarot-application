import { useState, forwardRef, cloneElement } from 'react';
import { Button, Modal } from '@mui/material';
import PropTypes from 'prop-types';
import { useSpring, animated } from '@react-spring/web';
import SpreadModal from './SpreadModal';

import './BrowseSpreads.css';

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

const BrowseSpreads = () => {
    const [open, setOpen] = useState(false); // Toggles Spread Modal

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <section className='spreadsWrapper'>
            <div className='topSection'>
                <div className='leftSide'>
                    <div className='leftSideInsideContainer'>
                        <h1 className='title'>Spreads and Readings</h1>
                        <h3 className='description'>
                            Gain tailored insights from focused spreads. See what the cards hold for you.
                        </h3>
                        <Button sx={{ textTransform: 'none', fontSize: '2.2rem', margin: '25px 0 25px' }}>
                            Browse Spreads
                        </Button>
                    </div>
                </div>
                <div className='rightSide'>
                    <h3 className='featuredSpreadTitle'>Featured Spread: Daily Focus</h3>
                    <img
                        className='featuredSpreadImg'
                        alt='dailyFocus'></img>
                </div>
            </div>
            <div className='bottomSection'>
                <Button className='arrow'>❮</Button>
                <div className='spreadContainer'>
                    <img
                        className='spreadImgs'
                        alt='spread1'
                        onClick={handleOpen}
                    />
                    <img
                        className='spreadImgs'
                        alt='spread2'
                        onClick={handleOpen}
                    />
                    <img
                        className='spreadImgs'
                        alt='spread3'
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
                    <SpreadModal onClose={handleClose} />
                </Fade>
            </Modal>
        </section>
    );
};

export default BrowseSpreads;
