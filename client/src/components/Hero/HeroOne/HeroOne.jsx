import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './HeroOne.css';
import { Link } from 'react-router-dom';
import LoginModal from '../../Authentication/Login/LoginModal';
import SignupModal from '../../Authentication/SignUp/SignUpModal';
import AuthService from '../../../utils/auth';
import Drawer from '../../Menus/FullMenu'; // Import Drawer component
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../../../App.css';
import '../../../index.css';

const HeroSectionOne = () => {
    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const checkLoginStatus = async () => {
            const loggedIn = await AuthService.LoggedIn();
            setIsLoggedIn(loggedIn);
        };

        checkLoginStatus();
    }, []);

    const handleLoginOpen = () => setLoginOpen(true);
    const handleLoginClose = () => setLoginOpen(false);

    const handleSignupOpen = () => setSignupOpen(true);
    const handleSignupClose = () => setSignupOpen(false);

    const handleLogout = () => {
        AuthService.logout();
        setIsLoggedIn(false);
    }

    const showDrawer = ['/Home', '/Dashboard', '/Share', '/Reading', '/Journal', '/Profile', '/Community', '/Spreads', '/Decks', '/Shop', '/Faq', '/Contact', '/Legal', '/About'].includes(location.pathname);

    return (
        <div className='hero-section-one'>
            <div className='text-center mb-2 mt-4'>
                <div>
                    <Link to='/'
                        style={{
                            position: 'relative',
                            zIndex: 3
                        }}
                    >
                        <img
                            src='tarot_logo.png'
                            alt='Tarot Deck Logo'
                            style={{
                                width: '130px',
                                marginTop: '20px',
                                marginBottom: '30px',
                                zIndex: '3'
                            }}
                        />
                    </Link>
                </div>
                <img
                    src='/Up_moon.png'
                    alt='Moon decorative element'
                    className='moon-up img-fluid img-sm'
                />
                <h1
                    className='hero-one-font font-bold text-center mt-1 display-2 display-md-5 display-lg-6 mb-3'
                >
                    Embark on an Enlightening <br /> Journey with Tarot
                </h1>
                <img
                    src='/Down_moon.png'
                    alt='Moon decorative element'
                    className='mb-5 img-fluid img-sm'
                />
                <div className='nav-buttons-one'>
                    {isLoggedIn ? (
                        <>
                            <AccountCircleIcon sx={{ fontSize: 56, marginBottom: '35px' }} />
                        </>
                    ) : (
                        <>
                            <button
                                className='nav-button mb-5'
                                onClick={handleLoginOpen}
                            >
                                Login
                            </button>
                            <button
                                className='nav-button mb-5'
                                onClick={handleSignupOpen}
                            >
                                Sign Up
                            </button>
                        </>
                    )}
                </div>
                <LoginModal
                    open={loginOpen}
                    handleClose={handleLoginClose}
                />
                <SignupModal
                    open={signupOpen}
                    handleClose={handleSignupClose}
                />
                {showDrawer && <Drawer isLoggedIn={isLoggedIn} handleLogout={handleLogout} />}
            </div>
        </div>
    );
};

export default HeroSectionOne;