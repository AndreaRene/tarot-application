import React from 'react';
import Cards from './Assets/Images/Cards.png';
import Dashboard from './Assets/Images/Dashboard.png'
import Hands from './Assets/Images/Hands.png';
import Journal from './Assets/Images/Journal.png';
import '../Hero/Assets/Hero.css';

const HeroSectionThree = () => {
    return (
        <div className='text-center icons-row mb-5'>
            <div>
                <img
                    src={Cards}
                    alt='Tarot Card Icon'
                    className='cards'
                >
                </img>
                <h3>Tarot<br />Readings</h3>
            </div>
            <div>
                <img
                    src={Dashboard}
                    alt='Computer Dashboard Icon'
                    className='dashboard'
                >
                </img>
                <h3>Personalized<br />Account</h3>
            </div>
            <div>
                <img
                    src={Journal}
                    alt='Journal Icon'
                    className='journal'
                >
                </img>
                <h3>Tarot<br />Journal</h3>
            </div>
            <div>
                <img
                    src={Hands}
                    alt='Hands Share Icon'
                    className='hands'
                >
                </img>
                <h3>Share<br />Readings</h3>
            </div>

        </div>
    );
};

export default HeroSectionThree;