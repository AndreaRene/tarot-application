import { Link } from 'react-router-dom';
import './NavigationPane.css';
import { useAuth } from '../../utils/AuthContext';

const NavigationIcons = () => {
    const { logout } = useAuth();
    return (
        <nav className='nav-icons-container'>
            <div className='nav-div'>
                <Link
                    to='/dashboard'
                    className='icon-styling'
                    style={{ margin: '1rem 0  0.2rem 0' }}
                >
                    <i className='fa fa-home fa-lg'></i>
                </Link>
                <Link
                    to='/newReading'
                    className='icon-styling'
                    style={{ marginTop: '.2rem' }}
                >
                    <i className='fas fa-book-open fa-lg'></i>
                </Link>
                {/* <Link to="/settings" className='icon-styling'
                    style={{ marginTop: '.3rem' }}>
                    <i className="fa fa-user fa-lg"></i>
                </Link> */}
                <Link
                    to='/community'
                    className='icon-styling'
                    style={{ marginTop: '.5rem' }}
                >
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
