import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './index.css';

// Import your layout components
import LandingLayout from '../layouts/NonLoggedIn/LandingLayout';

import ReadingLayout from '../layouts/LoggedIn/ReadingLayout';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <ApolloProvider client={client}>{isLoggedIn ? <ReadingLayout /> : <LandingLayout />}</ApolloProvider>,
    children: [
      // Define your routes here
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
