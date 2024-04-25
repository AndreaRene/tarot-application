import { Link } from 'react-router-dom';
import Logo from '../../assets/tarot_logo.png';
import MoonUp from '../../assets/Up_moon.png';
import MoonDown from '../../assets/Down_moon.png';
import BackgroundImage from '../../assets/TarotHeader1.png';

const PanelOne = () => {
    return (
        <div
            style={{
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
            <Link to='/'>
                <img
                    src={Logo}
                    alt='Tarot Deck logo'
                    style={{
                        position: 'relative',
                        zIndex: 3,
                        margin: '30px',
                        width: '140px',
                        height: 'auto'
                    }} />
            </Link>
            <img
                src={MoonUp}
                alt='Moon decorative element'
            // className='img-fluid img-sm'
            />

            <h1 style={{ color: "rgb(168, 148, 103)" }}>
                Embark on an Enlightening <br /> Journey with Tarot
            </h1>
            <img
                src={MoonDown}
                alt='Moon decorative element'
            // className='img-fluid img-sm'
            />
            <div style={{ textAlign: 'center' }} >
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