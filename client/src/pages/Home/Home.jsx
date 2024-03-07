import React from 'react';
import './Home.css';
import '../../components/Hero/Assets/Hero.css';
import HeroSectionOne from '../../components/Hero/HeroOne/HeroOne';
import HeroSectionTwo from '../../components/Hero/HeroTwo/HeroTwo';
import HeroSectionThree from '../../components/Hero/HeroThree';
import HeroSectionFour from '../../components/Hero/HeroFour';

const Home = () => {
    return (
    <div className='home-page'>
        <section className="hero-section-one">
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
        {/* <div className='overlay'></div> */}
    </div>
    );
};

export default Home;