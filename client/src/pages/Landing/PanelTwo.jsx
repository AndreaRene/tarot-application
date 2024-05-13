import React, { useState } from 'react';
import ImageGrid from './ImageGrid';
import StarsBackground from '../Landing/Assets/Stars.png';
import AuthComponent from './Login_Signup/AuthComponent';

const PanelTwo = () => {
    const [hoveredItem, setHoveredItem] = useState('');
    const [hoveredItemText, setHoveredItemText] = useState('');

    const handleHoveredItemChange = (item, text) => {
        setHoveredItem(item);
        setHoveredItemText(text);
    }
    return (
        <div className='panel-container'
            style={{
                position: 'relative',
                backgroundImage: 'radial-gradient(circle, hsla(296, 37%, 15%, 1) 50%, hsla(244, 71%, 4%, 1) 99%)',
            }}>
            <img className='star-layer'
                src={StarsBackground}
                alt="Star Background overlay"
            />
            {hoveredItem ? (
                <h2
                    className='hoverText'
                    style={{
                        fontSize: '44px',
                        textDecoration: 'underline'
                    }}>
                    {hoveredItem}
                </h2>
            ) : (
                <h2 style={{
                    fontSize: '44px',
                    textDecoration: 'underline',
                }}>
                    See what the cards hold for you!</h2>
            )}
            <div>
                <ImageGrid onHoveredItemChange={handleHoveredItemChange} />
            </div>
            {hoveredItemText ? (
                <h2
                    className='hoverText'
                    style={{
                        fontSize: '28px',
                        width: '90vw'
                    }}>
                    {hoveredItemText}
                </h2>
            ) : (
                <h2 style={{
                    fontSize: '34px',
                    marginBottom: '10px',
                }}>
                    Discover diverse readings and tailored insights through various spreads!</h2>
            )}

               <AuthComponent />
        </div >
    );
};

export default PanelTwo;
