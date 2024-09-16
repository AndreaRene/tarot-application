import { useState } from 'react';
import './ReadingDrawer.css';

import Daily from '../../assets/Spreads/daily_draw_example.jpg';
import ThreeCard from '../../assets/Spreads/three_card_draw.jpg';
import Interview from '../../assets/Spreads/interview_spread.png';

import EOTS from '../../assets/CardBacks/eots_backs_01.jpg';
import RWSD from '../../assets/CardBacks/rwsd_backs_01.jpg';

const ReadingAside = () => {
    const [isSpreadsVisible, setSpreadsVisible] = useState(true);

    const handleSpreadsClick = () => setSpreadsVisible(true);
    const handleDecksClick = () => setSpreadsVisible(false);

    // Prevent deck button clicks from affecting the slide state
    const handleDeckButtonClick = (event) => {
        if (!isSpreadsVisible) {
            // If the decks panel is already visible, do nothing
            event.preventDefault();
        }
    };

    const spreadsItems = [
        { image: Daily, name: 'Daily Draw' },
        { image: ThreeCard, name: 'Three Card Draw' },
        { image: Interview, name: 'Interview Spread' },
        { image: Daily, name: 'Daily Draw' },
        { image: ThreeCard, name: 'Three Card Draw' },
        { image: Interview, name: 'Interview Spread' },
        { image: Daily, name: 'Daily Draw' },
        { image: ThreeCard, name: 'Three Card Draw' },
        { image: Interview, name: 'Interview Spread' },
        { image: Daily, name: 'Daily Draw' },
        { image: ThreeCard, name: 'Three Card Draw' },
        { image: Interview, name: 'Interview Spread' }
    ];

    const decksItems = [
        { image: EOTS, name: 'Eclipse of the Soul' },
        { image: RWSD, name: 'Rider-Waite-Smith' },
        { image: EOTS, name: 'Eclipse of the Soul' },
        { image: RWSD, name: 'Rider-Waite-Smith' },
        { image: EOTS, name: 'Eclipse of the Soul' },
        { image: RWSD, name: 'Rider-Waite-Smith' },
        { image: EOTS, name: 'Eclipse of the Soul' },
        { image: RWSD, name: 'Rider-Waite-Smith' }
    ];

    return (
        <div className='reading-aside'>
            {/* Sliding container for spreads and decks */}
            <div className={`slide-container ${isSpreadsVisible ? 'show-spreads' : 'show-decks'}`}>
                {/* Spreads Panel */}
                <div className='spreads-container'>
                    <div className='button-background'>
                        <button
                            onClick={handleDecksClick}
                            className='reading-button'>
                            View Decks
                        </button>
                    </div>
                    {spreadsItems.map((item, idx) => (
                        <div
                            key={idx}
                            className='spread-slide'>
                            <img
                                src={item.image}
                                alt={item.name}
                            />
                            <p>{item.name}</p>
                            <button className='spread-info-btn'>Spread Info</button>
                        </div>
                    ))}
                </div>

                {/* Decks Panel */}
                <div className='decks-container'>
                    <div className='button-background'>
                        <button
                            onClick={handleSpreadsClick}
                            className='reading-button'>
                            View Spreads
                        </button>
                    </div>
                    {decksItems.map((item, idx) => (
                        <div
                            key={idx}
                            className='deck-slide'>
                            <img
                                src={item.image}
                                alt={item.name}
                            />
                            <p>{item.name}</p>
                            <button
                                className='deck-info-btn'
                                onClick={handleDeckButtonClick}>
                                Deck Info
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReadingAside;
