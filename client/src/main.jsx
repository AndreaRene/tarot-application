import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
// import Profile from './pages/Profile.jsx'
// import Reading from './pages/Reading.jsx'
import Signup from './pages/Signup.jsx'
// import UserDashboard from './pages/UserDashboard.jsx'
// import Error from './pages/Error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Login',
        element: <Login />,
      },
      // {
      //   path: '/Profile',
      //   element: <Profile />,
      // },
      // {
      //   path: '/Reading',
      //   element: <Reading />,
      // },
      {
        path: '/Signup',
        element: <Signup />,
      },
      // {
      //   path: '/UserDashboard',
      //   element: <UserDashboard />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
