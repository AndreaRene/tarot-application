import { useState, useEffect, createContext, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';
import PropTypes from 'prop-types';
// import { redirect } from 'react-router-dom';

const AuthContext = createContext({
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const updateAuthStatus = async () => {
            const isLoggedIn = await checkLoggedIn();
            setIsAuthenticated(isLoggedIn);
        };
        updateAuthStatus();
    }, []);

    const checkLoggedIn = async () => {
        try {
            const token = await getToken();
            const expired = await isTokenExpired(token);
            console.log('token inside isLoggedIn:', token);
            console.log('Expired inside isLoggedIn:', expired);
            return token && !expired;
        } catch (error) {
            console.error('Error retrieving token:', error);
            return false;
        }
    };

    const isTokenExpired = async (token) => {
        try {
            const decoded = jwtDecode(token);
            if (decoded.exp < Date.now() / 1000) {
                localStorage.removeItem('id_token');
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error decoding token:', error);
            return true;
        }
    };

    const getToken = () => {
        console.log('I am inside getToken');
        try {
            const token = localStorage.getItem('id_token');
            console.log('Is token string', typeof token === 'string');
            return token;
        } catch (error) {
            console.error('Error getting token:', error);
        }
    };

    // const login = async (token) => {
    //     localStorage.setItem('id_token', token);
    //     // redirect('/dashboard');
    //     window.location.assign('/dashboard');
    // };

    // const logout = () => {
    //     localStorage.removeItem('id_token');
    //     window.location.assign('/');
    // };

    const value = {
        isAuthenticated,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const login = (idToken) => {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/reading');
};

export const logout = () => {
    localStorage.removeItem('id_token');
    window.location.assign('/');
};
