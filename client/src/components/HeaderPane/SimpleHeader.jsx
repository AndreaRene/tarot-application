import { Link } from 'react-router-dom';
import Icon from '../../assets/Icons/Crystals_wh.png'
import settingsPicture from '../../assets/08_Strength.jpg'

const SimpleHeader = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box', padding: '.5rem' }}>
      <div>
        <Link to="/">
          <img src={Icon} style={{ width: '40px' }} />
        </Link>
      </div>
      <div>
        <img src={settingsPicture} alt="settings" style={{ width: '40px', borderRadius: '50%', border: '4px solid gray' }} />
      </div>
    </header>
  );
};

export default SimpleHeader;