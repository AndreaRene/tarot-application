import React from 'react';
import { Link } from 'react-router-dom';
import './Privacy.css';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import Drawer from '../../components/Drawer/Drawer';
import PrivacyDescription from './OLDPrivacyDesc';
import '../../components/Footer/Footer.css';

const Privacy = ({ isLoggedIn }) => {
    return (
        <div className='home-container'>
            {isLoggedIn && (
                <>
                    <Header />
                    <div className='drawer-container'>
                        <Drawer />
                    </div>
                        <PrivacyDescription />
                </>
            )}
            {!isLoggedIn && (
                <>
                    <div className='privacy-logo'>
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
                                    marginBottom: '25px',
                                    zIndex: '3'
                                }}
                            />
                        </Link>
                    </div>
                    <PrivacyDescription />
                    <div className='footer-container mt-5'>
                        <Footer />
                    </div>
                </>
            )}
        </div>
    );
};

export default Privacy;