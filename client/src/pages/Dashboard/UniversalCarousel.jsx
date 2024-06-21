import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const UniversalCarousel = ({ images }) => {
    return (
        <Splide
            options={{
                type: 'slide',
                perPage: 3,
                perMove: 1,
                gap: '0rem',
                pagination: false,
                arrows: true,
                focus: 'center',
            }}
        >
            {images.map((image, index) => (
                <SplideSlide key={index}>
                    <img src={image.src} alt={image.alt} className="carousel-items" />
                </SplideSlide>
            ))}
        </Splide>
    );
};

export default UniversalCarousel;
