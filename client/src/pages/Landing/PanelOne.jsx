import { Link } from 'react-router-dom';
import Logo from '../../assets/tarot_logo.png';
import MoonUp from '../../assets/Up_moon.png';
import MoonDown from '../../assets/Down_moon.png';
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
            <img src={MoonUp} alt='Moon decorative element' />
            <h1 className='headline-elements'>
                Embark on an Enlightening <br /> Journey with Tarot
            </h1>
            <img src={MoonDown} alt='Moon decorative element' />
            <AuthComponent />
        </div>
    );
};

export default PanelOne;
