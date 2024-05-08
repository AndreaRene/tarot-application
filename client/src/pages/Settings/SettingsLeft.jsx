import { useState, useEffect } from 'react';
import CustomSwitch from './Switch';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {
    reformatBirthday,
    formatBirthday,
    formatPhoneNumber,
    formatBirthdayToISO,
} from './FormatedFunctions/FormatedFunctions';
import { GET_ME } from '../../utils/queries';
import { useLazyQuery } from '@apollo/client';
import './Settings.css';

const SettingsLeft = () => {
    const [settings, setSettings] = useState({
        securityEnabled: true,
        birthdayEnabled: true,
        discordEnabled: true,
    });

    const [userData, setUserData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        birthday: '',
        phoneNumber: '',
        email: '',
        error: '',
    });
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        birthday: '',
        phoneNumber: '',
        email: '',
        error: '',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [showSubmitButton, setShowSubmitButton] = useState(false);

    const [getMe, { data: currentUserData }] = useLazyQuery(GET_ME);

    useEffect(() => {
        getMe();
    }, []); // Empty dependency array to run once on component mount
    useEffect(() => {
        if (currentUserData && currentUserData.me) {
            const birthday = reformatBirthday(currentUserData.me.birthday);
            setUserData((prevUserData) => ({
                ...prevUserData,
                username: currentUserData.me.username,
                firstName: currentUserData.me.firstName,
                lastName: currentUserData.me.lastName,
                phoneNumber: currentUserData.me.phoneNumber,
                birthday: birthday,
                email: currentUserData.me.email,
            }));
            setFormData((prevUserData) => ({
                ...prevUserData,
                username: currentUserData.me.username,
                firstName: currentUserData.me.firstName,
                lastName: currentUserData.me.lastName,
                phoneNumber: currentUserData.me.phoneNumber,
                birthday: birthday,
                email: currentUserData.me.email,
            }));
        }
    }, [currentUserData]);

    const toggleDisabled = () => {
        setIsEditing(!isEditing);
        setShowSubmitButton(!isEditing);
        if (isEditing) {
            setFormData(userData);
        } else {
            setFormData(userData);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        let formattedPhoneNumber, formattedBirthday, birthData;
        let currentError = '';

        switch (name) {
            case 'username':
                setFormData((prevUserData) => ({
                    ...prevUserData,
                    username: value,
                }));
                break;
            case 'firstName':
                setFormData((prevUserData) => ({
                    ...prevUserData,
                    firstName: value,
                }));
                break;
            case 'lastName':
                setFormData((prevUserData) => ({
                    ...prevUserData,
                    lastName: value,
                }));
                break;
            case 'birthday':
                // Format birthday input with '/' for display
                birthData = formatBirthday(value);
                formattedBirthday = birthData.formattedBirthday;
                currentError = birthData.error;
                setFormData((prevUserData) => ({
                    ...prevUserData,
                    birthday: formattedBirthday,
                    error: currentError,
                }));
                break;
            case 'phoneNumber':
                // Format phone number input and limit characters
                formattedPhoneNumber = formatPhoneNumber(value);
                setFormData((prevUserData) => ({
                    ...prevUserData,
                    phoneNumber: formattedPhoneNumber,
                }));
                break;
            default:
                break;
        }
    };

    const handleToggle = (key) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [key]: !prevSettings[key],
        }));
    };

    const handleSubmit = async () => {
        try {
            setIsEditing(false);
        } catch (err) {
            console.error('Error saving user data:', err);
        }
    };

    return (
        <section className='left-pro-container'>
            <section
                className='left-pro-content'
                style={{ width: '65%', textAlign: 'center', padding: '20px' }}
            >
                <Form onSubmit={handleSubmit}>
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <h2
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            <div style={{ flex: 1 }}></div>
                            <span style={{ flexShrink: 0 }}>
                                User Information
                            </span>
                            <div
                                style={{
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}
                                onClick={toggleDisabled}
                            >
                                <i
                                    className='fas fa-pencil-alt'
                                    style={{ marginLeft: '10px' }}
                                ></i>
                            </div>
                        </h2>
                        <hr />
                    </div>
                    <div className='fields' style={{ fontWeight: 'bold' }}>
                        <label htmlFor='username'>Username:</label>
                        {isEditing ? (
                            <Form.Control
                                id='username'
                                value={formData.username}
                                onChange={handleChange}
                                name='username'
                                className={`editable`} // Add 'editable' class when editing
                            />
                        ) : (
                            <div id='username' className='disabled'>
                                {userData.username}
                            </div>
                        )}
                    </div>
                    <div className='fields' style={{ fontWeight: 'bold' }}>
                        {isEditing ? (
                            <div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <label htmlFor='name'>First Name:</label>

                                <Form.Control
                                    id='firstName'
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    name='firstName'
                                    className={`editable`} // Add 'editable' class when editing
                                />
                            </div>
                        ) : (
                            <div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <label htmlFor='name'>Name:</label>
                                <div id='name'>
                                    {userData.firstName} {userData.lastName}
                                </div>
                            </div>
                        )}
                    </div>
                    {isEditing && (
                        <div
                            className='fields'
                            style={{
                                fontWeight: 'bold',
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <label htmlFor='name'>Last Name:</label>

                            <Form.Control
                                id='lastName'
                                value={formData.lastName}
                                onChange={handleChange}
                                name='lastName'
                                className={`editable`} // Add 'editable' class when editing
                            />
                        </div>
                    )}
                    <div
                        className='fields birthday'
                        style={{ fontWeight: 'bold' }}
                    >
                        <label
                            htmlFor='birthday'
                            style={{ fontWeight: 'bold' }}
                        >
                            Birthday:
                        </label>
                        {isEditing ? (
                            <Form.Control
                                id='birthday'
                                value={formData.birthday}
                                onChange={handleChange}
                                name='birthday'
                                className={`editable`} // Add 'editable' class when editing
                            />
                        ) : (
                            <div id='birthday' className='disabled'>
                                {userData.birthday}
                            </div>
                        )}
                    </div>
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                fontSize: '12px',
                                marginTop: '0',
                            }}
                        >
                            <CustomSwitch
                                style={{ fontSize: '12px' }}
                                label='Display Birthday Month and Day:'
                                checked={settings.birthdayEnabled}
                                onChange={() => handleToggle('birthdayEnabled')}
                            />
                        </div>
                    </div>
                    <div className='fields' style={{ fontWeight: 'bold' }}>
                        <label htmlFor='email'>Email:</label>
                        {isEditing ? (
                            <Form.Control
                                id='email'
                                value={formData.email}
                                onChange={handleChange}
                                name='email'
                                className={`editable`} // Add 'editable' class when editing
                            />
                        ) : (
                            <div id='email' className='disabled'>
                                {userData.email}
                            </div>
                        )}
                    </div>
                    <div
                        className='fields discord'
                        style={{ fontWeight: 'bold' }}
                    >
                        <label htmlFor='discord' style={{ fontWeight: 'bold' }}>
                            Discord Tag:
                        </label>
                        <div id='discord'>JohnDoe#1234</div>
                    </div>
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                fontSize: '12px',
                                marginTop: '0',
                            }}
                        >
                            <CustomSwitch
                                style={{ fontSize: '12px' }}
                                label='Display Discord Tag:'
                                checked={settings.discordEnabled}
                                onChange={() => handleToggle('discordEnabled')}
                            />
                        </div>
                    </div>
                    <div className='fields' style={{ fontWeight: 'bold' }}>
                        <label htmlFor='phone'>Phone Number:</label>
                        {isEditing ? (
                            <Form.Control
                                id='phoneNumber'
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                name='phoneNumber'
                                className={`editable`} // Add 'editable' class when editing
                            />
                        ) : (
                            <div id='phoneNumber' className='disabled'>
                                {userData.phoneNumber}
                            </div>
                        )}
                    </div>
                    {showSubmitButton && (
                        <Button className='button' type='submit'>
                            Submit
                        </Button>
                    )}
                </Form>
                <div className='password'>
                    <div className='reset'>
                        <h2>Password Reset</h2>
                        <hr className='hr-dash' />
                    </div>
                    <div className='fields'>
                        <label
                            htmlFor='currentPassword'
                            style={{ fontWeight: 'bold' }}
                        >
                            Current Password:
                        </label>
                        <input
                            type='password'
                            id='currentPassword'
                            style={{
                                backgroundColor: '#4F3052',
                                height: '26px',
                                border: '1px solid rgb(168, 148, 103)',
                            }}
                        />
                    </div>
                    <div className='fields'>
                        <label
                            htmlFor='newPassword'
                            style={{ fontWeight: 'bold' }}
                        >
                            New Password:
                        </label>
                        <input
                            type='password'
                            id='newPassword'
                            style={{
                                backgroundColor: '#4F3052',
                                height: '26px',
                                border: '1px solid rgb(168, 148, 103)',
                            }}
                        />
                    </div>
                    <div className='fields'>
                        <label
                            htmlFor='confirmPassword'
                            style={{ fontWeight: 'bold' }}
                        >
                            Confirm New Password:
                        </label>
                        <input
                            type='password'
                            id='confirmPassword'
                            style={{
                                backgroundColor: '#4F3052',
                                height: '26px',
                                border: '1px solid rgb(168, 148, 103)',
                            }}
                        />
                    </div>
                    <div>
                        <button
                            className='button reset-btn'
                            onClick={() =>
                                console.log('Reset Password button clicked')
                            }
                        >
                            Reset Password
                        </button>
                    </div>
                </div>
                <div className='security'>
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <h2>Advanced Security</h2>
                        <hr className='hr-dash' />
                    </div>
                    <div>
                        <div
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <CustomSwitch
                                label={
                                    <span style={{ fontWeight: 'bold' }}>
                                        Advanced Security
                                    </span>
                                }
                                checked={settings.securityEnabled}
                                onChange={() => handleToggle('securityEnabled')}
                            />
                            <div
                                style={{ textAlign: 'start', fontSize: '12px' }}
                            >
                                <p>
                                    {' '}
                                    For the safety of your personal data, we
                                    will only display your information if you
                                    select the field. To learn more, please see
                                    the section in the FAQs regarding data
                                    securtiy.{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default SettingsLeft;
