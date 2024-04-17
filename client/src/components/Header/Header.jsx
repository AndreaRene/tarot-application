import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import { FaUserCircle } from "react-icons/fa";


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
            <div className='account-circle'>
            <FaUserCircle />
            </div>
        </div>
    );
};

export default Header;
