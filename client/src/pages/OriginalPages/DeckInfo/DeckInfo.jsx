import React from 'react';
import './Share.css';
import Header from '../../components/Header/Header';
import Drawer from '../../components/Drawer/Drawer';

const DeckInfo = ({ isLoggedIn }) => {
    return (
        <div className='deckinfo-container'>
            <Header />
            {isLoggedIn && (
                <div className='drawer-container'>
                    <Drawer />
                </div>
            )}
            <div className='intro-deckinfo'>
                <h1 className='welcome'>Share Your Readings</h1>
                <p>Gain insight and feedback from our community! </p>
            </div>
        </div>
    );
};

export default DeckInfo;