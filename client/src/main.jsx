import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css';

import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import Profile from './pages/Profile.jsx';
// import Reading from './pages/Reading.jsx';
import Error from './pages/Error.jsx';
// import Terms from './pages/Terms.jsx';
// import Privacy from './pages/Privacy.jsx';

// Set up the Apollo Client
const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql', // Adjust this URI to match your GraphQL endpoint
    cache: new InMemoryCache(),
});

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />, // Uncomment and import Error component as needed
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/Profile',
                element: <Profile />,
            },
            // {
            //     path: '/Terms',
            //     element: <Terms />,
            // },
            // {
            //     path: '/Privacy',
            //     element: <Privacy />,
            // },
            // {
            //   path: '/Reading',
            //   element: <Reading />,
            // },
            // {
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
        <RouterProvider router={router} />
    </ApolloProvider>
);
