import { Modal } from '@mui/material';
import React from 'react';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types'; // Import PropTypes

const LoginModal = ({ open, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='login-modal-title'
            style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
            <div
                id='loginForm'
                style={{ padding: '50px', borderRadius: '8px' }}
            >
                <LoginForm />
            </div>
        </Modal>
    );
};

LoginModal.propTypes = {
    open: PropTypes.bool.isRequired, // Validate open prop as a boolean (isRequired ensures the prop is provided)
    handleClose: PropTypes.func.isRequired, // Validate handleClose prop as a function (isRequired ensures the prop is provided)
};

export default LoginModal;
