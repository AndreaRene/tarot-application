import { Link } from 'react-router-dom';
import './NavigationPane.css';
import { useAuth } from '../../utils/AuthContext';
import UserIcon from '../../assets/User.png';
import ReadingIcon from '../../assets/Reading.png';
import CardInfoIcon from '../../assets/CardInfo.png';
import CommunityIcon from '../../assets/Community.png';

const NavigationIcons = () => {
    const { logout } = useAuth();
    return (
        <nav className='nav-icons-container'>
            <div className='nav-div'>
                <Link
                    to='/dashboard'
                    className='icon-styling'

                >
                    {/* <img
                        src={UserIcon}
                        alt='Tarot Deck logo'
                        className='landing-logo'
                        style={{ margin: '1rem 0  0rem 0', width: '30px', height: 'auto' }}
                    /> */}
                    <i className='fa fa-home fa-lg'></i>
                </Link>
                <Link
                    to='/newReading'
                    className='icon-styling'
                    style={{ marginTop: '0rem' }}
                >
                    {/* <img
                        src={ReadingIcon}
                        alt='Tarot Deck logo'
                        className='landing-logo'
                        style={{ margin: '.1rem 0  0rem 0', width: '30px', height: 'auto' }}
                    /> */}
                    <i className='fas fa-book-open fa-lg'></i>
                </Link>
                <Link to="/cardDetails" className='icon-styling'
                    >
                    {/* <img
                        src={CardInfoIcon}
                        alt='Tarot Deck logo'
                        className='landing-logo'
                        style={{ margin: '.1rem 0  0rem 0', width: '30px', height: 'auto' }}
                    /> */}
                    <i className="fa fa-info-circle fa-lg"></i>
                </Link>
                <Link
                    to='/community'
                    className='icon-styling'
                    style={{ marginTop: '0rem' }}
                >
                    {/* <img
                        src={CommunityIcon}
                        alt='Tarot Deck logo'
                        className='landing-logo'
                        style={{ margin: '0rem 0  0.1rem 0', width: '30px', height: 'auto' }}
                    /> */}
                    <i className='fas fa-users fa-lg'></i>
                </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Link
                    to='/settings'
                    className='icon-styling'
                    style={{
                        marginBottom: '.5rem',
                    }}
                >
                    <i className='fas fa fa-cog fa-lg'></i>
                </Link>
                <Link
                    className='icon-styling'
                    onClick={() => logout()}
                    style={{
                        marginBottom: '1.7rem',
                    }}
                >
                    <i className='fas fa-sign-out-alt fa-lg'></i>
                </Link>
            </div>
        </nav>
    );
};

export default NavigationIcons;
