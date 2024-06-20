import React, { useState } from 'react';
import { AuthButtons } from './AuthButtons';
import LoginModal from './LoginModal';
import SignupModal from './SignUpModal';

const AuthComponent = () => {
    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);

    const handleLoginOpen = () => setLoginOpen(true);
    const handleLoginClose = () => setLoginOpen(false);

    const handleSignUpOpen = () => setSignupOpen(true);
    const handleSignUpClose = () => setSignupOpen(false);

    return (
        <>
            <AuthButtons
                handleLoginOpen={handleLoginOpen}
                handleSignUpOpen={handleSignUpOpen}
            />
            <LoginModal
                open={loginOpen}
                handleClose={handleLoginClose}
            />
            <SignupModal
                open={signupOpen}
                handleClose={handleSignUpClose}
            />
        </>
    );
};

export default AuthComponent;
