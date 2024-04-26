import React, { useState } from 'react';
import ImageGrid from './ImageGrid';
import StarsBackground from '../Landing/Assets/Stars.png';

const PanelTwo = () => {
    const [hoveredItem, setHoveredItem] = useState('');
    const [hoveredItemText, setHoveredItemText] = useState('');

    const handleHoveredItemChange = (item, text) => {
        setHoveredItem(item);
        setHoveredItemText(text);
    }
    return (
        <div style={{
            position: 'relative',
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
        }}>
            <img src={StarsBackground} alt="Star Background overlay"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 1
                }} />
            {hoveredItem ? (
                <h2 className='hoverText' style={{ fontSize: '44px', textDecoration: 'underline' }}>
                    {hoveredItem}
                </h2>
            ) : (
                <h2 style={{
                    fontSize: '44px',
                    textDecoration: 'underline',
                    zIndex: '5',
                    textShadow: '2px 2px 2px black'
                }}>
                    See what the cards hold for you!</h2>
            )}
            <div>
                <ImageGrid onHoveredItemChange={handleHoveredItemChange} />
            </div>
            {hoveredItemText ? (
                <h2 className='hoverText' style={{ fontSize: '30px', marginBottom: '60px', width: '80vw' }}>
                    {hoveredItemText}
                </h2>
            ) : (
                <h2 style={{
                    fontSize: '34px',
                    marginBottom: '60px',
                    zIndex: '5',
                    textShadow: '2px 2px 2px black'
                }}>
                    Discover diverse readings and tailored insights through various spreads!</h2>
            )}
        </div >
    );
};

export default PanelTwo;
