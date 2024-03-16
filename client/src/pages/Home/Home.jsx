import React, { useState } from 'react';
import './Home.css';
import '../../components/Hero/Assets/Hero.css';
import HeroSectionOne from '../../components/Hero/HeroOne/HeroOne';
import HeroSectionTwo from '../../components/Hero/HeroTwo/HeroTwo';
import HeroSectionThree from '../../components/Hero/HeroThree/HeroThree';
import HeroSectionFour from '../../components/Hero/HeroFour';
import Footer from '../../components/Footer';

const Home = () => {
    const [selectedDescription, setSelectedDescription] = useState('');

    const handleDotClick = (description) => {
        setSelectedDescription(description);
    }

    return (
        <div className='home-page'>
            <section className="hero-container">
                <HeroSectionOne />
            </section>
            <section className='hero-section-two'>
                <HeroSectionTwo />
            </section>
            <section className="hero-section-three">
                <HeroSectionThree
                    handleDotClick={handleDotClick}
                    selectedDescription={selectedDescription}
                />
            </section>
            <section className='hero-section-four'>
                <HeroSectionFour
                    selectedDescription={selectedDescription}
                />
            </section>
            <div className='footer-container'>
                <Footer />
            </div>
        </div>
    );
};

export default Home;