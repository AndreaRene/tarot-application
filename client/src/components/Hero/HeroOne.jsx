import React from 'react';
import { Container } from 'react-bootstrap';
import '../Hero/Hero.css';

const HeroSectionOne = () => {
    return (
        <div className='hero-section-one'>
            <Container >
                <div>
                    <h1
                        className='hero-font font-bold text-center mt-5'
                    >
                        Embark on a Journey <br /> of Reflection!</h1>
                </div>
            </Container>
        </div>
    );
};

export default HeroSectionOne;