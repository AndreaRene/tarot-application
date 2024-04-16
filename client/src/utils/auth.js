// import { jwtDecode } from 'jwt-decode';

// class AuthService {
//     async LoggedIn() {
//         try {
//             const token = await this.getToken();
//             const expired = await this.isTokenExpired(token);
//             console.log('token inside LoggedIn():', token);
//             console.log('Expired inside LoggedIn():', expired);
//             return token && !expired;
//         } catch (error) {
//             console.error('Error retrieving token:', error);
//             return false; // Return false if there's an error retrieving the token
//         }
//     }

//     async isTokenExpired(token) {
//         try {
//             const decoded = jwtDecode(token);
//             if (decoded.exp < Date.now() / 1000) {
//                 localStorage.removeItem('id_token');
//                 return true;
//             }
//             return false;
//         } catch (error) {
//             console.error('Error decoding token:', error);
//             return true; // Return true to handle the error as if the token is expired
//         }
//     }

//     getToken() {
//         console.log('I am inside getToken');
//         try {
//             const token = localStorage.getItem('id_token');
//             console.log('Is token string', typeof token === 'string');
//             return token;
//         } catch (error) {
//             console.error('Error getting token:', error);
//         }
//     }

//     login(idToken) {
//         localStorage.setItem('id_token', idToken);
//         window.location.assign('reading');
//     }

//     logout() {
//         window.location.assign('landing');
//         localStorage.removeItem('id_token');
//     }
// }

// // const authService = new AuthService();
// export default new AuthService();

// import { useState, useEffect } from 'react';
// import { jwtDecode } from 'jwt-decode';

// class AuthService {
//     constructor() {
//         this.state = {
//             isLoggedIn: false
//         };
//     }

//     componentDidMount() {
//         this.updateAuthStatus();
//     }

//     async updateAuthStatus() {
//         const loggedIn = await this.LoggedIn();
//         this.setState({ isLoggedIn: loggedIn });
//     }



//     async LoggedIn() {
//         try {
//             const token = await this.getToken();
//             const expired = await this.isTokenExpired(token);
//             console.log('token inside LoggedIn():', token);
//             console.log('Expired inside LoggedIn():', expired);
//             return token && !expired;
//         } catch (error) {
//             console.error('Error retrieving token:', error);
//             return false; // Return false if there's an error retrieving the token
//         }
//     }

//     async isTokenExpired(token) {
//         try {
//             const decoded = jwtDecode(token);
//             if (decoded.exp < Date.now() / 1000) {
//                 localStorage.removeItem('id_token');
//                 return true;
//             }
//             return false;
//         } catch (error) {
//             console.error('Error decoding token:', error);
//             return true; // Return true to handle the error as if the token is expired
//         }
//     }

//     getToken() {
//         console.log('I am inside getToken');
//         try {
//             const token = localStorage.getItem('id_token');
//             console.log('Is token string', typeof token === 'string');
//             return token;
//         } catch (error) {
//             console.error('Error getting token:', error);
//         }
//     }

//     login(idToken) {
//         localStorage.setItem('id_token', idToken);
//         window.location.assign('reading');
//     }

//     logout() {
//         window.location.assign('landing');
//         localStorage.removeItem('id_token');
//     }
// }

// // const authService = new AuthService();
// export default new AuthService();

import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const updateAuthStatus = async () => {
      const isLoggedIn = await checkLoggedIn();
      setLoggedIn(isLoggedIn);
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

  return { loggedIn };
};

