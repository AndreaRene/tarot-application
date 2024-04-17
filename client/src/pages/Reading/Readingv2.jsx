import React from 'react';
// import Header from '../../components/Header/Header';
import LeftAside from '../../components/Panels/LeftAside';
import CenterPanel from '../../components/Panels/CenterPanel';
import RightAside from '../../components/Panels/RightAside';
import Reading from '../../pages/Reading/Reading'
// import ReadingRouter from '../../routers/LoggedIn/ReadingRouter';

const ReadingLayout = () => {
    return (
        <div className='reading-layout'>
            {/* Use new, smaller header */}
            {/* <Header /> */}
            <div className='main-layout'>
                <div className='left-aside'>
                    <LeftAside />
                </div>
                <div className='center-panel'>
                    <CenterPanel />
                </div>
                <div className='right-aside'>
                    <RightAside />
                </div>
            </div>
        </div>
    );
};

export default ReadingLayout;