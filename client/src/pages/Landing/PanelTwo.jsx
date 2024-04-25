import React, { useState } from 'react';
import ImageGrid from './ImageGrid';

const PanelTwo = () => {
    const [hoveredItem, setHoveredItem] = useState('');

    const handleHoveredItemChange = (item) => {
        setHoveredItem(item);
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '.3rem',
            width: '100vw',
            height: '100vh',
            backgroundImage: 'radial-gradient(circle, hsla(296, 37%, 15%, 1) 50%, hsla(244, 71%, 4%, 1) 99%)',
            paddingBottom: '10px',
            paddingTop: '20px',
        }}
        >
            {hoveredItem ? (
                <h2 style={{ fontSize: '34px', color: 'white' }}>
                    {hoveredItem}
                </h2>
            ): (
                <h2 style={{ fontSize: '34px' }}>See what the cards hold for you!</h2>
            )}
            <div>
                <ImageGrid onHoveredItemChange={handleHoveredItemChange} />
            </div>
            <h2 style={{ fontSize: '34px' }}>
                Discover diverse readings and tailored insights through various spreads!
            </h2>
        </div >
    );
};

export default PanelTwo;
