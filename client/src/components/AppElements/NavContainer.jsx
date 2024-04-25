import { useLocation } from 'react-router-dom';
import NavLinks from '../NavigationPane/NavigationIcons';
import NavIcons from '../NavigationPane/NaviationLinks';

const routeToNavComponents = {
    '/dashboard': () => (
        <div style={ { display: 'flex', height: '100%' } }>
            <NavLinks />
            <NavIcons />
        </div>
    ),
    '/profile': () => (
        <div style={ { display: 'flex', height: '100%' } }>
            <NavLinks />
            <NavIcons />
        </div>
    ),
    '/newreading': NavIcons,
    '/community': () => (
        <div style={ { display: 'flex', height: '100%' } }>
            <NavLinks />
            <NavIcons />
        </div>
    ),
    '/browseSpreads': () => (
        <div style={ { display: 'flex', height: '100%' } }>
            <NavLinks />
            <NavIcons />
        </div>
    ),
    '/browseDecks': () => (
        <div style={ { display: 'flex', height: '100%' } }>
            <NavLinks />
            <NavIcons />
        </div>
    ),
    '/appShop': () => (
        <div style={ { display: 'flex', height: '100%' } }>
            <NavLinks />
            <NavIcons />
        </div>
    )
};

const NavContainer = () => {
    const location = useLocation();
    const NavComponents = routeToNavComponents[location.pathname];

    return <div style={ { display: 'flex' } }>{ NavComponents && <NavComponents /> }</div>;
};

export default NavContainer;
