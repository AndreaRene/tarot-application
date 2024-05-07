import { Link } from 'react-router-dom';
import './NavigationPane.css';
import { useAuth } from '../../utils/AuthContext';

const NavigationLinks = () => {
    const { logout } = useAuth();
    return (
        <nav className='nav-link-container'>
            <section>
                <ul className='links-ul'>
                    <li className='links-li'>
                        <Link className='nav-link-font' to='/dashboard'>
                            Dashboard
                        </Link>
                    </li>
                    <li className='links-li'>
                        <Link className='nav-link-font' to='/newreading'>
                            New Reading
                        </Link>
                    </li>
                    {/* <li className='links-li'>
                        <Link className='nav-link-font' to='/settings'>
                            settings
                        </Link>
                    </li> */}
                    <li className='links-li'>
                        <Link className='nav-link-font' to='/community'>
                            Community
                        </Link>
                    </li>
                </ul>
                <hr />
                <ul className='links-ul'>
                    <li className='links-li'>
                        <Link className='nav-link-font' to='/browseSpreads'>
                            Browse Spreads
                        </Link>
                    </li>
                    <li className='links-li'>
                        <Link className='nav-link-font' to='/browseDecks'>
                            Browse Decks
                        </Link>
                    </li>
                    <li className='links-li'>
                        <Link className='nav-link-font' to='/appShop'>
                            App Shop
                        </Link>
                    </li>
                </ul>
                <hr />
                <ul className='links-ul'>
                    <li className='links-li'>
                        <Link className='nav-link-font' to='/aboutUs'>
                            Meet the Team
                        </Link>
                    </li>
                    <li className='links-li'>
                        <Link className='nav-link-font' to='/faqs'>
                            FAQs
                        </Link>
                    </li>
                    <li className='links-li'>
                        <Link className='nav-link-font' to='/contactUs'>
                            Contact Us
                        </Link>
                    </li>
                    <li className='links-li'>
                        <Link className='nav-link-font' to='/terms'>
                            Terms
                        </Link>
                    </li>
                    <li className='links-li'>
                        <Link className='nav-link-font' to='/privacy'>
                            Privacy
                        </Link>
                    </li>
                </ul>
                <hr />
            </section>
            <Link
                className='button link-logout'
                onClick={() => logout()}
                style={{
                    textDecoration: 'none',
                    padding: '10px',
                    width: '100px',
                    marginBottom: '1rem',
                }}
            >
                Logout
            </Link>
        </nav>
    );
};

export default NavigationLinks;
