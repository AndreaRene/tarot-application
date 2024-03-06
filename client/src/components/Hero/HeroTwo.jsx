import React from 'react';
import { Container } from 'react-bootstrap';
import '../Hero/Hero.css';

const HeroSectionTwo = () => {
    return (
        <div className='hero-section-two'>
            <Container>
                        <div>
                            <h1
                                variant="h1"
                                className='home-font font-bold text-center'
                                sx={{
                                    fontSize: {
                                        xs: '3rem',
                                        sm: '4rem',
                                        md: '5rem',
                                        lg: '6rem'
                                    }
                                    
                                }}
                            >
                                Embark on a Journey of Reflection!</h1>
                        </div>
            </Container>
        </div>
    );
};

export default HeroSectionTwo;
