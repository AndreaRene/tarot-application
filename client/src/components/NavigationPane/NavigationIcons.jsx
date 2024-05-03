import { Link } from 'react-router-dom';
import './NavigationPane.css';

const NavigationIcons = () => {
    return (
        <nav className='nav-icons-container'>
            <div className='nav-div'>
                <Link to="/dashboard" className='icon-styling'
                    style={{ margin: '1rem 0  0.2rem 0'}}>
                    <i className="fa fa-home fa-lg"></i>
                </Link>
                <Link to="/newreading" className='icon-styling'
                    style={{ marginTop: '.2rem' }}>
                    <i className="fas fa-book-open fa-lg"></i>
                </Link>
                <Link to="/profile" className='icon-styling'
                    style={{ marginTop: '.3rem' }}>
                    <i className="fa fa-user fa-lg"></i>
                </Link>
                <Link to="/community" className='icon-styling'
                    style={{ marginTop: '.5rem' }}>
                    <i className="fas fa-users fa-lg"></i>
                </Link>
            </div>
            <Link to="/" className='icon-styling'
                style={{
                    marginBottom: '1.7rem'
                }}>
                <i className="fas fa-sign-out-alt fa-lg"></i>
            </Link>
        </nav>
    );
};

export default NavigationIcons;
