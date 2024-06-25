import { Link } from 'react-router-dom';
import Logo from '../../assets/Logos/Large/OG_TD_Logo-1-Main-v2.png'
import settingsPicture from '../../assets/08_Strength.jpg'
const LargeHeader = () => {


    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box', padding: '.3rem' }}>
            <div>
                <Link to="/">
                    <img src={Logo} alt='Tarot Deck logo' style={{border: '4px solid gray', borderRadius: '50%', marginLeft: '20px', width: '75px' }} /> {/* Example icon */}
                </Link>
            </div>
            <div>
                <img src={settingsPicture} alt="settings" style={{ width: '65px', borderRadius: '50%', border: '4px solid gray', marginRight: '20px' }} />
            </div>
        </header>
    );
};

export default LargeHeader;
