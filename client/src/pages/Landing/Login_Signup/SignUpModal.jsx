import SignUpForm from './SignUpForm';
import PropTypes from 'prop-types'; // Import PropTypes
import './Modals.css';

const SignupModal = ({ open, handleClose }) => {
    const modalStyle = {
        display: open ? 'flex' : 'none',
        position: 'fixed',
        top: 0,
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
                <SignUpForm />
            </div>
        </div>
    );
};

SignupModal.propTypes = {
    open: PropTypes.bool.isRequired, // Validate open prop as a boolean (isRequired ensures the prop is provided)
    handleClose: PropTypes.func.isRequired // Validate handleClose prop as a function (isRequired ensures the prop is provided)
};

export default SignupModal;
