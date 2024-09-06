import React, { useState } from 'react';
import { Button, Slide } from '@mui/material';
import { Link } from 'react-router-dom';
import './ReadingDrawer.css';

import Daily from '../../assets/Spreads/daily_draw_example.jpg';
import ThreeCard from '../../assets/Spreads/three_card_draw.jpg';
import Interview from '../../assets/Spreads/interview_spread.png';

import EOTS from '../../assets/CardBacks/eots_backs_01.jpg';
import RWSD from '../../assets/CardBacks/rwsd_backs_01.jpg';

const ReadingAside = () => {
    const [isDrawerOpen, setDrawerOpen] = useState( false );

    const handleSpreadsClick = () => setDrawerOpen( false );
    const handleDecksClick = () => setDrawerOpen( true );

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
        { image: Interview, name: 'Interview Spread' },
    ];

    const decksItems = [
        { image: EOTS, name: 'Eclipse of the Soul' },
        { image: RWSD, name: 'Rider-Waite-Smith' },
        { image: EOTS, name: 'Eclipse of the Soul' },
        { image: RWSD, name: 'Rider-Waite-Smith' },
        { image: EOTS, name: 'Eclipse of the Soul' },
        { image: RWSD, name: 'Rider-Waite-Smith' },
        { image: EOTS, name: 'Eclipse of the Soul' },
        { image: RWSD, name: 'Rider-Waite-Smith' },
    ];

    return (
        <div className="reading-aside">
            {/* Buttons for Spreads and Decks */ }
            <div style={ { display: 'flex', justifyContent: 'space-between', padding: '16px' } }>
                <Button variant="contained" onClick={ handleSpreadsClick }>Spreads</Button>
                <Button variant="contained" onClick={ handleDecksClick }>Decks</Button>
            </div>

            {/* Scrollable Spread Container */ }
            { !isDrawerOpen && (
                <div className="spreads-container scrollable-container">
                    { spreadsItems.map( ( item, idx ) => (
                        <div key={ idx } className="spread-slide">
                            <img src={ item.image } alt={ item.name } />
                            <p>{ item.name }</p>
                            <Link className='spread-info-btn'>Spread Info</Link>
                        </div>
                    ) ) }
                </div>
            ) }

            {/* Custom Drawer with Decks */ }
            <Slide direction="right" in={ isDrawerOpen } mountOnEnter unmountOnExit timeout={ 300 }>
                <div className="decks-container">
                    { decksItems.map( ( item, idx ) => (
                        <div key={ idx } className="deck-slide">
                            <img src={ item.image } alt={ item.name } />
                            <p>{ item.name }</p>
                            <Link className='deck-info-btn'>Deck Info</Link>
                        </div>
                    ) ) }
                </div>
            </Slide>
        </div>
    );
};

export default ReadingAside;
