import React, { useState } from 'react';
import '../RightMenu/RightMenu.css';
import { Link, useLocation } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

const RightMenu = ({ setIsLoggedIn, handleLogout }) => {
    const location = useLocation();

    return (
        <div className="right-menu">
            <Link
                className={`links${location.pathname === '/Dashboard' ? 'active-link' : ''}`}
                to='/Dashboard'
            >
                Dashboard
            </Link>
            <Link
                className={`links${location.pathname === '/Reading' ? 'active-link' : ''}`}
                to='/Reading'
            >
                Tarot Readings
            </Link>
            <Link
                className={`links${location.pathname === '/Journal' ? 'active-link' : ''}`}
                to='/Journal'
            >
                Tarot Journal
            </Link>
            <Link
                className={`links${location.pathname === '/Share' ? 'active-link' : ''}`}
                to='/Share'
            >
                Share Readings
            </Link>
            <Link
                className={`links${location.pathname === '/Shop' ? 'active-link' : ''}`}
                to='/Shop'
            >
                App Store
            </Link>
            <div className='horizontal-divider'></div>
            <Link
                className={`links mt-1 ${location.pathname === '/Profile' ? 'active-link' : ''}`}
                to='/Profile'
            >
                Profile
            </Link>
            <Link
                className={`links mt-1 ${location.pathname === '/Community' ? 'active-link' : ''}`}
                to='/Community'
            >
                Community
            </Link>
            <Link
                className={`links mt-1 ${location.pathname === '/Spreads' ? 'active-link' : ''}`}
                to='/Spreads'
            >
                Browse Spreads
            </Link>
            <Link
                className={`links mt-1 ${location.pathname === '/Decks' ? 'active-link' : ''}`}
                to='/Decks'
            >
                Browse Decks
            </Link>

            <div className='horizontal-divider'></div>

            <Link
                className={`links mt-1 ${location.pathname === '/About' ? 'active-link' : ''}`}
                to='/About'
            >
                Meet The Team
            </Link>
            <Link
                className={`links mt-1 ${location.pathname === '/Faq' ? 'active-link' : ''}`}
                to='/Faq'
            >
                Faqs
            </Link>
            <Link
                className={`links mt-1 ${location.pathname === '/Contact' ? 'active-link' : ''}`}
                to='/Contact'
            >
                Contact
            </Link>
            <Link
                className={`links mt-1 mb-2 ${location.pathname === '/Legal' ? 'active-link' : ''}`}
                to='/Legal'
            >
                Legal
            </Link>

            <button className='logout-button mb-5' onClick={handleLogout}>
                <LogoutIcon />
                Logout
            </button>
        </div>

    );
};

export default RightMenu;
