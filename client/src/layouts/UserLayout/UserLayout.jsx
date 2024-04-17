import React from 'react';
import Header from '../../components/Header/Header';
import LeftAside from '../../components/Panels/LeftAside';
import CenterPanel from '../../components/Panels/CenterPanel';
import RightAside from '../../components/Panels/RightAside';

const UserLayout = ({ isLoggedIn }) => {
    return (
        <div className='user-layout'>
            <Header />
            <div className='main-layout'>
                <LeftAside />
                <CenterPanel />
                <RightAside />
            </div>
        </div>
    );
};

export default UserLayout;