import React from 'react';
import '../Assets/Hero.css';

const HeroSectionOne = () => {
    return (
        
                <div className='text-center'>
                <hr className='line-style mb-3' />
                    <img src='/Up_moon.png' alt='Moon decorative element' className='img-fluid img-sm mt-5' />
                    <h1 className='hero-one-font font-bold text-center mt-1 display-3 display-md-4 display-lg-5 mb-3'>
                        Embark on a Journey <br /> of Reflection!
                    </h1>
                    <img src='/Down_moon.png' alt='Moon decorative element' className='mb-5 img-fluid img-sm' />
                    {/* <hr className='line-style mb-3' /> */}
                     <div className='overlay'></div>
                </div>

       
    );
};

export default HeroSectionOne;