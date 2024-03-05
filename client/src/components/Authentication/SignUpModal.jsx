import React, { useState } from 'react';
import { Modal } from '@mui/material';
import SignUpForm from './SignUpForm';
import Profile from '../../pages/Profile';
import PropTypes from 'prop-types'; // Import PropTypes
import CloseButton from 'react-bootstrap/CloseButton';

const SignupModal = ({ open, handleClose }) => {
    const [signedUpUser, setSignedUpUser] = useState(null);

    const handleSignupSuccess = () => {
        setSignedUpUser(Auth.getProfile().data);
        handleClose();
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='signup-modal-title'
            style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}
        >
            <div
                id='signupForm'
                style={{
                    padding: '50px',
                    borderRadius: '8px'
                }}
            >
                <CloseButton
                    onClick={handleClose}
                    style={{
                        padding: '5px',
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        color: 'white',
                        backgroundColor: 'rgb(170, 142, 80)'
                    }}
                />
                {signedUpUser ? (
                    <Profile user={signedUpUser} />
                ) : (
                    <SignUpForm onSignupSuccess={handleSignupSuccess} />
                )}
            </div>
        </Modal>
    );
};

SignupModal.propTypes = {
    open: PropTypes.bool.isRequired, // Validate open prop as a boolean (isRequired ensures the prop is provided)
    handleClose: PropTypes.func.isRequired, // Validate handleClose prop as a function (isRequired ensures the prop is provided)
};

export default SignupModal;
