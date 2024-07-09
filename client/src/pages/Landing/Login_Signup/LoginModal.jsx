import { useEffect } from 'react';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types'; // Import PropTypes
import './Modals.css';

const LoginModal = ({ open, handleClose }) => {
    // Function to handle escape key press
    const handleEscapeKey = (event) => {
        if (event.key === 'Escape') {
            console.log('Scroll detected');

            handleClose();
        }
    };

    // Effect to add event listeners when modal opens
    useEffect(() => {
        if (open) {
            document.addEventListener('keydown', handleEscapeKey);
        } else {
            document.removeEventListener('keydown', handleEscapeKey);
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [open]); // Only re-add effect if `open` changes

    const modalStyle = {
        display: open ? 'flex' : 'none',
        position: 'fixed',
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 5,
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    };
    const modalContentStyle = {
        borderRadius: '8px',
        position: 'relative',
        top: '20px',
        right: '20px'
    };
    return (
        <div
            className='modal'
            style={modalStyle}>
            <div
                className='modal-content'
                style={modalContentStyle}>
                <button
                    className='xButton'
                    onClick={handleClose}>
                    X
                </button>
                <LoginForm />
            </div>
        </div>
    );
};

LoginModal.propTypes = {
    open: PropTypes.bool.isRequired, // Validate open prop as a boolean (isRequired ensures the prop is provided)
    handleClose: PropTypes.func.isRequired // Validate handleClose prop as a function (isRequired ensures the prop is provided)
};

export default LoginModal;
