import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import Header from '../../components/Header/Header';
import Drawer from '../../components/Drawer/Drawer';
import Footer from '../../components/Footer/Footer';
import '../../components/Footer/Footer.css';

const Contact = ({ isLoggedIn }) => {
    return (
        <div className='contact-container'>
            {isLoggedIn && (
                <>
                    <Header />
                    <div className='drawer-container'>
                        <Drawer />
                    </div>
                    <div>
                        <h1 className='contact'>Contact</h1>
                        <p className='contact-p'>Info coming soon! </p>
                    </div>
                </>
            )}
            {!isLoggedIn && (
                <>
                <div className='contact-logo'>
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
                                marginBottom: '5px',
                                zIndex: '3'
                            }}
                        />
                    </Link>
                </div>
                    <div>
                        <h1 className='contact'>Contact</h1>
                        <p className='contact-p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem culpa exercitationem inventore ex, aspernatur facilis voluptatibus? Nam alias voluptatibus ullam obcaecati quam, neque voluptatum aspernatur earum repellendus, impedit deserunt dolores.</p>
                    </div>
                    <div className='footer-container'>
                        <Footer />
                    </div>
                </>
            )}
        </div>
    );
};

export default Contact;
