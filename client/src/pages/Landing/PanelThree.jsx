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
            height: '100vh'
        }}>
            <div style={{
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
                            <h2 style={{ textDecoration: 'underline', marginTop: '0' }}>Readings</h2>
                        </a>
                    </div>
                    <div className='icon' onClick={() => handleLinkClick(<DashboardDesc />)}>
                        <img src={DashboardIcon} alt="User Dashboard Icon" />
                        <a href="#dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h2 style={{ textDecoration: 'underline', marginTop: '0' }}> Dashboard</h2>
                        </a>
                    </div>
                    <div className='icon' onClick={() => handleLinkClick(<HandsDesc />)}>
                        <img src={HandsIcon} alt="Share Reading Icon" />
                        <a href="#share" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h2 style={{ textDecoration: 'underline', marginTop: '0' }}>Community</h2>
                        </a>
                    </div>
                    <div className='icon' onClick={() => handleLinkClick(<StoreDesc />)}>
                        <img src={CardIcon} alt="Card Reading Icon" />
                        <a href="#share" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h2 style={{ textDecoration: 'underline', marginTop: '0' }}>App Store</h2>
                        </a>
                    </div>
                </div>
            </div>
            <div
                className='desc'
                style={{
                    height: '60vh',
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
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