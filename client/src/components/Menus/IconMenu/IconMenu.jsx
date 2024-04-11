import React, { useState } from 'react';
import '../IconMenu/IconMenu.css';
import { Link, useLocation } from 'react-router-dom';
import DashboardIcon from '../../../components/Hero/Assets/Images/Dashboard.png';
import CardsIcon from '../../../components/Hero/Assets/Images/Cards.png';
import HandsIcon from '../../../components/Hero/Assets/Images/Hands.png';
import JournalIcon from '../../../components/Hero/Assets/Images/Journal.png';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const IconMenu = ({ setIsLoggedIn, handleLogout }) => {
    const [collapsed, setCollapsed] = useState(false); // State to track collapse status
    const location = useLocation();

    const handleCollapseToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className='icon-menu'>
            <Link
                className={`links ${location.pathname === '/Dashboard' ? 'active-link' : ''}`}
                to='/Dashboard'
            >
                <img src={DashboardIcon} alt='Dashboard Icon' />
            </Link>
            <Link
                className={`links ${location.pathname === '/Reading' ? 'active-link' : ''}`}
                to='/Reading'
            >
                <img src={CardsIcon} alt='Reading Icon' />
            </Link>
            <Link
                className={`links ${location.pathname === '/Journal' ? 'active-link' : ''}`}
                to='/Journal'
            >
                <img src={JournalIcon} alt='Tarot Journal Icon' />
            </Link>
            <Link
                className={`links ${location.pathname === '/Share' ? 'active-link' : ''}`}
                to='/Share'
            >
                <img src={HandsIcon} alt='Share Readings Icon' />
            </Link>
            <button className='logout-button mb-5' onClick={handleLogout}>
                <LogoutIcon />
                Logout
            </button>
        </div>

    );
};

export default IconMenu;
