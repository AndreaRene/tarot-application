import React from 'react';
import './LeftSmallPanel.css';

const LeftSmallPanel = () => {
    return (
        <div className='left-aside'>
            <div className='spreads'>
                <h3>Spreads</h3>
                <img src='spread 1' alt='spread 1' />
                <img src='spread 2' alt='spread 2' />
                <img src='spread 3' alt='spread 3' />
            </div>
            <div className='decks'>
                <h3>Decks</h3>
                <img src='decks 1' alt='decks 1' />
                <img src='decks 2' alt='decks 2' />
                <img src='decks 3' alt='decks 3' />
            </div>
        </div>
    );
};

export default LeftSmallPanel;
