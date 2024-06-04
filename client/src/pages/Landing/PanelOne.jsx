import { Link } from 'react-router-dom';
import Logo from '../Landing/Assets/Home_Icon.png';
// import Logo from '../../assets/tarot_logo.png';
import MoonUp from '../Landing/Assets/Moon_Ph.png';
import MoonDown from '../Landing/Assets/Moon_Ph.png';
import BackgroundImage from '../../assets/TarotHeader1.png';
import AuthComponent from './Login_Signup/AuthComponent';
import './Landing.css';


const PanelOne = () => {
    return (
        <div
            className='panel-container'
            style={{
                position: 'relative',
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: 'cover',
            }}
        >
            <Link to='/'>
                <img
                    src={Logo}
                    alt='Tarot Deck logo'
                    className='landing-logo'
                    style={{ marginTop: '20px'}}
                />
            </Link>
            <img src={MoonUp} alt='Moon decorative element' />
            <h1 className='headline-elements'>
                Embark on an Enlightening <br /> Journey with TarotDeck
            </h1>
            <img src={MoonDown} alt='Moon decorative element' />
            <AuthComponent />
        </div>
    );
};

export default PanelOne;
