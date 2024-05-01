import { useLocation } from 'react-router-dom';
import { useAuth } from '../../utils/auth/AuthContext';
import NavIcons from '../NavigationPane/NavigationIcons';
import NavLinks from '../NavigationPane/NavigationLinks';

const NavContainer = () => {
    const location = useLocation();
    const { isAuthenticated } = useAuth();
  
    const getNavComponent = () => {
      const commonNav = (
        <div style={{ display: 'flex', height: '100%' }}>
          <NavLinks />
          <NavIcons />
        </div>
      );
  
      // Mapping routes to components
      const routes = {

      };
  
      // Fallback for routes not explicitly defined
      return routes[location.pathname] || null;
    };
  
    const NavComponent = getNavComponent();
  
    return <div style={{ display: 'flex' }}>{NavComponent}</div>;
  };
  
  export default NavContainer;