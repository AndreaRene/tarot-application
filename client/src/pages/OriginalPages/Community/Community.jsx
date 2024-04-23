import React from 'react';
import './Community.css';
import Header from '../../components/Header/Header';
import Drawer from '../../components/Drawer/Drawer';

const Community = ({ isLoggedIn }) => {
    return (
        <div className='community-container'>
            <Header />
            {isLoggedIn && (
                <div className='drawer-container'>
                    <Drawer />
                </div>
            )}
            <div className='intro-community'>
                <h1 className='welcome'>Community</h1>
                <p>Welcome to the TarotDeck family. </p>
            </div>
        </div>
    );
};

export default Community;