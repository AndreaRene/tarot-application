import { useLocation } from 'react-router-dom';

import DashboardLeft from '../../pages/Dashboard/DashboardLeft';
import DashboardRight from '../../pages/Dashboard/DashboardRight';
import ProfileLeft from '../../pages/Profile/ProfileLeft';
import ProfileRight from '../../pages/Profile/ProfileRight';
import NewReading from '../../pages/NewReading/NewReading';
import Landing from '../../pages/Landing/Landing';
import AboutUs from '../../pages/InfoPages/About/AboutUs';
import ContactUs from '../../pages/InfoPages/Contact/ContactUs';
import Terms from '../../pages/InfoPages/Terms/Terms';
import Privacy from '../../pages/InfoPages/Privacy/Privacy';
import FAQs from '../../pages/InfoPages/FAQ/FAQs'

const routeToMainComponents = {
  '/dashboard': () => (
    <div style={{ display: 'flex' }}>
      <DashboardLeft />
      <DashboardRight />
    </div>
  ),
  '/profile': () => (
    <div style={{ display: 'flex' }}>
      <ProfileLeft style={{ width: '50%'}}/>
      <ProfileRight style={{ width: '50%'}}/>
    </div>
  ),
  '/newreading': NewReading,
  '/aboutUs': AboutUs,
  '/contactUs': ContactUs,
  '/terms': Terms,
  '/faqs': FAQs,
  '/privacy': Privacy,
  '/': Landing
};

const MainContainer = () => {
  const location = useLocation();
  const MainComponent = routeToMainComponents[location.pathname];

  return (
    <div style={{ flex: '1'}}>
      {MainComponent && <MainComponent />}
    </div>
  );
};

export default MainContainer;
