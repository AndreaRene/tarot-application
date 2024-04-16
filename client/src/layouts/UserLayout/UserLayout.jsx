import React from 'react';
import Header from '../../components/Header/Header';
import LeftSmallPanel from '../../components/Panels/LeftSmallPanel/LeftSmallPanel';
import MainLargePanel from '../../components/Panels/MainLargePanel/MainLargePanel';
import RightSmallPanel from '../../components/Panels/RightSmallPanel/RightSmallPanel';

import Dashboard from '../../pages/Dashboard/Dashboard';
// import ReadingRouter from '../../routers/LoggedIn/ReadingRouter';

const UserLayout = () => {
    return (
        <div className='reading-layout'>
            <Header />
            <div className='main-layout'>
                <div className='left-aside'>
                    <LeftSmallPanel />
                </div>
                <div className='center-panel'>
                    <MainLargePanel />
                </div>
                <div className='right-aside'>
                    <RightSmallPanel />
                </div>
            </div>
        </div>
    );
};

export default UserLayout;
