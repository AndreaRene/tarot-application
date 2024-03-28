import React from 'react';
import '../HeroOne/HeroOne.css';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar.jsx';

const HeroSectionOne = () => {
    return (
        <div className='hero-section-one'>
            <div className='text-center mb-2 mt-4'>
                <div>
                    <Link to='/'
                        style={{
                            position: 'relative',
                            zIndex: 3
                        }}
                    >
                        <img
                            src='tarot_logo.png'
                            alt='Tarot Deck Logo'
                            style={{
                                width: '130px',
                                marginTop: '20px',
                                marginBottom: '30px',
                                zIndex: '3'
                            }}
                        />
                    </Link>
                </div>
                <img
                    src='/Up_moon.png'
                    alt='Moon decorative element'
                    className='moon-up img-fluid img-sm'
                />
                <h1
                    className='hero-one-font font-bold text-center mt-1 display-2 display-md-5 display-lg-6 mb-3'
                >
                    Embark on an Enlightening <br /> Journey with Tarot
                </h1>
                <img
                    src='/Down_moon.png'
                    alt='Moon decorative element'
                    className='mb-5 img-fluid img-sm'
                />
                <Navbar />
            </div>
        </div>
    );
};

export default HeroSectionOne;