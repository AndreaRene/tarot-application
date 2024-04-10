import React from 'react';
import '../FAQ/FAQ.css';
import Header from '../../components/Header/Header';
import Drawer from '../../components/Drawer/Drawer';

const FAQ = ({ isLoggedIn }) => {
    return (
        <div className='faq-container'>
            <Header />
            {isLoggedIn && (
                <div className='drawer-container'>
                    <Drawer />
                </div>
            )}
            <div className='intro-faq'>
                <h1 className='welcome'>FAQs</h1>
                <p>All your questions answered here! </p>
            </div>
        </div>
    );
};

export default FAQ;