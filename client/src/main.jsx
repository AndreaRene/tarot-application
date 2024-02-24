import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Reading from './pages/Reading'
import Signup from './pages/Signup'
import UserDashboard from './pages/UserDashboard'
import Error from './pages/Error'

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
      {
        path: '/Profile',
        element: <Profile />,
      },
      {
        path: '/Reading',
        element: <Reading />,
      },
      {
        path: '/Signup',
        element: <Signup />,
      },
      {
        path: '/UserDashboard',
        element: <UserDashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
