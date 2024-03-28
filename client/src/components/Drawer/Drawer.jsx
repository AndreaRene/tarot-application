import React, { useState } from 'react';
import './Drawer.css';
import { Link } from 'react-router-dom';
import DashboardIcon from '../Hero/Assets/Images/Dashboard.png';
import CardsIcon from '../Hero/Assets/Images/Cards.png';
import HandsIcon from '../Hero/Assets/Images/Hands.png';
import JournalIcon from '../Hero/Assets/Images/Journal.png';
import LogoutIcon from '@mui/icons-material/Logout';

const MenuDrawer = ({ setIsLoggedIn, handleLogout}) => {
    const [collapsed, setCollapsed] = useState(false); // State to track collapse status

    const handleCollapseToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={`custom-drawer ${collapsed ? 'collapsed' : ''}`}>
            <div className='collapse-bar' onClick={handleCollapseToggle}></div>
            <Link className='links' to='/Dashboard'>
                <img src={DashboardIcon} alt='Dashboard Icon' />
                {collapsed ? '' : 'Dashboard'}
            </Link>
            <Link className='links' to='/Reading'>
                <img src={CardsIcon} alt='Tarot Reading Icon' />
                {collapsed ? '' : 'Tarot Reading'}
            </Link>
            <Link className='links' to='/Journal'>
                <img src={JournalIcon} alt='Tarot Journal Icon' />
                {collapsed ? '' : 'Tarot Journal'}
            </Link>
            <Link className='links' to='/Share'>
                <img src={HandsIcon} alt='Share Readings Icon' />
                {collapsed ? '' : 'Share Readings'}
            </Link>
            {collapsed ? (
                <button
                className='logout-button mb-5'
                onClick={handleLogout}
            >
                <LogoutIcon />
            </button>
            ): (
            <button
                className='logout-button mb-5'
                onClick={handleLogout}
            >
                <LogoutIcon />
                Logout
            </button>
            )}
        </div>
    );
};

export default MenuDrawer;
