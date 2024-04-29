import { useLocation } from 'react-router-dom';

import LargeFooter from '../FooterPane/LargeFooter';
// import SimpleFooter from '../FooterPane/SimpleFooter';

const routeToFooter = {
    '/aboutUs': LargeFooter,
    '/contactUs': LargeFooter,
    '/faqs': LargeFooter,
    '/terms': LargeFooter,
    '/privacy': LargeFooter,

};

const Footer = () => {
    const location = useLocation();
    const FooterComponent = routeToFooter[location.pathname];

    return <div style={ { display: 'flex', justifyContent: 'center' } }>{ FooterComponent && <FooterComponent /> }</div>;
};

export default Footer;
