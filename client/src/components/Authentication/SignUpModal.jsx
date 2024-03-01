import { Modal } from '@mui/material';
import SignUpForm from './SignUpForm';
import PropTypes from 'prop-types'; // Import PropTypes

const SignupModal = ({ open, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='signup-modal-title'
            style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
            <div
                id='signupForm'
                style={{ padding: '50px', borderRadius: '8px' }}
            >
                <SignUpForm />
            </div>
        </Modal>
    );
};

SignupModal.propTypes = {
    open: PropTypes.bool.isRequired, // Validate open prop as a boolean (isRequired ensures the prop is provided)
    handleClose: PropTypes.func.isRequired, // Validate handleClose prop as a function (isRequired ensures the prop is provided)
};

export default SignupModal;
