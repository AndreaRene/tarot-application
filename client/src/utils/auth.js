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

export async function login(idToken) {
  localStorage.setItem('id_token', idToken);
  window.location.assign('/reading');
}

export function logout() {
  localStorage.removeItem('id_token');
  window.location.assign('/landing')
}
