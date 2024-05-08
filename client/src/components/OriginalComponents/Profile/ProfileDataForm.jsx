// import { useState, useEffect } from 'react';
// even
// import Form from 'react-bootstrap/Form';

// import { useMutation, useLazyQuery } from '@apollo/client';
// import { EDIT_USER_settings } from '../../utils/mutations';
// import { GET_ME } from '../../utils/queries';

// const settingsDataForm = () => {
//     const [userData, setUserData] = useState({
//         firstName: '',
//         lastName: '',
//         birthday: '',
//         phoneNumber: '',
//         error: '',
//     });

//     const [updateUsersettings] = useMutation(EDIT_USER_settings);
//     const [getMe, { data: currentUserData }] = useLazyQuery(GET_ME);

//     // Gathers data when loading into page
//     useEffect(() => {
//         getMe();
//     }, []); // Empty dependency array to run once on component mount

//     const reformatBirthday = () => {
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

//     useEffect(() => {
//         if (currentUserData && currentUserData.me) {
//             const birthday = reformatBirthday();
//             setUserData((prevUserData) => ({
//                 ...prevUserData,
//                 firstName: currentUserData.me.firstName,
//                 lastName: currentUserData.me.lastName,
//                 phoneNumber: currentUserData.me.phoneNumber,
//                 birthday: birthday,
//             }));
//         }
//     }, [currentUserData]);

//     // formatting birthday to automatically display '/' and keep the integers in the correct format
//     const formatBirthday = (value) => {
//         // Remove any non-digit characters from the input
//         const cleaned = value.replace(/\D/g, '');

//         // Apply formatting logic based on the length of the cleaned birthday
//         let formattedBirthday = '';
//         let error = '';

//         for (let i = 0; i < cleaned.length; i++) {
//             // Insert '/' at appropriate positions for display only
//             if (i === 2 || i === 4) {
//                 const part = parseInt(cleaned.substring(i - 2, i), 10);
//                 if (part < 1 || part > (i === 2 ? 12 : 31)) {
//                     // Invalid month (MM) or day (DD)
//                     error = 'Invalid month (MM) or day (DD)';
//                     break;
//                 }
//                 formattedBirthday += '/';
//             }

//             if (i === 7 && cleaned.length === 8) {
//                 // Validate year range (last 115 years to now)
//                 const year = parseInt(cleaned.substring(i - 3, i + 1), 10);
//                 const currentYear = new Date().getFullYear();
//                 if (year < currentYear - 115 || year > currentYear) {
//                     // Invalid year
//                     error = 'Invalid year, must be within the past 115 years';
//                 } else {
//                     error = '';
//                 }
//             }

//             formattedBirthday += cleaned[i];
//         }
//         return { formattedBirthday, error };
//     };

//     const formatPhoneNumber = (value) => {
//         // Remove any non-digit characters from the input
//         const cleaned = value.replace(/\D/g, '');

//         // Apply formatting logic based on the length of the cleaned phone number
//         let formattedPhoneNumber = '';
//         if (cleaned.length > 0) {
//             formattedPhoneNumber += '(' + cleaned.substring(0, 3);
//         }
//         if (cleaned.length > 3) {
//             formattedPhoneNumber += ') ' + cleaned.substring(3, 6);
//         }
//         if (cleaned.length > 6) {
//             formattedPhoneNumber += '-' + cleaned.substring(6, 10);
//         }

//         return formattedPhoneNumber;
//     };

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         let formattedPhoneNumber, formattedBirthday, birthData;
//         let currentError = '';

//         switch (name) {
//             case 'firstName':
//                 setUserData((prevUserData) => ({
//                     ...prevUserData,
//                     firstName: value,
//                 }));
//                 break;
//             case 'lastName':
//                 setUserData((prevUserData) => ({
//                     ...prevUserData,
//                     lastName: value,
//                 }));
//                 break;
//             case 'birthday':
//                 // Format birthday input with '/' for display
//                 birthData = formatBirthday(value);
//                 formattedBirthday = birthData.formattedBirthday;
//                 currentError = birthData.error;
//                 setUserData((prevUserData) => ({
//                     ...prevUserData,
//                     birthday: formattedBirthday,
//                     error: currentError,
//                 }));
//                 break;
//             case 'phoneNumber':
//                 // Format phone number input and limit characters
//                 formattedPhoneNumber = formatPhoneNumber(value);
//                 setUserData((prevUserData) => ({
//                     ...prevUserData,
//                     phoneNumber: formattedPhoneNumber,
//                 }));
//                 break;
//             default:
//                 break;
//         }
//     };

//     const formatBirthdayToISO = (value) => {
//         // Remove any non-digit characters from the input
//         const cleaned = value.replace(/\D/g, '');

//         // Parse the cleaned input to extract month, day, and year
//         const month = cleaned.substring(0, 2);
//         const day = cleaned.substring(2, 4);
//         const year = cleaned.substring(4, 8);

//         // Rearrange the components to form the desired format (YYYY-MM-DD)
//         const formattedBirthday = `${year}-${month}-${day}`;

//         return formattedBirthday;
//     };

//     const gettingStartedFormSubmit = async (event) => {
//         event.preventDefault();

//         // Send userData.birthday to be YYYY-MM-DD
//         const formattedBirthday = formatBirthdayToISO(userData.birthday);
//         // console.log('Formatted birthday:', formattedBirthday);
//         // console.log(currentUserData.me._id);

//         const userId = await currentUserData.me._id; // waits until server sends user data

//         try {
//             const { data } = await updateUsersettings({
//                 variables: {
//                     userId: userId,
//                     input: {
//                         firstName: userData.firstName,
//                         lastName: userData.lastName,
//                         birthday: formattedBirthday,
//                         phoneNumber: userData.phoneNumber,
//                     },
//                 },
//             });

//             console.log(data);
//         } catch (e) {
//             console.error(e);
//         }

//         setUserData({
//             firstName: '',
//             lastName: '',
//             birthday: '',
//             phoneNumber: '',
//             error: '',
//         });
//     };

//     return (
//         <div
//             style={{
//                 width: '275px',
//                 margin: 'auto',
//                 marginTop: '10px',
//             }}
//         >
//             <Form id='signupForm' onSubmit={gettingStartedFormSubmit}>
//                 <h1
//                     className='text-bold'
//                     style={{
//                         color: 'rgb(168, 148, 103)',
//                         fontFamily: 'Playfair Display',
//                     }}
//                 >
//                     Getting Started
//                 </h1>
//                 <Form.Group
//                     className='mb-3 text-white'
//                     controlId='formBasicusername'
//                 >
//                     <Form.Label>Enter First Name</Form.Label>
//                     <Form.Control
//                         type='text'
//                         placeholder='John'
//                         value={userData.firstName} // Bind value to userData.firstName
//                         name='firstName'
//                         onChange={handleChange}
//                     />
//                 </Form.Group>
//                 <Form.Group
//                     className='mb-3 text-white'
//                     controlId='formBasicusername'
//                 >
//                     <Form.Label>Enter Last Name</Form.Label>
//                     <Form.Control
//                         type='text'
//                         placeholder='Smith'
//                         value={userData.lastName} // Bind value to userData.lastName
//                         name='lastName'
//                         onChange={handleChange}
//                     />
//                 </Form.Group>
//                 <Form.Group
//                     className='mb-3 text-white'
//                     controlId='formBasicEmailAddress'
//                 >
//                     <Form.Label>Enter Birthday</Form.Label>
//                     <Form.Control
//                         type='text'
//                         placeholder='MM/DD/YYYY'
//                         maxLength='10' // Restricts user to only input correct length of values
//                         value={userData.birthday} // Bind value to userData.birthday
//                         name='birthday'
//                         onChange={handleChange}
//                     />
//                 </Form.Group>
//                 <Form.Group
//                     className='mb-3 text-white'
//                     controlId='formBasicPassword'
//                 >
//                     <Form.Label>Enter Phone Number</Form.Label>
//                     <Form.Control
//                         type='text'
//                         placeholder='(xxx) xxx-xxxx'
//                         maxLength='14' // Restricts user to only input correct length of values
//                         value={userData.phoneNumber} // Bind value to userData.phoneNumber
//                         name='phoneNumber'
//                         onChange={handleChange}
//                     />
//                 </Form.Group>
//                 {userData.error && (
//                     <p style={{ color: 'red' }}>{userData.error}</p>
//                 )}
//                 <Button id='button' type='submit' disabled={!!userData.error}>
//                     Submit
//                 </Button>
//             </Form>
//         </div>
//     );
// };

// export default settingsDataForm;
