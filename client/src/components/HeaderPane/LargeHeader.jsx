import { Link } from 'react-router-dom';
import Logo from '../../assets/tarot_logo.png'
import ProfilePicture from '../../assets/08_Strength.jpg'
const LargeHeader = () => {


    return (
        <header style={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box', padding: '.5rem'} }>
            <div>
                <Link to="/">
                    <img src={ Logo } alt='Tarot Deck logo' style={ { width: '115px'} } /> {/* Example icon */ }
                </Link>
            </div>
            <div>
                <img src={ ProfilePicture } alt="Profile" style={ { width: '90px', borderRadius: '50%', border: '6px solid gray', marginRight: '20px' } } />
            </div>
        </header>
    );
};

export default LargeHeader;
