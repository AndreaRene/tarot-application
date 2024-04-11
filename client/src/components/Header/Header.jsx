import React from "react";
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import '../Header/Header.css';

const Header = () => {
    return (
        <div className='header-home'>
            <div className='header-background'>
                <Link to='/Landing'>
                    <img
                        src='tarot_logo.png'
                        alt='Tarot Deck Logo'
                        style={{
                            width: '110px',
                            marginTop: '20px',
                            marginLeft: '20px',
                            marginBottom: '20px',
                            zIndex: '1'
                        }}
                    />
                </Link>
            </div>
            <Navbar style={{ zIndex: '3' }} />
        </div>
    );
};

export default Header;