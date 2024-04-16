import React from 'react';
import './Journal.css';
import Header from '../../components/Header/Header';
import Drawer from '../../components/Drawer/Drawer';

const ReadingDetails = ({ isLoggedIn }) => {
    return (
        <div className='journal-container'>
            <Header />
            {isLoggedIn && (
                <div className='drawer-container'>
                    <Drawer />
                </div>
            )}
            <div className='intro-journal'>
                <h1 className='welcome'>Tarot Journal</h1>
                <p>Enter meaningful readings and watch the growth you experience on your journey! </p>
            </div>
        </div>
    );
};

export default ReadingDetails;