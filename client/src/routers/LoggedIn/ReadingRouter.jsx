import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReadingLayout from '../../layouts/LoggedIn/ReadingLayout';
import LandingLayout from '../../layouts/NonLoggedIn/LandingLayout';

const ReadingRouter = ({ isLoggedIn }) => {
    return ( 
            <Routes>
                <Route path='/Reading'>
                    {isLoggedIn ? <ReadingLayout /> : <LandingLayout />}
                </Route>
            </Routes>
    );
};

export default ReadingRouter;