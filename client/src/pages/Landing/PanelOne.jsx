import { Link } from 'react-router-dom';
import Logo from '../../assets/tarot_logo.png';
import MoonUp from '../../assets/Up_moon.png';
import MoonDown from '../../assets/Down_moon.png';
import BackgroundImage from '../../assets/TarotHeader1.png';
import StarsBackground from '../Landing/Assets/Stars.png';

const PanelOne = () => {
    return (
        <div className='panel-container'
            style={{
                position: 'relative',
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: 'cover'
            }} >
            <img src={StarsBackground}
                alt="Star Background overlay"
                className='star-layer'
            />
            <Link to='/'>
                <img
                    src={Logo}
                    alt='Tarot Deck logo'
                    className='landing-logo'
                />
            </Link>
            <img
                src={MoonUp}
                alt='Moon decorative element'
            />
            <h1 className='headline-elements'>
                Embark on an Enlightening <br /> Journey with Tarot
            </h1>
            <img
                src={MoonDown}
                alt='Moon decorative element'
            />
            <div className='button-container'>
                <div>
                    <button className='button' >
                        Login
                    </button>
                    <button className='button' >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PanelOne;