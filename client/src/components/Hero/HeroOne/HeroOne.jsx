import React from 'react';
import '../Assets/Hero.css';
import Navbar from '../../Navbar.jsx';

const HeroSectionOne = () => {
    return (
        <div className='hero-section-one'>
            <div className='text-center mb-2'>
                <Navbar />
                {/* <hr className='line-style mb-3' /> */}
                <img
                    src='/Up_moon.png'
                    alt='Moon decorative element'
                    className='img-fluid img-sm'
                />
                <h1
                    className='hero-one-font font-bold text-center mt-1 display-2 display-md-5 display-lg-6 mb-3'
                >
                    Embark on a Journey <br /> of Reflection!
                </h1>
                <img
                    src='/Down_moon.png'
                    alt='Moon decorative element'
                    className='mb-5 img-fluid img-sm'
                />
                {/* <hr className='line-style mb-3' /> */}
            </div>
        </div>
    );
};

export default HeroSectionOne;