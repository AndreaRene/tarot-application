import React, { useState } from 'react';
import DotStepper from './DotStepper';
import Cards from '../Assets/Images/Cards.png';
import Dashboard from '../Assets/Images/Dashboard.png';
import Hands from '../Assets/Images/Hands.png';
import Journal from '../Assets/Images/Journal.png';
import '../Assets/Hero.css';

const HeroSectionThree = ({ handleDotClick }) => {
    const dotStepperItems = [
        { image: Cards, alt: 'Tarot Card Icon', text: 'Tarot<br />Readings', description: 'Card reading description here' },
        { image: Dashboard, alt: 'Computer Dashboard Icon', text: 'Personalized<br />Account', description: 'Personalized account description here' },
        { image: Journal, alt: 'Journal Icon', text: 'Tarot<br />Journal', description: 'Tarot journal description here' },
        { image: Hands, alt: 'Hands Share Icon', text: 'Share<br />Readings', description: 'Share readings description here' }
    ];

    const [activeStep, setActiveStep] = useState(0); // Initialize activeStep state

    const handleItemClick = (index) => {
        setActiveStep(index); // Update activeStep state when an item is clicked
        handleDotClick(dotStepperItems[index].description);
    };

    return (
        <div>
            <div className='text-center icons-row mb-5'>
                {dotStepperItems.map((item, index) => (
                    <div key={index} onClick={() => handleItemClick(index)}>
                        <img
                            src={item.image}
                            alt={item.alt}
                            className='icon'
                        />
                        <h3 dangerouslySetInnerHTML={{ __html: item.text }} />
                    </div>
                ))}
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'none',
                    color: 'rgb(168, 148, 103)'
                }}
            >
                <DotStepper items={dotStepperItems} activeStep={activeStep} handleDotClick={handleDotClick} />
            </div>
        </div>
    );
};

export default HeroSectionThree;
