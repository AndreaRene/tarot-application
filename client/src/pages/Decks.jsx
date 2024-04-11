import React from 'react';
import '../pages/Home/Home';
import '../pages/Home/Home.css';
import Header from '../components/Header/Header';
import Drawer from '../components/Drawer/Drawer';

const Decks = ({ isLoggedIn }) => {
    return (
        <div className='home-container'>
            <Header />
            {isLoggedIn && (
                <div className='drawer-container'>
                    <Drawer />
                </div>
            )}
            <div className='intro-home'>
                <h1 className='welcome'>Browse Decks</h1> 
                <p>Choose decks that speak to you. </p>
            </div>
        </div>
    );
};

export default Decks;