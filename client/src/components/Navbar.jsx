import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import LoginModal from './Authentication/Login/LoginModal';
import SignupModal from './Authentication/SignUp/SignUpModal';
import { useAuth } from '../utils/auth';
import '../App.css';

const PrimarySearchAppBar = () => {
    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const checkLoginStatus = async () => {
            const loggedIn = await useAuth.LoggedIn();
            setIsLoggedIn(loggedIn);
        };

        checkLoginStatus();
    }, []);

  

    const handleLoginOpen = () => setLoginOpen(true);
    const handleLoginClose = () => setLoginOpen(false);

    const handleSignupOpen = () => setSignupOpen(true);
    const handleSignupClose = () => setSignupOpen(false);

    const handleLogout = () => {
        useAuth.logout();
        setIsLoggedIn(false);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position='static'
                sx={{
                    backgroundColor: 'transparent',
                    width: '100vw',
                    boxShadow: 'none',
                    borderBottom: 'none',
                }}
            >
                
            </AppBar>
            <LoginModal
                open={loginOpen}
                handleClose={handleLoginClose}
            />
            <SignupModal
                open={signupOpen}
                handleClose={handleSignupClose}
            />
        </Box>
    );
};

export default PrimarySearchAppBar;
