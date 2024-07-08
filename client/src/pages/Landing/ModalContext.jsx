// ModalContext.js
import { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);

    const handleLoginOpen = () => setLoginOpen(true);
    const handleLoginClose = () => setLoginOpen(false);

    const handleSignUpOpen = () => setSignupOpen(true);
    const handleSignUpClose = () => setSignupOpen(false);

    return (
        <ModalContext.Provider
            value={{
                loginOpen,
                handleLoginOpen,
                handleLoginClose,
                signupOpen,
                handleSignUpOpen,
                handleSignUpClose
            }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
