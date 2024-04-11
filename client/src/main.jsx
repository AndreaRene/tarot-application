import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './index.css';

import App from './App.jsx';
import Landing from './pages/Landing/Landing.jsx';
// import Profile from './pages/Profile/Profile.jsx';
import Reading from './pages/Reading.jsx';
import Error from './pages/Error.jsx';
// import Terms from './pages/Terms/Terms.jsx';
// import Privacy from './pages/Privacy/Privacy.jsx';
// import Dashboard from './pages/Dashboard/Dashboard.jsx';
// import Journal from './pages/Journal/Journal.jsx';
// import Share from './pages/Share/Share.jsx';
// import Contact from './pages/Contact/Contact.jsx';
// import FAQ from './pages/FAQ/FAQ.jsx';
// import Community from './pages/Community/Community.jsx';
// import Spreads from './pages/Spreads/Spreads.jsx';
// import Decks from './pages/Decks/Decks.jsx';
// import Shop from './pages/Shop/Shop.jsx';
// import Legal from './pages/Legal/Legal.jsx';
// import About from './pages/About/About.jsx';

// Set up the HTTP link to your GraphQL server
const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql', // Adjust this URI to match your GraphQL endpoint
});

// Set up the authentication link to add the token to the request headers
const authLink = setContext((_, { headers }) => {
    // Get the authentication token from local storage or wherever it's stored
    const token = localStorage.getItem('id_token');

    // Return the headers to the context so the HTTP link can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '', // Add the token to the authorization header if it exists
        },
    };
});

// Create the Apollo Client instance
const client = new ApolloClient({
    link: authLink.concat(httpLink), // Concatenate the authLink and httpLink to form the complete link chain
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
                element: <Landing />,
            },
            {
                path: '/',
                element: <Landing />,
            },
            // {
            //     path: '/Profile',
            //     element: <Profile />,
            // },
            // {
            //     path: '/Terms',
            //     element: <Terms />,
            // },
            // {
            //     path: '/Privacy',
            //     element: <Privacy />,
            // },
            {
                path: '/Reading',
                element: <Reading />,
            },
            // {
            //     path: '/Dashboard',
            //     element: <Dashboard />,
            // },
            // {
            //     path: '/Journal',
            //     element: <Journal />,
            // },
            // {
            //     path: '/Share',
            //     element: <Share />,
            // },
            // {
            //     path: '/Contact',
            //     element: <Contact />,
            // },
            // {
            //     path: '/Faq',
            //     element: <FAQ />,
            // },
            // {
            //     path: '/Community',
            //     element: <Community />,
            // },
            // {
            //     path: '/Spreads',
            //     element: <Spreads />,
            // },
            // {
            //     path: '/Decks',
            //     element: <Decks />,
            // },
            // {
            //     path: '/Shop',
            //     element: <Shop />,
            // },
            // {
            //     path: '/Legal',
            //     element: <Legal />,
            // },
            // {
            //     path: '/About',
            //     element: <About />,
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
