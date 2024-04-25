import React, { useState } from 'react';
import './Landing.css';

const ImageGrid = ({ onHoveredItemChange }) => {
    const [hoveredItem, setHoveredItem] = useState('');


    const handleMouseEnter = (item) => {
        setHoveredItem(item);
        onHoveredItemChange(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem('');
        onHoveredItemChange('');
    };
    return (
        <div>
            <div id='grid'>
                <div className='left-img image-container'
                    onMouseEnter={() => handleMouseEnter('Daily Focus Spread')}
                    onMouseLeave={handleMouseLeave}
                >

                </div>
                <div className='center-img image-container'
                    onMouseEnter={() => handleMouseEnter('Three Card Spread')}
                    onMouseLeave={handleMouseLeave}
                >
                </div>
                <div className='right-img image-container'
                    onMouseEnter={() => handleMouseEnter('Interview Spread')}
                    onMouseLeave={handleMouseLeave}
                >
                </div>
            </div>

        </div>
    );
};

export default ImageGrid;