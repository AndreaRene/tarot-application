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

const PanelThree = () => {
    const [description, setDescription] = useState(<CardsDesc />);

    const handleLinkClick = (content) => {
        setDescription(content);
    }

    useEffect(() => {
        setDescription(<CardsDesc />);
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '.3rem',
            width: '100vw',
            height: '100vh',
        }}>
            <img
                src={StarBackground}
                alt='Stars background'
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0, // Set zIndex to ensure it's behind other content

                }}
            />
            <div style={{
                display: 'flex',
                height: '40vh',
                width: '100vw',
                position: 'relative',
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: 'cover'

            }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
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
                        <img src={HandsIcon} alt= "Share Reading Icon" />
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
            <div
                style={{
                    height: '60vh',
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: 'radial-gradient(circle, hsla(296, 37%, 15%, 1) 50%, hsla(244, 71%, 4%, 1) 99%)',
                }}>
                {description}
                <footer style={{ marginTop: 'auto' }}>
                    <h3>Footer Links Here</h3>
                </footer>
            </div>
        </div>
    );
};

export default PanelThree;