import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const UniversalCarousel = ({ images }) => {
    return (
        <div>
            <Splide
                options={{
                    type: 'slide',
                    perPage: 4,
                    perMove: 1,
                    gap: '-2.5rem',
                    pagination: true,
                    arrows: false,
                    focus: 'center'
                }}>
                {images.map((image, index) => (
                    <SplideSlide key={index}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className='carousel-items'
                        />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default UniversalCarousel;
