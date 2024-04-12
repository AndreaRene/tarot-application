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


import { Outlet, useRoutes } from 'react-router-dom';
import ReadingLayout from '../../client/src/layouts/LoggedIn/ReadingLayout';
import LandingLayout from '../../client/src/layouts/NonLoggedIn/LandingLayout';

function App() {
  const isLoggedIn = true; // Set this based on your authentication logic

  const routes = useRoutes([
    {
      path: '/',
      element: isLoggedIn ? <ReadingLayout /> : <LandingLayout />,
      children: [
        { path: '/', element: <Outlet /> },
        // Add more routes as needed
      ],
    },
  ]);

  return routes;
}

export default App;
