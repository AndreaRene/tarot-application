import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LoginModal from './Authentication/Login/LoginModal';
import SignupModal from './Authentication/SignUp/SignUpModal';
import '../App.css';

const PrimarySearchAppBar = () => {
    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);

    const handleLoginOpen = () => setLoginOpen(true);
    const handleLoginClose = () => setLoginOpen(false);

    const handleSignupOpen = () => setSignupOpen(true);
    const handleSignupClose = () => setSignupOpen(false);

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
                <Toolbar sx={{ justifyContent: 'center' }}>
                    <div className='nav-items-container'>
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
                    </div>
                </Toolbar>
            </AppBar>
            <LoginModal open={loginOpen} handleClose={handleLoginClose} />
            <SignupModal open={signupOpen} handleClose={handleSignupClose} />
        </Box>
    );
};

export default PrimarySearchAppBar;