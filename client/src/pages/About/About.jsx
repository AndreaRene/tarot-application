import React from 'react';
import { Link } from 'react-router-dom';
import '../About/About.css';
import Header from '../../components/Header/Header';
import Drawer from '../../components/Drawer/Drawer';
import Footer from '../../components/Footer/Footer';
import '../../components/Footer/Footer.css';

const About = ({ isLoggedIn }) => {
    return (
        <div className='home-container'>
            {isLoggedIn && (
                <>
                    <Header />
                    <div className='drawer-container'>
                        <Drawer />
                    </div>
                    <div>
                        <h1 className='meet'>Meet the Team</h1>
                        <p className='meet-p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus explicabo cum optio. Tempora sapiente voluptatibus numquam aperiam sed aut incidunt culpa exercitationem, consequatur suscipit alias hic quibusdam consequuntur delectus? </p>
                    </div>
                </>
            )}
            {!isLoggedIn && (
                <>
                    <div className='meet-logo'>
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
                        <h1 className='meet'>Meet the Team</h1>
                        <p className='meet-p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus explicabo cum optio. Tempora sapiente voluptatibus numquam aperiam sed aut incidunt culpa exercitationem, consequatur suscipit alias hic quibusdam consequuntur delectus? </p>
                    </div>
                    <div className='footer-container'>
                        <Footer />
                    </div>
                </>
            )}
        </div>
    );
};

export default About;