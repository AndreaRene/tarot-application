import React from 'react';
import '../pages/Home/Home';
import '../pages/Home/Home.css';
import Header from '../components/Header/Header';
import Drawer from '../components/Drawer/Drawer';

const Share = ({ isLoggedIn }) => {
    return (
        <div className='home-container'>
            <Header />
            {isLoggedIn && (
                <div className='drawer-container'>
                    <Drawer />
                </div>
            )}
            <div className='intro-home'>
                <h1 className='welcome'>Share Your Readings</h1> 
                <p>Gain insight and feedback from our community! </p>
            </div>
        </div>
    );
};

export default Share;