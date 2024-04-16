import React from 'react';
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

const LandingLayout = () => {
    return (
        <div className='landing-layout'>
            <section className="hero-container">
                <HeroSectionOne />
            </section>
            <section className='hero-section-two'>
                <HeroSectionTwo />
            </section>
            <section className="hero-section-three">
                <HeroSectionThree />
            </section>
            <section className='hero-section-four'>
                <HeroSectionFour />
            </section>
                <Footer />
        </div>
    );
};

export default LandingLayout;