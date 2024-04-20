import React from 'react';
import './Shop.css';
import Header from '../../components/Header/Header';
import Drawer from '../../components/Drawer/Drawer';

const Shop = ({ isLoggedIn }) => {
    return (
        <div className='shop-container'>
            <Header />
            {isLoggedIn && (
                <div className='drawer-container'>
                    <Drawer />
                </div>
            )}
            <div className='intro-shop'>
                <h1 className='welcome'>App Store</h1>
                <p>Welcome to our App Store </p>
            </div>
        </div>
    );
};

export default Shop;