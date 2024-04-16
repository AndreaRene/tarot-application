// import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Outlet } from 'react-router-dom';

// function App() {
//   return (
//     <>
//       <main className='mx-3'>
//         <Outlet />
//       </main>
//     </>
//   );
// };

// export default App;


// import { Outlet, useRoutes } from 'react-router-dom';
// import ReadingLayout from '../../client/src/layouts/LoggedIn/ReadingLayout';
// import LandingLayout from '../../client/src/layouts/NonLoggedIn/LandingLayout';

// function App() {
//   const isLoggedIn = true; // Set this based on your authentication logic

//   const routes = useRoutes([
//     {
//       path: '/',
//       element: isLoggedIn ? <ReadingLayout /> : <LandingLayout />,
//       children: [
//         { path: '/', element: <Outlet /> },
//         // Add more routes as needed
//       ],
//     },
//   ]);

//   return routes;
// }

// export default App;

import { Outlet, useRoutes } from "react-router-dom";
import { useAuth } from './utils/auth';
import LandingLayout from "./layouts/LandingLayout/LandingLayout";
import ReadingLayout from "./layouts/ReadingLayout/ReadingLayout";
// import PublicLayout from './layouts/PublicLayout/PublicLayout';
// import AppLayout from './layouts/AppLayout/AppLayout';
// import PersonalLayout from './layouts/PersonalLayout/PersonalLayout';
import Error from './pages/Error';
import Landing from './pages/Landing/Landing';
// import About from './pages/About/About';
// import Contact from './pages/Contact/Contact';
// import Terms from './pages/Terms/Terms';
// import Privacy from './pages/Privacy/Privacy';
import Reading from './pages/Reading/Reading';
// import Shop from './pages/Shop/Shop';
// import Decks from './pages/Decks/Decks';
// import Spreads from './pages/Spreads/Spreads';
// import Dashboard from './pages/Dashboard/Dashboard';
// import Profile from './pages/Profile/Profile';
// import ReadingDetails from './pages/ReadingDetails/ReadingDetails';
// import Community from './pages/Community/Community';
// import DeckInfo from './pages/DeckInfo/DeckInfo';
// import SpreadInfo from './pages/SpreadInfo/SpreadInfo';
// import CardInfo from './pages/CardInfo/CardInfo';

function App() {
  const authService = new AuthService();
  const { isLoggedIn } = useAuth();

  const routes = useRoutes([
    // Non-Authenticated routes
    {
      path: '/',
      element: <LandingLayout />,
      children: [
        { index: true, element: <Landing /> },
      ],
    },
    // {
    //   element: <PublicLayout />,
    //   children: [
    //     { path: 'about', element: <About />},
    //     { path: 'contact', element: <Contact />},
    //     { path: 'terms', element: <Terms />},
    //     { path: 'privacy', element: <Privacy />},
    //   ],
    // },
    // Authenticated routes
    {
      element: isLoggedIn ? <ReadingLayout /> : <LandingLayout />,
      children: [
        { path: 'reading', element: <Reading /> },
      ],
    },
    // {
    //   element: isLoggedIn ? <AppLayout /> : <LandingLayout />,
    //   children: [
    //     { path: 'shop', element: <Shop /> },
    //     { path: 'decks', element: <Decks /> },
    //     { path: 'spreads', element: <Spreads /> },
    //   ],
    // },
    // {
    //   element: isLoggedIn ? <PersonalLayout /> : <LandingLayout />,
    //   children: [
    //     { path: 'dashboard', element: <Dashboard /> },
    //     { path: 'profile', element: <Profile /> },
    //     { path: 'reading-details', element: <ReadingDetails /> },
    //     { path: 'community', element: <Community /> },
    //     { path: 'deck-info', element: <DeckInfo /> },
    //     { path: 'spread-info', element: <SpreadInfo /> },
    //     { path: 'card-info', element: <CardInfo /> },
    //   ],
    // },
    { path: '*', element: <Error /> },
  ]);

  return routes;
}

export default App;