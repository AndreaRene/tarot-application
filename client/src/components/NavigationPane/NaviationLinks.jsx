import { Link } from 'react-router-dom';
import './NavigationPane.css';
import { useAuth } from '../../utils/AuthContext';
import { useTheme} from '../../pages/Settings/ThemeContext';

const NavigationLinks = () => {
    const { logout } = useAuth();
    const { theme } = useTheme();
    return (
        <nav className='nav-link-container'
        style={{ backgroundColor: theme.panelColor }}>
            <section>
                <ul className='links-ul'>
                    <li className='links-li'>
                        <Link
                            className='nav-link-font'
                            to='/dashboard'
                            style={{
                                color: theme.userTextColor, // Dynamic text color
                                textShadow: `1px 1px 1px ${theme.h2TextShadow}` // Dynamic text shadow
                            }}>
                            Dashboard
                        </Link>
                    </li>
                    <li className='links-li'>
                        <Link
                            className='nav-link-font'
                            to='/newReading'
                            style={{
                                color: theme.userTextColor, // Dynamic text color
                                textShadow: `1px 1px 1px ${theme.h2TextShadow}` // Dynamic text shadow
                            }}>
                            New Reading
                        </Link>
                    </li>
                    <li className='links-li'>
                        <Link
                            className='nav-link-font'
                            to='/cardDetails'
                            style={{
                                color: theme.userTextColor, // Dynamic text color
                                textShadow: `1px 1px 1px ${theme.h2TextShadow}` // Dynamic text shadow
                            }}>
                            Card Info
                        </Link>
                    </li>
                    <li className='links-li'>
                        <Link
                            className='nav-link-font'
                            to='/community'
                            style={{
                                color: theme.userTextColor, // Dynamic text color
                                textShadow: `1px 1px 1px ${theme.h2TextShadow}` // Dynamic text shadow
                            }}>
                            Community
                        </Link>
                    </li>
                </ul>
                <hr />
                <ul className='links-ul'>
                    <li className='links-li'>
                        <Link
                            className='nav-link-font'
                            to='/browseSpreads'
                            style={{
                                color: theme.userTextColor, // Dynamic text color
                                textShadow: `1px 1px 1px${theme.h2TextShadow}` // Dynamic text shadow
                            }}>
                            Browse Spreads
                        </Link>
                    </li>
                    <li className='links-li'>
                        <Link
                            className='nav-link-font'
                            to='/browseDecks'
                            style={{
                                color: theme.userTextColor, // Dynamic text color
                                textShadow: `1px 1px 1px ${theme.h2TextShadow}` // Dynamic text shadow
                            }}>
                            Browse Decks
                        </Link>
                    </li>
                    <li className='links-li'>
                        <Link
                            className='nav-link-font'
                            to='/appShop'
                            style={{
                                color: theme.userTextColor, // Dynamic text color
                                textShadow: `1px 1px 1px ${theme.h2TextShadow}` // Dynamic text shadow
                            }}>
                            App Shop
                        </Link>
                    </li>
                </ul>
                <hr />
                <ul className='links-ul'>
                    <li className='links-li'>
                        <Link
                            className='nav-link-font'
                            to='/aboutUs'
                            style={{
                                color: theme.userTextColor, // Dynamic text color
                                textShadow: `1px 1px 1px ${theme.h2TextShadow}` // Dynamic text shadow
                            }}>
                            Meet the Team
                        </Link>
                    </li>
                    <li className='links-li'>
                        <Link
                            className='nav-link-font'
                            to='/faqs'
                            style={{
                                color: theme.userTextColor, // Dynamic text color
                                textShadow: `1px 1px 1px ${theme.h2TextShadow}` // Dynamic text shadow
                            }}>
                            FAQs
                        </Link>
                    </li>
                    <li className='links-li'>
                        <Link
                            className='nav-link-font'
                            to='/contactUs'
                            style={{
                                color: theme.userTextColor, // Dynamic text color
                                textShadow: `1px 1px 1px ${theme.h2TextShadow}` // Dynamic text shadow
                            }}>
                            Contact Us
                        </Link>
                    </li>
                    <li className='links-li'>
                        <Link
                            className='nav-link-font'
                            to='/terms'
                            style={{
                                color: theme.userTextColor, // Dynamic text color
                                textShadow: `1px 1px 1px ${theme.h2TextShadow}` // Dynamic text shadow
                            }}>
                            Terms
                        </Link>
                    </li>
                    <li className='links-li'>
                        <Link
                            className='nav-link-font'
                            to='/privacy'
                            style={{
                                color: theme.userTextColor, // Dynamic text color
                                textShadow: `1px 1px 1px ${theme.h2TextShadow}` // Dynamic text shadow
                            }}>
                            Privacy
                        </Link>
                    </li>
                </ul>
                <hr />
            </section>
        </nav>
    );
};

export default NavigationLinks;
