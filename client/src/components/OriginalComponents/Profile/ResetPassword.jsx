// import { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// import { useMutation, useLazyQuery } from '@apollo/client';
// import { EDIT_USER_PASSWORD } from '../../utils/mutations';
// import { GET_ME } from '../../utils/queries';

// const ResetPassword = () => {
//     const [passwordInfo, setPasswordInfo] = useState({
//         currentPassword: '',
//         newPassword: '',
//         confirmNewPassword: '',
//         error: '',
//     });

//     const [resetPassword] = useMutation(EDIT_USER_PASSWORD);
//     const [getMe, { data: currentUserData }] = useLazyQuery(GET_ME);

//     // Gathers data when loading into page
//     useEffect(() => {
//         getMe();
//     }, []); // Empty dependency array to run once on component mount

//     const handleChange = async (event) => {
//         const { name, value } = event.target;

//         switch (name) {
//             case 'currentPassword':
//                 setPasswordInfo({
//                     ...passwordInfo,
//                     currentPassword: value,
//                 });
//                 break;
//             case 'newPassword':
//                 setPasswordInfo({
//                     ...passwordInfo,
//                     newPassword: value,
//                 });
//                 break;
//             case 'confirmNewPassword':
//                 setPasswordInfo({
//                     ...passwordInfo,
//                     confirmNewPassword: value,
//                 });
//                 break;
//             default:
//                 break;
//         }
//     };

//     const resetPasswordSubmit = async (event) => {
//         event.preventDefault();

//         if (passwordInfo.confirmNewPassword !== passwordInfo.newPassword) {
//             setPasswordInfo((prevPasswordInfo) => ({
//                 ...prevPasswordInfo,
//                 error: 'Passwords do not match',
//             }));
//             return;
//         }

//         const userId = await currentUserData.me._id; // waits until server sends user data

//         try {
//             const { data } = await resetPassword({
//                 variables: {
//                     userId: userId,
//                     input: {
//                         currentPassword: passwordInfo.currentPassword,
//                         newPassword: passwordInfo.newPassword,
//                     },
//                 },
//             });
//             console.log(data);
//         } catch (e) {
//             console.error(e);
//         }

//         setPasswordInfo({
//             currentPassword: '',
//             newPassword: '',
//             confirmNewPassword: '',
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
//             <Form id='signupForm' onSubmit={resetPasswordSubmit}>
//                 <h1
//                     className='text-bold'
//                     style={{
//                         color: '#A89467',
//                         fontFamily: 'Playfair Display',
//                     }}
//                 >
//                     Password Reset
//                 </h1>
//                 <Form.Group
//                     className='mb-3 text-white'
//                     controlId='formBasicusername'
//                 >
//                     <Form.Label>Current Password</Form.Label>
//                     <Form.Control
//                         type='password'
//                         value={passwordInfo.currentPassword} // Bind value to passwordInfo.currentPassword
//                         name='currentPassword'
//                         onChange={handleChange}
//                     />
//                 </Form.Group>
//                 <Form.Group
//                     className='mb-3 text-white'
//                     controlId='formBasicusername'
//                 >
//                     <Form.Label>New Password</Form.Label>
//                     <Form.Control
//                         type='password'
//                         value={passwordInfo.newPassword} // Bind value to passwordInfo.newPassword
//                         name='newPassword'
//                         onChange={handleChange}
//                     />
//                 </Form.Group>
//                 <Form.Group
//                     className='mb-3 text-white'
//                     controlId='formBasicEmailAddress'
//                 >
//                     <Form.Label>Confirm New Password</Form.Label>
//                     <Form.Control
//                         type='password'
//                         value={passwordInfo.confirmNewPassword} // Bind value to passwordInfo.confirmNewPassword
//                         name='confirmNewPassword'
//                         onChange={handleChange}
//                     />
//                 </Form.Group>

//                 {passwordInfo.error && (
//                     <p style={{ color: 'red' }}>{passwordInfo.error}</p>
//                 )}
//                 <Button id='button' type='submit'>
//                     Submit
//                 </Button>
//             </Form>
//         </div>
//     );
// };
// export default ResetPassword;
