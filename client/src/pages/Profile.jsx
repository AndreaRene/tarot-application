import React from 'react';
import '../pages/Home/Home';
import '../pages/Home/Home.css';
import Header from '../components/Header/Header';
import Drawer from '../components/Drawer/Drawer';

const Profile = ({ isLoggedIn }) => {
    return (
        <div className='home-container'>
            <Header />
            {isLoggedIn && (
                <div className='drawer-container'>
                    <Drawer />
                </div>
            )}
            <div className='intro-home'>
                <h1 className='welcome'>Welcome (username)</h1>
                <p>Profile details coming soon! </p>
            </div>
        </div>
    );
};

export default Profile;