import React from 'react';
import '../Hero/Assets/Hero.css';

const HeroSectionFour = ({ selectedDescription }) => {
    return (
        <div>
            <div>
                <h1 className='text-white text-center mb-3 mt-5'>
                    {selectedDescription}
                </h1>
            </div>
        </div>
    );
};

export default HeroSectionFour;