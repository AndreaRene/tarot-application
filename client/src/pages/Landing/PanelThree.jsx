import React, { useState, useEffect } from 'react';
import BackgroundImage from '../../assets/Hero2Dark.png';
import CardIcon from '../Landing/Assets/Cards.png';
import HandsIcon from '../Landing/Assets/Hands.png';
import DashboardIcon from '../Landing/Assets/Dashboard.png';
import CardsDesc from './IconDescriptions/CardsDesc';
import DashboardDesc from './IconDescriptions/DashboardDesc';
import HandsDesc from './IconDescriptions/HandsDesc';
import StoreDesc from './IconDescriptions/StoreDesc';
import './Landing.css';
import AuthComponent from './Login_Signup/AuthComponent';

const PanelThree = () => {
    const [description, setDescription] = useState(<CardsDesc />);
    const [selectedIcon, setSelectedIcon] = useState('Readings');

    const handleLinkClick = (content, icon) => {
        setDescription(content);
        setSelectedIcon(icon);
    };

    useEffect(() => {
        setDescription(<CardsDesc />);
    }, []);

    return (
        <div className='panel-container'>
            <div
                className='crystal-hero'
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundSize: 'cover'
                }}>
                <div className='icon-container'>
                    <div
                        className={`icon ${selectedIcon === 'Readings' ? 'selected' : ''}`}
                        onClick={() => handleLinkClick(<CardsDesc />, 'Readings')}>
                        <img
                            src={CardIcon}
                            alt='Card Reading Icon'
                        />
                        <a
                            href='#readings'
                            style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h2 className='icon-font'>Readings</h2>
                        </a>
                    </div>
                    <div
                        className={`icon ${selectedIcon === 'Dashboard' ? 'selected' : ''}`}
                        onClick={() => handleLinkClick(<DashboardDesc />, 'Dashboard')}>
                        <img
                            src={DashboardIcon}
                            alt='User Dashboard Icon'
                        />
                        <a
                            href='#dashboard'
                            style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h2 className='icon-font'> Dashboard</h2>
                        </a>
                    </div>
                    <div
                        className={`icon ${selectedIcon === 'Community' ? 'selected' : ''}`}
                        onClick={() => handleLinkClick(<HandsDesc />, 'Community')}>
                        <img
                            src={HandsIcon}
                            alt='Share Reading Icon'
                        />
                        <a
                            href='#share'
                            style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h2 className='icon-font'>Community</h2>
                        </a>
                    </div>
                    <div
                        className={`icon ${selectedIcon === 'App Store' ? 'selected' : ''}`}
                        onClick={() => handleLinkClick(<StoreDesc />, 'App Store')}>
                        <img
                            src={CardIcon}
                            alt='Card Reading Icon'
                        />
                        <a
                            href='#share'
                            style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h2 className='icon-font'>App Store</h2>
                        </a>
                    </div>
                </div>
            </div>
            <div className='main-text-section'>
                {description}
                <AuthComponent />
            </div>
        </div>
    );
};

export default PanelThree;
