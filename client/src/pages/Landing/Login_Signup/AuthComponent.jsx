import { AuthButtons } from './AuthButtons';
import LoginModal from './LoginModal';
import SignupModal from './SignUpModal';
import { useModal } from '../ModalContext';

const AuthComponent = () => {
    const { handleLoginOpen, handleSignUpOpen, loginOpen, handleLoginClose, signupOpen, handleSignUpClose } =
        useModal();

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
