import React from 'react';
import '../HeroTwo/HeroTwo.css';

const HeroSectionTwo = () => {
    return (
        <div>
            <div className='heading-container'>
                <h2 className='hero-two-font'>
                    See what the cards hold for you!
                </h2>
            </div>
            <div id='grid'>
                <div className='left-img'></div>
                <div className='center-img'></div>
                <div className='right-img'></div>
            </div>
            <div className='mx-5 mb-5'>
                 <h2 className='hero-two-font'>Discover diverse readings and tailored insights through various spreads!</h2>
             </div>
        </div>
    );
};

export default HeroSectionTwo;