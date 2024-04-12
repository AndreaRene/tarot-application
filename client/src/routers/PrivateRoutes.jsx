// import React from "react";
// import { Route, Navigate } from 'react-router-dom';

// const PrivateRoute = ({ element, isLoggedIn, ...rest }) => {
//     return isLoggedIn ? (
//         <Route
//     )
// }

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Consider renaming to 'ProtectedRoute' for clarity
const PrivateRoute = ({ isLoggedIn }) => {
  return isLoggedIn ? <Outlet /> : <Navigate to="/landing" replace />;
};

export default PrivateRoute;