import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../assets/tarot_logo.png';
import MoonUp from '../../assets/Up_moon.png';
import MoonDown from '../../assets/Down_moon.png';
import BackgroundImage from '../../assets/TarotHeader1.png';
import StarsBackground from '../Landing/Assets/Stars.png';
import LoginModal from '../../components/OriginalComponents/Authentication/Login/LoginModal';
import SignupModal from '../../components/OriginalComponents/Authentication/SignUp/SignUpModal';

const PanelOne = () => {
    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);

    const handleLoginOpen = () => setLoginOpen(true);
    const handleLoginClose = () => setLoginOpen(false);

    const handleSignUpOpen = () => setSignupOpen(true);
    const handleSignUpClose = () => setSignupOpen(false);

    return (
        <div
            className='panel-container'
            style={{
                position: 'relative',
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: 'cover',
            }}
        >
            <img
                src={StarsBackground}
                alt='Star Background overlay'
                className='star-layer'
            />
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
            <div className='button-container'>
                <div>
                    <button className='button' onClick={handleLoginOpen}>
                        Login
                    </button>
                    <button className='button' onClick={handleSignUpOpen}>
                        Sign Up
                    </button>
                </div>
            </div>
            <LoginModal open={loginOpen} handleClose={handleLoginClose} />
            <SignupModal open={signupOpen} handleClose={handleSignUpClose} />
        </div>
    );
};

export default PanelOne;
