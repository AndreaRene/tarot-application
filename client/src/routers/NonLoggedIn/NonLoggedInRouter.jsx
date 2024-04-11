import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingRouter from '../../routers/NonLoggedIn/LandingRouter';

const NonLoggedInRouter = () => {
    return (
      <Routes>
        <Route path='/' element={ <LandingRouter />} />
      </Routes>
    );
};

export default NonLoggedInRouter;