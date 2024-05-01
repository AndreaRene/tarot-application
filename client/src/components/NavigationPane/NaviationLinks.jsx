import { Link } from 'react-router-dom';
import { logout } from '../../utils/auth';

const NavigationLinks = () => {
    return (
        <nav
            style={{
                height: '100%',
                width: '150px',
                backgroundColor: 'grey',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <section>
                <ul
                    style={{
                        listStyleType: 'none',
                        padding: 0,
                        textAlign: 'center',
                    }}
                >
                    <li style={{ marginBottom: '0.4rem' }}>
                        <Link
                            to='/dashboard'
                            style={{
                                textDecoration: 'none',
                                color: 'darkslategrey',
                            }}
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li style={{ marginBottom: '0.4rem' }}>
                        <Link
                            to='/newreading'
                            style={{
                                textDecoration: 'none',
                                color: 'darkslategrey',
                            }}
                        >
                            New Reading
                        </Link>
                    </li>
                    <li style={{ marginBottom: '0.4rem' }}>
                        <Link
                            to='/profile'
                            style={{
                                textDecoration: 'none',
                                color: 'darkslategrey',
                            }}
                        >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/community'
                            style={{
                                textDecoration: 'none',
                                color: 'darkslategrey',
                            }}
                        >
                            Community
                        </Link>
                    </li>
                </ul>
                <hr />
                <ul
                    style={{
                        listStyleType: 'none',
                        padding: 0,
                        textAlign: 'center',
                    }}
                >
                    <li style={{ marginBottom: '0.4rem' }}>
                        <Link
                            to='/browseSpreads'
                            style={{
                                textDecoration: 'none',
                                color: 'darkslategrey',
                            }}
                        >
                            Browse Spreads
                        </Link>
                    </li>
                    <li style={{ marginBottom: '0.4rem' }}>
                        <Link
                            to='/browseDecks'
                            style={{
                                textDecoration: 'none',
                                color: 'darkslategrey',
                            }}
                        >
                            Browse Decks
                        </Link>
                    </li>
                    <li style={{ marginBottom: '0.4rem' }}>
                        <Link
                            to='/appShop'
                            style={{
                                textDecoration: 'none',
                                color: 'darkslategrey',
                            }}
                        >
                            App Shop
                        </Link>
                    </li>
                </ul>
                <hr />
                <ul
                    style={{
                        listStyleType: 'none',
                        padding: 0,
                        textAlign: 'center',
                    }}
                >
                    <li style={{ marginBottom: '0.4rem' }}>
                        <Link
                            to='/aboutUs'
                            style={{
                                textDecoration: 'none',
                                color: 'darkslategrey',
                            }}
                        >
                            Meet the Team
                        </Link>
                    </li>
                    <li style={{ marginBottom: '0.4rem' }}>
                        <Link
                            to='/faqs'
                            style={{
                                textDecoration: 'none',
                                color: 'darkslategrey',
                            }}
                        >
                            FAQs
                        </Link>
                    </li>
                    <li style={{ marginBottom: '0.4rem' }}>
                        <Link
                            to='/contactUs'
                            style={{
                                textDecoration: 'none',
                                color: 'darkslategrey',
                            }}
                        >
                            Contact Us
                        </Link>
                    </li>
                    <li style={{ marginBottom: '0.4rem' }}>
                        <Link
                            to='/terms'
                            style={{
                                textDecoration: 'none',
                                color: 'darkslategrey',
                            }}
                        >
                            Terms
                        </Link>
                    </li>
                    <li style={{ marginBottom: '0.4rem' }}>
                        <Link
                            to='/privacy'
                            style={{
                                textDecoration: 'none',
                                color: 'darkslategrey',
                            }}
                        >
                            Privacy
                        </Link>
                    </li>
                </ul>
                <hr />
            </section>
            <Link
                to='/'
                style={{
                    textDecoration: 'none',
                    color: 'darkslategrey',
                    backgroundColor: 'lightgrey',
                    padding: '10px',
                    textAlign: 'center',
                    borderRadius: '5px',
                    width: '100px',
                    marginBottom: '.5rem',
                }}
                onClick={logout}
            >
                Logout
            </Link>
        </nav>
    );
};

export default NavigationLinks;
