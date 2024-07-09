import { useLazyQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import settingsPicture from '../../../assets/08_Strength.jpg';
import { GET_ME } from '../../../utils/queries';

import './QuickUserInfo.css';

const QuickUserInfo = () => {
    const [getMe, { data: currentUserData }] = useLazyQuery(GET_ME);
    const [userData, setUserData] = useState({
        username: '',
        firstName: '',
        dateCreated: '',
        totalReadings: 0
    });

    useEffect(() => {
        getMe();
    }, [getMe]); // Empty dependency array to run once on component mount

    const formatDateCreated = (value) => {
        // Remove any non-digit characters from the input
        const cleaned = value.replace(/\D/g, '');

        // Parse the cleaned input to extract month, day, and year
        const month = cleaned.substring(4, 6);
        const day = cleaned.substring(6, 8);
        const year = cleaned.substring(0, 4);

        // Rearrange the components to form the desired format (YYYY-MM-DD)
        const formatedDateCreated = `${month}-${day}-${year}`;

        return formatedDateCreated;
    };

    useEffect(() => {
        if (currentUserData && currentUserData.me) {
            const dateCreated = formatDateCreated(currentUserData.me.dateCreated);
            setUserData((prevUserData) => ({
                ...prevUserData,
                username: currentUserData.me.username,
                firstName: currentUserData.me.firstName,
                dateCreated: dateCreated,
                totalReadings: currentUserData.me.totalReadings
            }));
        }
    }, [currentUserData]);

    // Sample user data (replace with actual data)
    const user = {
        username: userData.username,
        message: `Welcome back, ${userData.firstName}!`,
        date: userData.dateCreated,
        readingCount: userData.totalReadings
    };

    return (
        <section
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '2.5rem'
            }}>
            <div className='username'>{user.username}</div>
            <img
                src={settingsPicture}
                alt='settings'
                style={{
                    width: '100px',
                    borderRadius: '50%',
                    border: '6px solid gray',
                    marginTop: '1rem',
                    marginBottom: '1rem'
                }}
            />
            <div>{user.message}</div>
            <div>Member since: {user.date}</div>
            <div>Total readings: {user.readingCount}</div>
        </section>
    );
};

export default QuickUserInfo;
