import { useState } from 'react';
import PropTypes from 'prop-types';
import DailyDraw from '../../assets/Spreads/daily_draw_example.jpg';
import DeckInterview from '../../assets/Spreads/interview_spread.png';
import ThreeCard from '../../assets/Spreads/three_card_draw.jpg';
// import CardBack from '../../assets/card_back.jpg';

const AccordionSection = ({ title }) => {
    const [isOpen, setIsOpen] = useState(title === 'Spreads');

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const sectionStyles = {
        position: 'absolute',
        top: title === 'Spreads' ? 0 : undefined,
        bottom: title === 'Decks' ? 0 : undefined,
        height: isOpen ? '100%' : '0%', // Take full height when open
        width: '100%',
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
        transform: isOpen ? 'translateY(0)' : title === 'Spreads' ? 'translateY(-100%)' : 'translateY(100%)',
        zIndex: 1
    };

    const buttonStyle = {
        backgroundColor: '#eee',
        color: '#444',
        cursor: 'pointer',
        padding: '10px',
        width: '100%',
        border: 'none',
        textAlign: 'center',
        outline: 'none',
        fontSize: '15px',
        position: 'absolute',
        top: title === 'Spreads' ? 0 : undefined,
        bottom: title === 'Decks' ? 0 : undefined,
        zIndex: 2 // Ensure buttons are always clickable and visible
    };

    const imgStyle = { width: '100%', padding: '5px 0' };

    return (
        <div style={{ width: '200px', position: 'relative', height: '100%' }}>
            <button
                style={buttonStyle}
                onClick={toggle}>
                {title} {title === 'Spreads' ? <span>▼</span> : <span>▲</span>}
            </button>
            <div style={sectionStyles}>
                {title === 'Spreads' ? (
                    <>
                        <img
                            src={DailyDraw}
                            alt='Spread 1'
                            style={imgStyle}
                        />
                        <img
                            src={DeckInterview}
                            alt='Spread 2'
                            style={imgStyle}
                        />
                        <img
                            src={ThreeCard}
                            alt='Spread 3'
                            style={imgStyle}
                        />
                    </>
                ) : (
                    <>
                        {/* <img src={CardBack} alt="Deck 1" style={imgStyle} />
                        <img src={CardBack} alt="Deck 2" style={imgStyle} />
                        <img src={CardBack} alt="Deck 3" style={imgStyle} /> */}
                    </>
                )}
            </div>
        </div>
    );
};

AccordionSection.propTypes = {
    title: PropTypes.string
};

export default AccordionSection;
