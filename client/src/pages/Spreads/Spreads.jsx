import React from 'react';
import '../Spreads/Spreads.css';
import Header from '../../components/Header/Header';
import Drawer from '../../components/Drawer/Drawer';

const Spreads = ({ isLoggedIn }) => {
    return (
        <div className='spreads-container'>
            <Header />
            {isLoggedIn && (
                <div className='drawer-container'>
                    <Drawer />
                </div>
            )}
            <div className='intro-spreads'>
                <h1 className='welcome'>Spreads</h1> 
                <p>Choose from a variety of spreads, based on your desired purpose. </p>
            </div>
        </div>
    );
};

export default Spreads;