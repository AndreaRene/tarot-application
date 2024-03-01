import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginModal from '../components/Authentication/LoginModal';
// import SignupModal from './SignupModal';

const PrimarySearchAppBar = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  // const [signupOpen, setSignupOpen] = useState(false);

  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  // const handleSignupOpen = () => setSignupOpen(true);
  // const handleSignupClose = () => setSignupOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', width: '100vw', boxShadow: 'none', borderBottom: 'none' }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            <Link to='/'>
              <img src="Crystals_wh.png" alt="Logo" style={{ width: '80px', marginRight: '20px', marginTop: '20px' }} />
            </Link>
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" onClick={handleLoginOpen}  style={{ fontFamily: 'Amarante-Regular', fontWeight: 'bolder', fontSize: '20px' }} >Login</Button>
            {/* <Button color="inherit" onClick={handleSignupOpen}>Sign Up</Button> */}
          </Box>
        </Toolbar>
      </AppBar>
      <LoginModal open={loginOpen} handleClose={handleLoginClose} />
      {/* <SignupModal open={signupOpen} handleClose={handleSignupClose} /> */}
    </Box>
  );
};

export default PrimarySearchAppBar;
