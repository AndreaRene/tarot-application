// import { useState, useEffect } from 'react';

// import { useLazyQuery } from '@apollo/client';
// import { GET_ME } from '../../utils/queries';

// const ProfileData = () => {
//     const [userData, setUserData] = useState({
//         fullName: '',
//         username: '',
//         birthday: '',
//         phoneNumber: '',
//         email: '',
//         error: '',
//     });

//     const [getMe, { data: currentUserData }] = useLazyQuery(GET_ME);

//     // Gathers data when loading into page
//     useEffect(() => {
//         getMe();
//     }, []); // Empty dependency array to run once on component mount

//     const formatBirthday = () => {
//         const birthdayString = currentUserData.me.birthday;
//         const birthday = new Date(birthdayString);

//         const formattedBirthday = `${(birthday.getMonth() + 1)
//             .toString()
//             .padStart(2, '0')}/${birthday
//             .getDate()
//             .toString()
//             .padStart(2, '0')}/${birthday.getFullYear()}`;

//         return formattedBirthday;
//     };

//     const formatFullName = () => {
//         const firstName = currentUserData.me.firstName;
//         const lastName = currentUserData.me.lastName;

//         return `${firstName} ${lastName}`;
//     };

//     useEffect(() => {
//         if (currentUserData && currentUserData.me) {
//             const birthday = formatBirthday();
//             const fullName = formatFullName();

//             setUserData((prevUserData) => ({
//                 ...prevUserData,
//                 fullName: fullName,
//                 username: currentUserData.me.username,
//                 phoneNumber: currentUserData.me.phoneNumber,
//                 email: currentUserData.me.email,
//                 birthday: birthday,
//             }));
//         }
//     }, [currentUserData]);

//     return (
//         <div
//             style={{
//                 width: '275px',
//                 margin: 'auto',
//                 marginTop: '10px',
//             }}
//         >
//             <h1
//                 className='text-bold'
//                 style={{
//                     color: 'rgb(168, 148, 103)',
//                     fontFamily: 'Playfair Display',
//                 }}
//             >
//                 Profile
//             </h1>
//             <h6
//                 style={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                 }}
//             >
//                 <b>Username: {userData.username}</b>
//                 <b>Name: {userData.fullName}</b>
//                 <b>Phone Number: {userData.phoneNumber}</b>
//                 <b>Birthday: {userData.birthday}</b>
//                 <b>Email: {userData.email}</b>
//             </h6>
//         </div>
//     );
// };

// export default ProfileData;
