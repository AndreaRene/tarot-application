import ReactDOM from 'react-dom/client';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import App from './App.jsx';
import './index.css';

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

ReactDOM.createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
