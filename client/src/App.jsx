import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { AuthProvider, useAuth } from './utils/AuthContext';
import Layout from './components/AppLayout/Layout';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <MainRoutes />
            </Router>
        </AuthProvider>
    );
};

const MainRoutes = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Routes>
            <Route
                path='/'
                element={
                    isAuthenticated ? (
                        <Navigate to='/dashboard' />
                    ) : (
                        <Layout content='landing' />
                    )
                }
            />
            <Route
                path='/landing'
                element={
                    isAuthenticated ? (
                        <Navigate to='/dashboard' />
                    ) : (
                        <Layout content='landing' />
                    )
                }
            />
            <Route
                path='/dashboard'
                element={<ProtectedContent content='dashboard' />}
            />
            <Route
                path='/newReading'
                element={<ProtectedContent content='newReading' />}
            />
            <Route
                path='/settings'
                element={<ProtectedContent content='settings' />}
            />
            <Route
                path='/reading'
                element={<ProtectedContent content='reading' />}
            />
            <Route
                path='/community'
                element={<ProtectedContent content='community' />}
            />
            <Route
                path='/aboutUs'
                element={<Layout content='aboutUs' />} />
            <Route
                path='/faqs'
                element={<Layout content='faqs' />} />
            <Route
                path='/contactUs'
                element={<Layout content='contactUs' />} />
            <Route
                path='/privacy'
                element={<Layout content='privacy' />} />
            <Route
                path='/terms'
                element={<Layout content='terms' />} />
            <Route
                path='/appShop'
                element={<Layout content='appShop' />} />
            <Route
                path='/browseDecks'
                element={<Layout content='browseDecks' />} />
            <Route
                path='/browseSpreads'
                element={<Layout content='browseSpreads' />} />
        </Routes>
    );
};

const ProtectedContent = ({ content }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? (
        <Layout content={content} />
    ) : (
        <Navigate to='/landing' />
    );
};

ProtectedContent.propTypes = {
    content: PropTypes.string.isRequired,
};

Layout.propTypes = {
    content: PropTypes.string.isRequired,
};

export default App;
