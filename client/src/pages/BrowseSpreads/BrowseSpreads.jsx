import { useState, forwardRef, cloneElement } from 'react';
import { Button, Modal } from '@mui/material';
import PropTypes from 'prop-types';
import { useSpring, animated } from '@react-spring/web';
import SpreadModal from './SpreadModal';
import DailyDraw from '../../assets/Spreads/daily_draw_example.jpg';
import ThreeCard from '../../assets/Spreads/three_card_draw.jpg';
import Interview from '../../assets/Spreads/interview_spread.png';

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
                        <h2 className='spreads-title'>Spreads and Readings</h2>
                        <hr className='hr-store' />
                        <h3 className='description'>
                            Gain tailored insights from focused spreads, finding deeper connections and meaning with
                            every reading.
                        </h3>
                        {/* <Button sx={{ textTransform: 'none', fontSize: '2.2rem', margin: '25px 0 25px' }}>
                            Browse Spreads
                        </Button> */}
                    </div>
                </div>
                <div className='rightSide'>
                    <h3 className='featuredSpreadTitle'>Featured Spread: Daily Focus</h3>
                    <img
                        src={DailyDraw}
                        className='featuredSpreadImg'
                        alt='dailyFocus'
                        onClick={handleOpen}
                    />
                </div>
            </div>
            <div className='bottomSection'>
                {/* <Button className='arrow'>❮</Button> */}

                <div className='spreadContainer'>
                    <div className='imageWrapper'>
                        <img
                            src={Interview}
                            className='spreadImgs'
                            alt='Interview Spread'
                            onClick={handleOpen}
                        />
                        <p className='imageText'>Interview Spread</p>
                    </div>
                    <div className='imageWrapper'>
                        <img
                            src={DailyDraw}
                            className='spreadImgs'
                            alt='Daily Draw Spread'
                            onClick={handleOpen}
                        />
                        <p className='imageText'>Daily Draw Spread</p>
                    </div>
                    <div className='imageWrapper'>
                        <img
                            src={ThreeCard}
                            className='spreadImgs'
                            alt='Three Card Spread'
                            onClick={handleOpen}
                        />
                        <p className='imageText'>Three Card Spread</p>
                    </div>
                </div>
                {/* <Button className='arrow'>❯</Button> */}
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
