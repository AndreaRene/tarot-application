import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <footer className='footer text-center'>
                    <div>
                        <div className='footer-menu'>
                            <Link to='/About'>About</Link>
                            <Link to='/Contact'>Contact</Link>
                            <Link to='/Terms'>Terms of Use</Link>
                            <Link to='/Privacy'>Privacy Policy</Link>
                        </div>
                    </div>
        </footer>
    );
};

export default Footer;