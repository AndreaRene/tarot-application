import { useState, useEffect } from 'react';
import React from 'react';
import '../Profile/Profile.css';
import Header from '../../components/Header/Header';
import Drawer from '../../components/Drawer/Drawer';
// import ProfileDataForm from '../../components/Profile/ProfileDataForm';
import ResetPassword from '../../components/Profile/ResetPassword';
import ProfileData from '../../components/Profile/ProfileData';

import { useLazyQuery } from '@apollo/client';
import { GET_ME } from '../../utils/queries';

const Profile = ({ isLoggedIn }) => {
    const [getMe, { data: currentUserData }] = useLazyQuery(GET_ME);
    const [username, setUsername] = useState(null);

    // Gathers data when loading into page
    useEffect(() => {
        getMe();
    }, []); // Empty dependency array to run once on component mount

    useEffect(() => {
        if (currentUserData && currentUserData.me) {
            setUsername(currentUserData.me.username);
        }
    }, [currentUserData]);

    return (
        <div className='profile-container'>
            <Header />
            {isLoggedIn && (
                <div className='drawer-container'>
                    <Drawer />
                </div>
            )}
            <div className='intro-profile'>
                <h1 className='welcome'>Welcome {username}!</h1>
                <div className='profile-data'>
                    {/* <ProfileDataForm /> */}
                    <ProfileData />
                    <ResetPassword />
                </div>
            </div>
        </div>
    );
};

export default Profile;
