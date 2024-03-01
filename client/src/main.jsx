import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css';

import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
// import Login from './pages/Login.jsx';
// import Profile from './pages/Profile.jsx';
// import Reading from './pages/Reading.jsx';
// import Signup from './pages/Signup.jsx';
// import UserDashboard from './pages/UserDashboard.jsx';
// import Error from './pages/Error.jsx';

// Set up the Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql', // Adjust this URI to match your GraphQL endpoint
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />, // Uncomment and import Error component as needed
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: '/Login',
      //   element: <Login />,
      // },
      // {
      //   path: '/Profile',
      //   element: <Profile />,
      // },
      // {
      //   path: '/Reading',
      //   element: <Reading />,
      // },
      // {
      //   path: '/Signup',
      //   element: <Signup />,
      // },
      // {
      //   path: '/UserDashboard',
      //   element: <UserDashboard />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
);