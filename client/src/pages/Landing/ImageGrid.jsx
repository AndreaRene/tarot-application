import React, { useState } from 'react';


const ImageGrid = ({ onHoveredItemChange }) => {
    const [hoveredItem, setHoveredItem] = useState('');
    const [hoveredItemText, setHoveredItemText] = useState('');


    const handleMouseEnter = (item, text) => {
        setHoveredItem(item);
        onHoveredItemChange(item, text);
    };

    const handleMouseLeave = () => {
        setHoveredItem('');
        onHoveredItemChange('');
    };
    return (
        <div>
            <div id='grid'>
                <div className='left-img image-container'
                    onMouseEnter={() => handleMouseEnter('Daily Focus Spread', 'Draw a single card each day to gain insight and guidance for the day ahead, offering a focused practice of self-reflection.')}
                    onMouseLeave={handleMouseLeave}
                >

                </div>
                <div className='center-img image-container'
                    onMouseEnter={() => handleMouseEnter('Three Card Spread', 'Draw three tarot cards to explore past, present, and future influences or to gain insights into a specific situation.')}
                    onMouseLeave={handleMouseLeave}
                >
                </div>
                <div className='right-img image-container'
                    onMouseEnter={() => handleMouseEnter('Interview Spread','Draw cards to establish a connection with a new deck, revealing its personality, strengths, and purpose.')}
                    onMouseLeave={handleMouseLeave}
                >
                </div>
            </div>

        </div>
    );
};

export default ImageGrid;