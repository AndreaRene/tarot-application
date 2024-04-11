import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReadingRouter from './ReadingRouter'
// import DashboardRouter from './DashboardRouter'; 

const LoggedInRouter = () => {
    return (
        <Routes>
            <Route path='/Reading'>
                <ReadingRouter />
            </Route>
            {/* <Route path='/Dashboard'>
                 <DashboardRouter /> 
             </Route> */}
        </Routes>
    );
};

export default LoggedInRouter;