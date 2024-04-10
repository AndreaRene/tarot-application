import React from 'react';
import '../Share/Share.css';
import Header from '../../components/Header/Header';
import Drawer from '../../components/Drawer/Drawer';

const Share = ({ isLoggedIn }) => {
    return (
        <div className='share-container'>
            <Header />
            {isLoggedIn && (
                <div className='drawer-container'>
                    <Drawer />
                </div>
            )}
            <div className='intro-share'>
                <h1 className='welcome'>Share Your Readings</h1>
                <p>Gain insight and feedback from our community! </p>
            </div>
        </div>
    );
};

export default Share;