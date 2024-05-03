import { useLocation } from 'react-router-dom';

import DashboardLeft from '../../pages/Dashboard/DashboardLeft';
import DashboardRight from '../../pages/Dashboard/DashboardRight';
import ProfileLeft from '../../pages/Profile/ProfileLeft';
import ProfileRight from '../../pages/Profile/ProfileRight';
import NewReading from '../../pages/NewReading/NewReading';
// import Community from '../../Pages/Community/Community';
// import BrowseSpreads from '../../Pages/BrowseSpreads/BrowseSpreads';
// import BrowseDecks from '../../Pages/BrowseDecks/BrowseDecks';
// import AppShop from '../../pages/Shop/Shop';
import Terms from '../../pages/InfoPages/Terms/Terms';
import Privacy from '../../pages/InfoPages/Privacy/Privacy'
import FAQs from '../../pages/InfoPages/FAQ/FAQs';
import Landing from '../../pages/Landing/Landing';
import AboutUs from '../../pages/InfoPages/About/AboutUs';
import ContactUs from '../../pages/InfoPages/Contact/ContactUs';
// import JournalLeft from '../../pages/JournalEntry/JournalLeft';
// import JournalRight from '../../pages/JournalEntry/JournalRight';
import CardLeft from '../../pages/CardDetails/CardLeft';
import CardRight from '../../pages/CardDetails/CardRight';


const routeToMainComponents = {
  '/dashboard': () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <DashboardLeft style={{ width: '50%' }} />
      <DashboardRight style={{ width: '50%' }} />
    </div>
  ),
  '/profile': () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <ProfileLeft style={{ width: '50%' }} />
      <ProfileRight style={{ width: '50%' }} />
    </div>
  ),  
  '/journal': () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <JournalLeft style={{ width: '50%' }} />
      <JournalRight style={{ width: '50%' }} />
    </div>
  ),
  '/cardInfo': () => {
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <CardLeft style={{ width: '50%' }} />
    <CardRight style={{ width: '50%' }} />
  </div>
  },
  '/newreading': NewReading,
  // '/community': Community,
  // '/browseSpreads': BrowseSpreads,
  // '/browseDecks': BrowseDecks,
  // '/appShop': AppShop,
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
    <div style={ { flex: '1' } }>
      { MainComponent && <MainComponent /> }
    </div>
  );
};

export default MainContainer;