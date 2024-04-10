import React from 'react';
import '../Legal/Legal.css';
import Header from '../../components/Header/Header';
import Drawer from '../../components/Drawer/Drawer';

const Legal = ({ isLoggedIn }) => {
    return (
        <div className='legal-container'>
            <Header />
            {isLoggedIn && (
                <div className='drawer-container'>
                    <Drawer />
                </div>
            )}
            <div className='intro-legal'>
                <h1 className='welcome'>Legal</h1>
                <p>Legal Shtuff! </p>
            </div>
        </div>
    );
};

export default Legal;