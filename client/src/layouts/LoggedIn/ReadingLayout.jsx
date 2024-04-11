import React from 'react';
import Header from '../../components/Header/Header';
import LeftSmallPanel from '../../components/Panels/ReadingPagePanels/LeftSmallPanel/LeftSmallPanel';
import MainLargePanel from '../../components/Panels/ReadingPagePanels/MainLargePanel/MainLargePanel';
import RightSmallPanel from '../../components/Panels/ReadingPagePanels/RightSmallPanel/RightSmallPanel';

import Reading from '../../pages/Reading';
import ReadingRouter from '../../routers/LoggedIn/ReadingRouter';

const ReadingLayout = () => {
    return (
        <div className='reading-layout'>
            <Header />
            <div className='main-layout'>
                <LeftSmallPanel />
                <MainLargePanel>
                
                </MainLargePanel>
                <RightSmallPanel />
            </div>
        </div>
    );
};

export default ReadingLayout;