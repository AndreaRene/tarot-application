import React from "react";
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';


const Header = () => {
    return (
        <div className='header-home' style={{ position: 'relative', zIndex: '4' }}>
            <div className='header-background'
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    zIndex: '0', 
                    width: '100%',
                    backgroundImage: `url('TarotHeader1.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Link to='/'>
                    <img
                        src='tarot_logo.png'
                        alt='Tarot Deck Logo'
                        style={{
                            width: '110px',
                            marginTop: '20px',
                            marginLeft: '20px',
                            marginBottom: '20px',
                            zIndex: '4'
                        }}
                    />
                </Link>
            </div>
            <Navbar style={{ zIndex: '3' }} />
        </div>
    );
};

export default Header;
