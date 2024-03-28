import React from 'react';
import '../pages/Home/Home';
import '../pages/Home/Home.css';
import Header from '../components/Header/Header';
import Drawer from '../components/Drawer/Drawer';

const Journal = ({ isLoggedIn }) => {
    return (
        <div className='home-container'>
            <Header />
            {isLoggedIn && (
                <div className='drawer-container'>
                    <Drawer />
                </div>
            )}
            <div className='intro-home'>
                <h1 className='welcome'>Tarot Journal</h1> 
                <p>Enter meaningful readings and watch the growth you experience on your journey! </p>
            </div>
        </div>
    );
};

export default Journal;