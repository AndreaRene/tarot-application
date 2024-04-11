import React, { useState, useEffect } from 'react';
import CustomMobileStepper from './CustomMobileStepper'; // Corrected import statement
import Cards from '../Assets/Images/Cards.png';
import Dashboard from '../Assets/Images/Dashboard.png';
import Hands from '../Assets/Images/Hands.png';
import Journal from '../Assets/Images/Journal.png';
import './HeroThree.css';
import CardDescription from './IconDescriptions/CardsDesc';
import DashboardDescription from './IconDescriptions/DashboardDesc';
import JournalDescription from './IconDescriptions/JournalDesc';
import HandsDescription from './IconDescriptions/HandsDesc';
import HeroSectionFour from '../HeroFour/HeroFour';

const HeroSectionThree = ({ handleDotClick }) => {
    const mobileStepperItems = [
        { image: Cards, alt: 'Tarot Card Icon', text: 'Tarot<br />Readings', description: <CardDescription /> },
        { image: Dashboard, alt: 'Computer Dashboard Icon', text: 'Custom<br />Dashboard', description: <DashboardDescription /> },
        { image: Journal, alt: 'Journal Icon', text: 'Tarot<br />Journal', description: <JournalDescription /> },
        { image: Hands, alt: 'Hands Share Icon', text: 'Share<br />Readings', description: <HandsDescription /> },
    ];

    const [activeStep, setActiveStep] = useState(0);

    const handleItemClick = (index) => {
        setActiveStep(index);
        handleDotClick(mobileStepperItems[index].description);
    };

    const handleChange = (index) => {
        setActiveStep(index);
        handleDotClick(mobileStepperItems[index].description);
    };

    useEffect(() => {
        handleDotClick(mobileStepperItems[0].description)
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prevStep) => (prevStep + 1) % mobileStepperItems.length);
            handleDotClick(mobileStepperItems[activeStep].description);
        }, 4000);

        return () => clearInterval(interval);
    }, [activeStep, mobileStepperItems, handleDotClick])

    return (
        <div>
            <div className='text-center icons-row mb-2'>
                {mobileStepperItems.map((item, index) => (
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
                <CustomMobileStepper
                    items={mobileStepperItems} // Corrected variable name
                    activeStep={activeStep}
                    handleDotClick={handleDotClick}
                    handleChange={handleChange}
                />
            </div>
            <HeroSectionFour activeStep={activeStep} />
        </div>
    );
};

export default HeroSectionThree;
