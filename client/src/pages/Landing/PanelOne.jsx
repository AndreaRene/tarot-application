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
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '.3rem',
                width: '100vw',
                height: '100vh',
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: 'cover'
            }} >
                <img src={StarsBackground} alt="Star Background overlay"
                style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: 1
                }} />
            <Link to='/'>
                <img
                    src={Logo}
                    alt='Tarot Deck logo'
                    style={{
                        position: 'relative',
                        zIndex: 3,
                        margin: '30px',
                        width: '140px',
                        height: 'auto',
                        zIndex: 5

                    }} />
            </Link>
            <img
                src={MoonUp}
                alt='Moon decorative element'
            />

            <h1 style={{ color: "rgb(168, 148, 103)", zIndex: '5' }}>
                Embark on an Enlightening <br /> Journey with Tarot
            </h1>
            <img
                src={MoonDown}
                alt='Moon decorative element'
            />
            <div style={{ textAlign: 'center', zIndex: '5' }} >
                <button className='button' >
                    Login
                </button>
                <button className='button' >
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default PanelOne;