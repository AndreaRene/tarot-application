import { useLocation } from 'react-router-dom';

import DashboardLeft from '../../pages/Dashboard/DashboardLeft';
import DashboardRight from '../../pages/Dashboard/DashboardRight';
import SettingsLeft from '../../pages/Settings/SettingsLeft';
import SettingsRight from '../../pages/Settings/SettingsRight';
import NewReading from '../../pages/NewReading/NewReading';
import Community from '../../pages/Community/Community';
import BrowseSpreads from '../../pages/BrowseSpreads/BrowseSpreads';
import BrowseDecks from '../../pages/BrowseDecks/BrowseDecks';
import AppShop from '../../pages/Shop/Shop';
import Terms from '../../pages/InfoPages/Terms/Terms';
import Privacy from '../../pages/InfoPages/Privacy/Privacy'
import FAQs from '../../pages/InfoPages/FAQ/FAQs';
import Landing from '../../pages/Landing/Landing';
import AboutUs from '../../pages/InfoPages/About/AboutUs';
import ContactUs from '../../pages/InfoPages/Contact/ContactUs';
// import JournalLeft from '../../pages/JournalEntry/JournalLeft';
// import JournalRight from '../../pages/JournalEntry/JournalRight';

const routeToMainComponents = {
  '/dashboard': () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <DashboardLeft style={{ width: '50%' }} />
      <DashboardRight style={{ width: '50%' }} />
    </div>
  ),
  '/settings': () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <SettingsLeft style={{ width: '50%' }} />
      <SettingsRight style={{ width: '50%' }} />
    </div>
  ),
  '/reading': () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <JournalLeft style={{ width: '50%' }} />
      <JournalRight style={{ width: '50%' }} />
    </div>
  ),
  '/newreading': NewReading,
  '/community': Community,
  '/browseSpreads': BrowseSpreads,
  '/browseDecks': BrowseDecks,
  '/appShop': AppShop,
  '/aboutUs': AboutUs,
  '/terms': Terms,
  '/privacy': Privacy,
  '/faqs': FAQs,
  '/contactUs': ContactUs,
  '/landing': Landing,
  '/': Landing,
};

const MainContainer = () => {
  const location = useLocation();
  const MainComponent = routeToMainComponents[location.pathname];

  return (
    <div style={{ flex: '1' }}>
      {MainComponent && <MainComponent />}
    </div>
  );
};

export default MainContainer;