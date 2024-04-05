import React from 'react';
import '../Home/Home';
import '../Home/Home.css';
import Header from '../../components/Header/Header';
import Drawer from '../../components/Drawer/Drawer';

const Spreads = ({ isLoggedIn }) => {
    return (
        <div className='home-container'>
            <Header />
            {isLoggedIn && (
                <div className='drawer-container'>
                    <Drawer />
                </div>
            )}
            <div className='intro-home'>
                <h1 className='welcome'>Spreads</h1> 
                <p>Choose from a variety of spreads, based on your desired purpose. </p>
            </div>
        </div>
    );
};

export default Spreads;