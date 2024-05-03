
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? children : <Navigate to="/login" />;
};
