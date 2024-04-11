import React from 'react';
import { Route } from 'react-router-dom';
import LandingLayout from '../../layouts/NonLoggedIn/LandingLayout';

const LandingRouter = () => {
    return (
            <Route exact path='/Landing'>
                <LandingLayout />
            </Route>
    );
};

export default LandingRouter;