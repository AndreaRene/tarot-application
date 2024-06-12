import { Link } from 'react-router-dom';
import Logo from '../Landing/Assets/Home_Icon.png';
import MoonPhase from '../../assets/Moon_Ph.png';
import BackgroundImage from '../../assets/TarotHeader1.png';
import AuthComponent from './Login_Signup/AuthComponent';

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
                />
            </Link>
            <img src={MoonPhase} alt='Moon phase decorative element' />
            <h1 className='headline-elements'>
                Embark on an Enlightening <br /> Journey with TarotDeck
            </h1>
            <img src={MoonPhase} alt='Moon phase decorative element' />
            <AuthComponent />
        </div>
    );
};

export default PanelOne;
