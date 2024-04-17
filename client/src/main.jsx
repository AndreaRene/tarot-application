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

// Set up the HTTP link to your GraphQL server
const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql', // Adjust this URI to match your GraphQL endpoint
});

// Create the Apollo Client instance
const client = new ApolloClient({
    link: authLink.concat(httpLink), // Concatenate the authLink and httpLink to form the complete link chain
    cache: new InMemoryCache(),
});

const router = createBrowserRouter([
    {
        path: '*',
        element: <App />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <RouterProvider router={router} />
    </ApolloProvider>
);