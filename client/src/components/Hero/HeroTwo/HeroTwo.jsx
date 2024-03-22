import React, { useEffect, useState } from 'react';
import '../Assets/Hero.css';


const HeroSectionTwo = () => {
    const [showDescription, setShowDescription] = useState(false);

    const handleImageClick = () => {
        setShowDescription(true);
    }
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('.table-container');
            if (section) {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (sectionTop < windowHeight / 2) {
                    setShouldAnimate(true);
                    window.removeEventListener('scroll', handleScroll);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className='heading-container'>
                <h2 className='hero-two-font'>
                    See what the cards hold for you!
                </h2>
            </div>
            <div className={`table-container ${shouldAnimate ? 'flow-in-animation' : ''}`}>
                <div>
                    <img src='/OneCard.png' alt='One Card Spread' onClick={handleImageClick}/>
                    <h2 className='spread-font'>Daily Focus</h2>
                    {showDescription && (
                        <p className='spread-desc'>Draw a single card each day to gain insight and guidance for the day ahead, offering a quick and focused practice of self-reflection.</p>
                    )}                
                    </div>
                <div>
                    <img src='/ThreeCards.png' alt='Three Card Spread' />
                    <h2 className='spread-font'>Three Card Spread</h2>
                    {showDescription && (
                    <p className='spread-desc'>Draw three tarot cards to explore past, present, and future influences or to gain insights into a specific situation, offering a comprehensive yet concise reading for deeper understanding and guidance.</p>
                    )}   
                </div>
                <div>
                    <img src='/SixCards.png' alt='Six Card Spread' />
                    <h2 className='spread-font'>Interview Spread</h2>
                    {showDescription && (
                    <p className='spread-desc'>Draw cards to establish a connection with a new deck, revealing its personality, strengths, and purpose, aiding in building a meaningful and intuitive bond between the reader and the cards.</p>
                    )}
                </div>
            </div>
            <div className='mx-5 mb-5'>
                <h2 className='hero-two-font'>Discover diverse readings and tailored insights for everyday and life's journey!</h2>
            </div>
        </div>
    );
};

export default HeroSectionTwo;
