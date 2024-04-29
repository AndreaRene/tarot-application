import React from 'react';
import { Link } from 'react-router-dom';
import './Terms.css';
import Header from '../../components/Header/Header'
import Drawer from '../../components/Drawer/Drawer';
import Footer from '../../components/Footer/Footer';
import TermsDescription from './OLDTermsDesc';
import '../../components/Footer/Footer.css';

const Terms = ({ isLoggedIn }) => {
    return (
        <div className='terms-container'>
            {isLoggedIn && (
                <>
                    <Header />
                    <div className='drawer-container'>
                        <Drawer />
                    </div>
                    <TermsDescription />
                </>
            )}
            {!isLoggedIn && (
                <>
                    <div className='terms-logo'>
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
                    <TermsDescription />
                    <div className='footer-container mt-5'>
                        <Footer />
                    </div>
                </>
            )}
        </div>

    );
};

export default Terms;