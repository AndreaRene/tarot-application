import { useLocation } from 'react-router-dom';

import LargeHeader from '../HeaderPane/LargeHeader';
import SimpleHeader from '../HeaderPane/SimpleHeader';
import BackgroundImage from '../../assets/TarotHeader1.png';

const routeToHeader = {
  '/dashboard': LargeHeader,
  '/settings': LargeHeader,
  '/newreading': SimpleHeader,
};

const Header = () => {
  const location = useLocation();
  const HeaderComponent = routeToHeader[location.pathname];

  return <div style={{ width: '100vw', backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover' }}>{HeaderComponent && <HeaderComponent />}</div>;
};

export default Header;
