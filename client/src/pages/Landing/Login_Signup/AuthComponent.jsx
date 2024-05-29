import React, { useState } from 'react';
import { AuthButtons } from './AuthButtons';
import LoginModal from './LoginModal';
import SignupModal from './SignUpModal';

const AuthComponent = ({ onCloseModal }) => {
    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);

    const handleLoginOpen = () => setLoginOpen(true);
    const handleLoginClose = () => {
        setLoginOpen(false);
        onCloseModal();
    };

    const handleSignupOpen = () => setSignupOpen(true);
    const handleSignupClose = () => {
        setSignupOpen(false);
        onCloseModal();
    };

    return (
        <>
            <AuthButtons
                handleLoginOpen={handleLoginOpen}
                handleSignupOpen={handleSignupOpen}
            />
            <LoginModal open={loginOpen} handleClose={handleLoginClose} />
            <SignupModal open={signupOpen} handleClose={handleSignupClose} />
        </>
    );
};

export default AuthComponent;