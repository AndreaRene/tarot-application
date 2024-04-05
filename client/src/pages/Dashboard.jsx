import React from 'react';
import '../pages/Home/Home.css';
import Header from '../components/Header/Header';
import Drawer from '../components/Drawer/Drawer';

const Dashboard = ({ isLoggedIn }) => {
    return (
        <div className='home-container'>
            <Header />
            {isLoggedIn && (
                <div className='drawer-container'>
                    <Drawer />
                </div>
            )}
            <div className='intro-home'>
                <h1 className='welcome'>Welcome to TarotDeck!</h1> 
                <p>Let's see what's in the cards for you today. </p>
            </div>
        </div>
    );
};

export default Dashboard;