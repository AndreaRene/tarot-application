import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../HeroOne/HeroOne.css';
import { Link } from 'react-router-dom';
import LoginModal from '../../Authentication/Login/LoginModal';
import SignupModal from '../../Authentication/SignUp/SignUpModal';
import { useAuth } from '../../../utils/auth';
import '../../../App.css';
import '../../../index.css';

const HeroSectionOne = () => {
    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);
    const location = useLocation();
    const isLoggedIn = useAuth();

    const handleLoginOpen = () => setLoginOpen(true);
    const handleLoginClose = () => setLoginOpen(false);

    const handleSignupOpen = () => setSignupOpen(true);
    const handleSignupClose = () => setSignupOpen(false);

    const handleLogout = () => {
        useAuth.logout();
    };

    useEffect(() => {
        if (isLoggedIn.loggedIn) {
            setLoginOpen(false);
            setSignupOpen(false);
        }
    }, [isLoggedIn.loggedIn]);

    return (
        <div className='hero-section-one'>
            <div className='text-center mb-2 mt-4'>
                <div>
                    <Link
                        to='/'
                        style={{
                            position: 'relative',
                            zIndex: 3,
                        }}
                    >
                        <img
                            src='tarot_logo.png'
                            alt='Tarot Deck Logo'
                            style={{
                                width: '130px',
                                marginTop: '20px',
                                marginBottom: '30px',
                                zIndex: '3',
                            }}
                        />
                    </Link>
                </div>
                <img
                    src='/Up_moon.png'
                    alt='Moon decorative element'
                    className='moon-up img-fluid img-sm'
                />
                <h1 className='hero-one-font font-bold text-center mt-1 display-2 display-md-5 display-lg-6 mb-3'>
                    Embark on an Enlightening <br /> Journey with Tarot
                </h1>
                <img
                    src='/Down_moon.png'
                    alt='Moon decorative element'
                    className='mb-5 img-fluid img-sm'
                />
                <div className='nav-buttons-one'>
                    <button className='nav-button mb-5' onClick={handleLoginOpen}>
                        Login
                    </button>
                    <button className='nav-button mb-5' onClick={handleSignupOpen}>
                        Sign Up
                    </button>
                </div>

                <LoginModal open={loginOpen} handleClose={handleLoginClose} />
                <SignupModal open={signupOpen} handleClose={handleSignupClose} />
            </div>
        </div>
    );
};

export default HeroSectionOne;
