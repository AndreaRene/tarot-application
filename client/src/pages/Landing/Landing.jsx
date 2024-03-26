import React, { useState } from 'react';
import './Landing.css';
import '../../components/Hero/HeroOne/HeroOne.css';
import '../../components/Hero/HeroTwo/HeroTwo.css';
import '../../components/Hero/HeroThree/HeroThree.css';
import '../../components/Hero/HeroFour/HeroFour.css';
import '../../components/Footer/Footer.css';
import HeroSectionOne from '../../components/Hero/HeroOne/HeroOne';
import HeroSectionTwo from '../../components/Hero/HeroTwo/HeroTwo';
import HeroSectionThree from '../../components/Hero/HeroThree/HeroThree';
import HeroSectionFour from '../../components/Hero/HeroFour/HeroFour';
import Footer from '../../components/Footer/Footer';

const Landing = () => {
    const [selectedDescription, setSelectedDescription] = useState('');

    const handleDotClick = (description) => {
        setSelectedDescription(description);
    }

    return (
        <div className='landing-page'>
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

export default Landing;