import React from 'react';
import '../pages/Home/Home.css';
import Header from '../components/Header/Header';
import Drawer from '../components/Drawer/Drawer';

const About = ({ isLoggedIn }) => {
    return (
        <div className='home-container'>
            <Header />
            {isLoggedIn && (
                <div className='drawer-container'>
                    <Drawer />
                </div>
            )}
            <div className='intro-home'>
                <h1 className='welcome'>Meet the Team</h1>
                <p>Here's more about the team.  </p>
            </div>
        </div>
    );
};

export default About;