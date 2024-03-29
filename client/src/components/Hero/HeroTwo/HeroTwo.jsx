import React, { useState } from 'react';
import '../HeroTwo/HeroTwo.css';

const HeroSectionTwo = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [descriptionContent, setDescriptionContent] = useState('');

    const handleMouseEnter = (item, content) => {
        setHoveredItem(item);
        setDescriptionContent(content);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
        setDescriptionContent('');
    };

    return (
        <div>
            <div className='heading-container'>
                <h2 className='hero-two-font'>
                    See what the cards hold for you!
                </h2>
            </div>
            <div id='grid'>
                <div className='left-img'
                    onMouseEnter={() => handleMouseEnter('left', 'Daily Focus Spread: Draw a single card each day to gain insight and guidance for the day ahead, offering a focused practice of self-reflection.')}
                    onMouseLeave={handleMouseLeave}
                ></div>
                <div className='center-img'
                    onMouseEnter={() => handleMouseEnter('center', 'Three Card Spread: Draw three tarot cards to explore past, present, and future influences or to gain insights into a specific situation.')}
                    onMouseLeave={handleMouseLeave}
                ></div>
                <div className='right-img'
                    onMouseEnter={() => handleMouseEnter('right', 'Interview Spread: Draw cards to establish a connection with a new deck, revealing its personality, strengths, and purpose.')}
                    onMouseLeave={handleMouseLeave}
                ></div>
            </div>
            <div className='spread-desc'>
                {hoveredItem && <h3>{descriptionContent}</h3>}
            </div>
            <div className='mx-5 mb-2'>
                <h2 className='hero-two-font'>Discover diverse readings and tailored insights through various spreads!</h2>
            </div>
        </div>
    );
};

export default HeroSectionTwo;