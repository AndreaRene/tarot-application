import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginModal from './Authentication/Login/LoginModal';
import SignupModal from './Authentication/SignUp/SignUpModal';
import AuthService from '../utils/auth';
import '../App.css';

const PrimarySearchAppBar = () => {
    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [toolbarMarginTop, setToolbarMarginTop] = useState('15px');

    useEffect(() => {
        const checkLoginStatus = async () => {
            const loggedIn = await AuthService.LoggedIn();
            setIsLoggedIn(loggedIn);
        };

        checkLoginStatus();
    }, []);

    useEffect(() => {
        const marginTop = isLoggedIn ? '40px' : '15px'; // Corrected typo in variable name
        setToolbarMarginTop(marginTop); // Corrected function name to setToolbarMarginTop
    }, [isLoggedIn]);

    const handleLoginOpen = () => setLoginOpen(true);
    const handleLoginClose = () => setLoginOpen(false);

    const handleSignupOpen = () => setSignupOpen(true);
    const handleSignupClose = () => setSignupOpen(false);

    const handleLogout = () => {
        AuthService.logout();
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
                <Toolbar
                    sx={{
                        justifyContent: isLoggedIn ? 'flex-end' : 'center',
                        marginTop: toolbarMarginTop // Use toolbarMarginTop state variable
                    }}
                >
                    <div className='nav-items-container'>
                        {isLoggedIn ? (
                            <>
                                <AccountCircleIcon sx={{ fontSize: 56, marginBottom: '35px' }} />
                                <button
                                    className='nav-button mb-5'
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    className='nav-button mb-5'
                                    onClick={handleLoginOpen}
                                >
                                    Login
                                </button>
                                <button
                                    className='nav-button mb-5'
                                    onClick={handleSignupOpen}
                                >
                                    Sign Up
                                </button>
                            </>
                        )}
                    </div>
                </Toolbar>
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
