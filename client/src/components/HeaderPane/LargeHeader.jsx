import { Link } from 'react-router-dom';
import Logo from '../../assets/TD_Main.png'
import settingsPicture from '../../assets/08_Strength.jpg'
const LargeHeader = () => {


    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box', padding: '.3rem' }}>
            <div>
                <Link to="/">
                    <img src={Logo} alt='Tarot Deck logo' style={{ borderRadius: '50%', padding: '.2rem', marginLeft: '20px', width: '85px' }} /> {/* Example icon */}
                </Link>
            </div>
            <div>
                <img src={settingsPicture} alt="settings" style={{ width: '65px', borderRadius: '50%', border: '4px solid gray', marginRight: '20px' }} />
            </div>
        </header>
    );
};

export default LargeHeader;
