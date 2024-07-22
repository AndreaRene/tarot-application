import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { checkEmail } from '../FormatedFunctions/FormatedFunctions';

import { GET_ME } from '../../../utils/queries';
import { EDIT_USER_EMAIL } from '../../../utils/mutations';
import { useLazyQuery, useMutation } from '@apollo/client';
import './SettingsLeft.css';

const EmailReset = () => {
    const [resetEmail] = useMutation(EDIT_USER_EMAIL);
    const [getMe, { data: currentUserData }] = useLazyQuery(GET_ME);

    useEffect(() => {
        getMe();
    }, []); // Empty dependency array to run once on component mount

    const [emailInfo, setEmailInfo] = useState({
        newEmail: '',
        currentPassword: '',
        emailError: ''
    });

    const [error, setError] = useState(null);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

    const handleResetEmail = async (event) => {
        const { name, value } = event.target;
        setError(null);

        let isValid;

        if (emailInfo.emailError || value === '') {
            setSubmitButtonDisabled(true);
        } else {
            setSubmitButtonDisabled(false);
        }

        switch (name) {
            case 'newEmail':
                isValid = checkEmail(value);
                if (isValid) {
                    setEmailInfo({
                        ...emailInfo,
                        newEmail: value,
                        emailError: ''
                    });
                } else if (value.length !== 0) {
                    setEmailInfo({
                        ...emailInfo,
                        newEmail: value,
                        emailError: 'Please enter a valid email address'
                    });
                } else {
                    setEmailInfo({
                        ...emailInfo,
                        newEmail: value,
                        emailError: ''
                    });
                }
                break;
            case 'currentPassword1':
                setEmailInfo({
                    ...emailInfo,
                    currentPassword: value
                });
                break;
            default:
                break;
        }
    };

    const resetPasswordSubmit = async (event) => {
        event.preventDefault();

        const userId = await currentUserData.me._id; // waits until server sends user data

        try {
            const { data } = await resetEmail({
                variables: {
                    userId: userId,
                    input: {
                        email: emailInfo.newEmail,
                        currentPassword: emailInfo.currentPassword
                    }
                }
            });
            setEmailInfo({
                consoleError: false
            });
        } catch (e) {
            setError(e.message);
            console.error(e);
        }

        setEmailInfo({
            ...emailInfo,
            newEmail: '',
            currentPassword: ''
        });
    };

    return (
        <Form onSubmit={resetPasswordSubmit}>
            <div className='reset'>
                <h2>Email Reset</h2>
                <hr className='hr-dash' />
            </div>
            <div className='fields-left'>
                <label
                    className='field-items'
                    htmlFor='currentPassword'>
                    New Email:
                </label>
                <input
                    type='text'
                    id='newEmail'
                    value={emailInfo.newEmail}
                    name='newEmail'
                    onChange={handleResetEmail}
                    className='reset-inputs'
                />
            </div>
            {emailInfo.emailError && <p style={{ color: '#FFCCCC' }}>{emailInfo.emailError}</p>}
            <div className='fields'>
                <label
                    className='field-items'
                    htmlFor='newPassword'>
                    Current Password:
                </label>
                <input
                    type='password'
                    id='currentPassword1'
                    value={emailInfo.currentPassword}
                    name='currentPassword1'
                    onChange={handleResetEmail}
                    className='reset-inputs'
                />
            </div>
            {error && <p style={{ color: '#FFCCCC' }}>{error}</p>}
            <div>
                <Button
                    className='button reset-btn'
                    onClick={() => console.log('Reset Email button clicked')}
                    type='submit'
                    disabled={submitButtonDisabled}>
                    Reset Email
                </Button>
            </div>
        </Form>
    );
};

export default EmailReset;
