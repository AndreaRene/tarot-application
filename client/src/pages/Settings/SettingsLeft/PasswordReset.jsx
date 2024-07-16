import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { GET_ME } from '../../../utils/queries';
import { EDIT_USER_PASSWORD } from '../../../utils/mutations';
import { useLazyQuery, useMutation } from '@apollo/client';
import './SettingsLeft.css';

const PasswordReset = () => {
    const [resetPassword] = useMutation(EDIT_USER_PASSWORD);
    const [getMe, { data: currentUserData }] = useLazyQuery(GET_ME);

    useEffect(() => {
        getMe();
    }, []); // Empty dependency array to run once on component mount

    const [passwordInfo, setPasswordInfo] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
        error: ''
    });

    const handleResetPassword = async (event) => {
        const { name, value } = event.target;

        switch (name) {
            case 'currentPassword':
                setPasswordInfo({
                    ...passwordInfo,
                    currentPassword: value
                });
                console.log('currentPassword:', value);
                break;
            case 'newPassword':
                setPasswordInfo({
                    ...passwordInfo,
                    newPassword: value
                });
                console.log('newPassword:', value);
                break;
            case 'confirmNewPassword':
                setPasswordInfo({
                    ...passwordInfo,
                    confirmNewPassword: value
                });
                console.log('confirmNewPassword:', value);
                break;
            default:
                break;
        }
    };

    const resetPasswordSubmit = async (event) => {
        event.preventDefault();

        if (passwordInfo.confirmNewPassword !== passwordInfo.newPassword) {
            setPasswordInfo((prevPasswordInfo) => ({
                ...prevPasswordInfo,
                error: 'Passwords do not match'
            }));
            return;
        }

        const userId = await currentUserData.me._id; // waits until server sends user data

        try {
            const { data } = await resetPassword({
                variables: {
                    userId: userId,
                    input: {
                        currentPassword: passwordInfo.currentPassword,
                        newPassword: passwordInfo.newPassword
                    }
                }
            });
            console.log(data);
        } catch (e) {
            console.error(e);
        }

        setPasswordInfo({
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
            error: ''
        });
    };

    return (
        <Form onSubmit={resetPasswordSubmit}>
            <div className='reset'>
                <h2>Password Reset</h2>
                <hr className='hr-dash' />
            </div>
            <div className='fields-left'>
                <label
                    className='field-items'
                    htmlFor='currentPassword'>
                    Current Password:
                </label>
                <input
                    type='password'
                    id='currentPassword'
                    className='reset-inputs'
                    value={passwordInfo.currentPassword}
                    name='currentPassword'
                    onChange={handleResetPassword}
                />
            </div>
            <div className='fields-left'>
                <label
                    className='field-items'
                    htmlFor='newPassword'>
                    New Password:
                </label>
                <input
                    type='password'
                    id='newPassword'
                    value={passwordInfo.newPassword}
                    name='newPassword'
                    onChange={handleResetPassword}
                    className='reset-inputs'
                />
            </div>
            <div className='fields'>
                <label
                    className='field-items'
                    htmlFor='confirmPassword'>
                    Confirm New Password:
                </label>
                <input
                    type='password'
                    id='confirmPassword'
                    value={passwordInfo.confirmNewPassword}
                    name='confirmNewPassword'
                    onChange={handleResetPassword}
                    className='reset-inputs'
                />
            </div>
            {passwordInfo.error && <p style={{ color: '#FFCCCC' }}>{passwordInfo.error}</p>}
            <div>
                <Button
                    className='button reset-btn'
                    onClick={() => console.log('Reset Password button clicked')}
                    type='submit'>
                    Reset Password
                </Button>
            </div>
        </Form>
    );
};

export default PasswordReset;
