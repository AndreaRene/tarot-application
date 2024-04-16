import React from 'react';
import Header from '../../components/Header/Header';
import LeftSmallPanel from '../../components/Panels/ReadingPagePanels/LeftSmallPanel/LeftSmallPanel';
import MainLargePanel from '../../components/Panels/ReadingPagePanels/MainLargePanel/MainLargePanel';
import RightSmallPanel from '../../components/Panels/ReadingPagePanels/RightSmallPanel/RightSmallPanel';

import Reading from '../../pages/Reading/Reading';
// import ReadingRouter from '../../routers/LoggedIn/ReadingRouter';

const ReadingLayout = () => {
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

export default ReadingLayout;