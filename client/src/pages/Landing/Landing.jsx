import React, { useState } from 'react';
import Carousel from './PanelCarousel';

const Landing = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
            <Carousel />
        </div>
    )
};

export default Landing;