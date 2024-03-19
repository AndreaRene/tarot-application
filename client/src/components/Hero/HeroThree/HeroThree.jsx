import React, { useState } from 'react';
import DotStepper from './DotStepper';
import Cards from '../Assets/Images/Cards.png';
import Dashboard from '../Assets/Images/Dashboard.png';
import Hands from '../Assets/Images/Hands.png';
import Journal from '../Assets/Images/Journal.png';
import '../Assets/Hero.css';
import CardDescription from './IconDescriptions/CardsDesc';
import DashboardDescription from './IconDescriptions/DashboardDesc';
import JournalDescription from './IconDescriptions/JournalDesc';
import HandsDescription from './IconDescriptions/HandsDesc';

const HeroSectionThree = ({ handleDotClick }) => {
    const dotStepperItems = [
        { image: Cards, alt: 'Tarot Card Icon', text: 'Tarot<br />Readings', description: <CardDescription /> },
        { image: Dashboard, alt: 'Computer Dashboard Icon', text: 'Custom<br />Dashboard', description: <DashboardDescription /> },
        { image: Journal, alt: 'Journal Icon', text: 'Tarot<br />Journal', description: <JournalDescription /> },
        { image: Hands, alt: 'Hands Share Icon', text: 'Share<br />Readings', description: <HandsDescription /> },
        
       
    ];

    const [activeStep, setActiveStep] = useState(0);

    const handleItemClick = (index) => {
        setActiveStep(index);
        handleDotClick(dotStepperItems[index].description);
    };

    const handleChange = (index) => {
        setActiveStep(index);
        handleDotClick(dotStepperItems[index].description)
    }

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
                <DotStepper
                    items={dotStepperItems}
                    activeStep={activeStep}
                    handleDotClick={handleDotClick}
                    handleChange={handleChange}
                />
            </div>
        </div>
    );
};

export default HeroSectionThree;
