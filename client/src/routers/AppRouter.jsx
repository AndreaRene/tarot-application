import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NonLoggedInRouter from './NonLoggedIn/NonLoggedInRouter';
import LoggedInRouter from './LoggedIn/LoggedInRouter';
import LandingRouter from './NonLoggedIn/LandingRouter';

const AppRouter = ({ isLoggedIn }) => {
    return (
        <Routes>
            <Route path='/*'>
                {isLoggedIn ? <LoggedInRouter /> : <NonLoggedInRouter />}
            </Route>
            <Route path='/Landing' element={<LandingRouter />} />
        </Routes>
    );
};

export default AppRouter;