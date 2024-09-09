import { Link } from 'react-router-dom';
import './NavigationPane.css';
import { useAuth } from '../../utils/AuthContext';
import DashboardIcon from '../../assets/Icons/Dashboard_Icon.png';
import ReadingIcon from '../../assets/Icons/Reading.png';

const NavigationIcons = () => {
    const { logout } = useAuth();
    return (
        <nav className='nav-icons-container'>
            <div className='nav-div'>
                <Link
                    to='/dashboard'
                    style={{ marginTop: '18px' }}>
                    <img
                        src={DashboardIcon}
                        alt='Dashboard Icon'
                        className='dash-icon'
                        style={{
                            marginBottom: '.2rem',
                            width: '30px',
                            height: 'auto',
                            textShadow: '1px 1px 1px #121212'
                        }}
                    />
                </Link>
                <Link to='/newReading'>
                    <img
                        src={ReadingIcon}
                        alt='New Reading Icon'
                        className='reading-icon'
                        style={{ marginBottom: '0rem', width: '32px', height: 'auto', textShadow: '1px 1px 1px #121212' }}
                    />
                </Link>
                <Link
                    to='/cardDetails'
                    className='icon-styling'>
                    <i
                        alt='Card Details Icon'
                        className='fas fa-circle-info fa-lg'
                        style={{ margin: '0rem 0  0rem 0', marginBottom: '1.5rem', width: '22px', height: 'auto' }}
                    />
                </Link>
                <Link
                    to='/community'
                    className='icon-styling'>
                    <i
                        alt='Community Icon'
                        className='fas fa-users fa-lg'
                        style={{ margin: '0rem 0  0rem 0', width: '25px', height: 'auto' }}
                    />
                </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '10px' }}>
                <Link
                    to='/settings'
                    className='icon-styling'
                    style={{
                        marginBottom: '.5rem',
                        fontSize: '22px'
                    }}>
                    <i className='fas fa fa-cog fa-lg'></i>
                </Link>
                <Link
                    className='icon-styling'
                    onClick={() => logout()}
                    style={{
                        marginBottom: '1.7rem',
                        fontSize: '22px'
                    }}>
                    <i className='fas fa-sign-out-alt fa-lg'></i>
                </Link>
            </div>
        </nav>
    );
};

export default NavigationIcons;
