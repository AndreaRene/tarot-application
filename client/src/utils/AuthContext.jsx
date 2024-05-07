import { useState, useEffect, createContext, useContext } from 'react';
// import { jwtDecode } from 'jwt-decode';
import PropTypes from 'prop-types';
// import { redirect } from 'react-router-dom';

const AuthContext = createContext({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
    login: () => {},
    logout: () => {},
});

console.log(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    // let Authenticated;
    // console.log(Authenticated);

    // const isAuthenticated = (value) => {
    //     console.log('I am inside isAuthenticated', value);
    //     Authenticated = value;
    // };

    const login = (idToken) => {
        // const idToken = getToken();
        localStorage.setItem('id_token', idToken);
        console.log('I am inside login');
        // setIsAuthenticated(true);
        window.location.assign('/dashboard');
    };

    const logout = () => {
        localStorage.removeItem('id_token');
        window.location.assign('/');
        // setIsAuthenticated(false);
    };

    // FInd location for V
    // const expired = await isTokenExpired(token);

    const checkLoggedIn = async () => {
        try {
            const token = await getToken();
            console.log('token inside isLoggedIn:', token);
            if (token) {
                console.log('token is there');
                setIsAuthenticated(true);
                return true;
            } else {
                console.log('returning false');
                setIsAuthenticated(false);
                return false;
            }
        } catch (error) {
            console.error('Error retrieving token:', error);
            return false;
        }
    };

    useEffect(() => {
        console.log('I am inside useEffect');
        console.log('console log checkedloggedin', checkLoggedIn());
        const updateAuthStatus = async () => {
            const isLoggedIn = await checkLoggedIn();
            console.log(isLoggedIn);
            setIsAuthenticated(isLoggedIn);
            setIsLoading(false);
        };
        updateAuthStatus();
    }, []);

    // const isTokenExpired = async (token) => {
    //     try {
    //         const decoded = jwtDecode(token);
    //         if (decoded.exp < Date.now() / 1000) {
    //             localStorage.removeItem('id_token');
    //             return true;
    //         }
    //         return false;
    //     } catch (error) {
    //         console.error('Error decoding token:', error);
    //         return true;
    //     }
    // };

    const getToken = () => {
        console.log('I am inside getToken');
        try {
            const token = localStorage.getItem('id_token');
            // console.log('Is token string', typeof token === 'string');
            return token;
        } catch (error) {
            console.error('Error getting token:', error);
        }
    };

    const value = {
        isAuthenticated,
        login,
        logout,
    };

    console.log(value);

    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <AuthContext.Provider value={value}>
                    {children}
                </AuthContext.Provider>
            )}
        </>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);

// export const login = (idToken) => {
//     localStorage.setItem('id_token', idToken);
//     window.location.assign('/dashboard');
// };

// export const logout = () => {
//     localStorage.removeItem('id_token');
//     window.location.assign('/');
// };
