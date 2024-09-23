import './Dashboard.css';
import React, { useState } from 'react';
import { useTheme } from '../Settings/ThemeContext';

const UniversalCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { theme } = useTheme();

    const goToSlide = (index) => {
        // Ensure index is within bounds
        const newIndex = (index + images.length) % images.length;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className='carousel-container'>
            <button
                className='carousel-button prev'
                onClick={prevSlide}>
                ❮
            </button>
            <div className='carousel-slides'>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className='carousel-slide'
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`
                        }}>
                        <img
                            src={image.src}
                            alt={image.alt}
                            className='carousel-image'
                            style={{
                                border: `3px solid ${theme.carouselImageBorder}` // Apply border using theme
                            }}
                            onClick={() => goToSlide(index)}
                        />
                    </div>
                ))}
            </div>
            <button
                className='carousel-button next'
                onClick={nextSlide}>
                ❯
            </button>
            <div className='carousel-dots'>
                {images.map((_, index) => (
                    <span
                        key={index}
                        className='dot'
                        style={{
                            backgroundColor: index === currentIndex ? theme.carouselImageBorder : 'transparent', // Apply theme color for active dot
                            border: `1px solid ${theme.carouselImageBorder}` // Ensure dots have a border color from the theme
                        }}

                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default UniversalCarousel;
