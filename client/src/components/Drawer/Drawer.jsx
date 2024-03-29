import React, { useState } from 'react';
import './Drawer.css';
import { Link, useLocation } from 'react-router-dom';
import DashboardIcon from '../Hero/Assets/Images/Dashboard.png';
import CardsIcon from '../Hero/Assets/Images/Cards.png';
import HandsIcon from '../Hero/Assets/Images/Hands.png';
import JournalIcon from '../Hero/Assets/Images/Journal.png';
import LogoutIcon from '@mui/icons-material/Logout';

const MenuDrawer = ({ setIsLoggedIn, handleLogout }) => {
    const [collapsed, setCollapsed] = useState(false); // State to track collapse status
    const location = useLocation();

    const handleCollapseToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={`custom-drawer ${collapsed ? 'collapsed' : ''}`}>
            <div className='hamburger-menu' onClick={handleCollapseToggle}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <div className='collapse-bar'></div>
            <Link className={`linkOne ${collapsed ? 'collapsed' : ''}${location.pathname === '/Dashboard' ? 'active-link' : ''}`} to='/Dashboard'>
                {collapsed ? (
                    <img src={DashboardIcon} alt='Dashboard Icon' />
                ) : (
                    'Dashboard'
                )}
            </Link>
            <Link className={`links ${location.pathname === '/Reading' ? 'active-link' : ''}`} to='/Reading'>
                {collapsed ? (
                    <img src={CardsIcon} alt='Reading Icon' />
                ) : (
                    'Tarot Reading'
                )}
            </Link>
            <Link className={`links ${location.pathname === '/Journal' ? 'active-link' : ''}`} to='/Journal'>
                {collapsed ? (
                    <img src={JournalIcon} alt='Tarot Journal Icon' />
                ) : (
                    'Tarot Journal'
                )}
            </Link>
            <Link className={`links ${location.pathname === '/Share' ? 'active-link' : ''}`} to='/Share'>
                {collapsed ? (
                    <img src={HandsIcon} alt='Share Readings Icon' />
                ) : (
                    'Share Readings'
                )}
            </Link>

            {!collapsed && (
                <div className='horizontal-divider'></div>
            )}
            <Link className={`links mt-4 ${location.pathname === '/Profile' ? 'active-link' : ''}`} to='/Profile'>
                {collapsed ? (
                    <span></span>
                ) : (
                    'Your Profile'
                )}
            </Link>
            <Link className={`links ${location.pathname === '/Settings' ? 'active-link' : ''}`} to='/Settings'>
                {collapsed ? (
                    <span></span>
                ) : (
                    'Settings'
                )}
            </Link>
            <Link className={`links ${location.pathname === '/Faq' ? 'active-link' : ''}`} to='/Faq'>
                {collapsed ? (
                    <span></span>
                ) : (
                    'FAQs'
                )}
            </Link>
            <Link className={`links ${location.pathname === '/Support' ? 'active-link' : ''}`} to='/Support'>
                {collapsed ? (
                    <span></span>
                ) : (
                    'Support'
                )}
            </Link>
            {collapsed ? (
                <button className='logout-button mb-5' onClick={handleLogout}>
                    <LogoutIcon />
                </button>
            ) : (
                <button className='logout-button mb-5' onClick={handleLogout}>
                    <LogoutIcon />
                    Logout
                </button>
            )}
        </div>
    );
};

export default MenuDrawer;
