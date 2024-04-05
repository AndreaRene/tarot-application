import React from 'react';
import '../Home/Home.css';
import Header from '../../components/Header/Header';
import Drawer from '../../components/Drawer/Drawer';

const Home = ({ isLoggedIn }) => {
    return (
        <div>
            <Header />
            <div className='home-container'>
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
        </div>
    );
};

export default Home;