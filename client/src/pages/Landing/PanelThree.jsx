import React, { useState, useEffect } from 'react';
import BackgroundImage from '../../assets/Hero2Dark.png';
import CardIcon from '../Landing/Assets/Cards.png';
import HandsIcon from '../Landing/Assets/Hands.png';
import DashboardIcon from '../Landing/Assets/Dashboard.png';
import CardsDesc from './IconDescriptions/CardsDesc';
import DashboardDesc from './IconDescriptions/DashboardDesc';
import HandsDesc from './IconDescriptions/HandsDesc';
import StoreDesc from './IconDescriptions/StoreDesc';
import StarBackground from '../Landing/Assets/Stars.png';
import './Landing.css';
import SimpleFooter from '../../components/FooterPane/SimpleFooter';

const PanelThree = () => {
    const [description, setDescription] = useState(<CardsDesc />);

    const handleLinkClick = (content) => {
        setDescription(content);
    }

    useEffect(() => {
        setDescription(<CardsDesc />);
    }, []);

    return (
        <div className='panel-container'>
            <img
                src={StarBackground}
                alt='Stars background'
                className='star-layer'
            />
            <div className='crystal-hero'
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundSize: 'cover'
                }}>
                <div className='icon-container'>
                    <div className='icon' onClick={() => handleLinkClick(<CardsDesc />)}>
                        <img src={CardIcon} alt="Card Reading Icon" />
                        <a href="#readings" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h2 className='icon-font'>Readings</h2>
                        </a>
                    </div>
                    <div className='icon' onClick={() => handleLinkClick(<DashboardDesc />)}>
                        <img src={DashboardIcon} alt="User Dashboard Icon" />
                        <a href="#dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h2 className='icon-font'> Dashboard</h2>
                        </a>
                    </div>
                    <div className='icon' onClick={() => handleLinkClick(<HandsDesc />)}>
                        <img src={HandsIcon} alt="Share Reading Icon" />
                        <a href="#share" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h2 className='icon-font'>Community</h2>
                        </a>
                    </div>
                    <div className='icon' onClick={() => handleLinkClick(<StoreDesc />)}>
                        <img src={CardIcon} alt="Card Reading Icon" />
                        <a href="#share" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h2 className='icon-font'>App Store</h2>
                        </a>
                    </div>

                </div>
            </div>
            <div className='main-text-section'
            > 
                {description}
                <div className='simple-footer-buttons'>
                    <button className='button'>
                        Login
                    </button>
                    <button className='button'>
                        Sign Up
                    </button>
                </div>

            </div>
            <SimpleFooter />
        </div>
    );
};

export default PanelThree;