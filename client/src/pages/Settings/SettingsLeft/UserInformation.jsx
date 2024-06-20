import { useState, useEffect } from 'react';
import CustomSwitch from '../Switch';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {
    reformatBirthday,
    formatBirthday,
    formatPhoneNumber,
    formatBirthdayToISO,
    checkEmail,
    checkDiscordHandle
} from '../FormatedFunctions/FormatedFunctions';
import { GET_ME } from '../../../utils/queries';
import { EDIT_USER_SETTINGS } from '../../../utils/mutations';
import { useLazyQuery, useMutation } from '@apollo/client';
import '../Settings.css';

const UserInformation = () => {
    const [settings, setSettings] = useState({
        birthdayEnabled: true,
        discordEnabled: true
    });

    const [userData, setUserData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        birthday: '',
        email: '',
        phoneNumber: '',
        discordHandle: ''
    });
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        birthday: '',
        email: '',
        phoneNumber: '',
        discordHandle: '',
        birthdayError: '',
        emailError: '',
        discordHandleError: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [showSubmitButton, setShowSubmitButton] = useState(false);

    const [updateUserSettings] = useMutation(EDIT_USER_SETTINGS);
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
                discordHandle: currentUserData.me.discordHandle
            }));
            setFormData((prevUserData) => ({
                ...prevUserData,
                username: currentUserData.me.username,
                firstName: currentUserData.me.firstName,
                lastName: currentUserData.me.lastName,
                phoneNumber: currentUserData.me.phoneNumber,
                birthday: birthday,
                email: currentUserData.me.email,
                discordHandle: currentUserData.me.discordHandle
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

        let formattedPhoneNumber, formattedBirthday, birthData, isValid;
        let currentError = '';

        switch (name) {
            case 'username':
                setFormData((prevUserData) => ({
                    ...prevUserData,
                    username: value
                }));
                break;
            case 'firstName':
                setFormData((prevUserData) => ({
                    ...prevUserData,
                    firstName: value
                }));
                break;
            case 'lastName':
                setFormData((prevUserData) => ({
                    ...prevUserData,
                    lastName: value
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
                    birthdayError: currentError
                }));
                if (!currentError) {
                    setFormData((prevUserData) => ({
                        ...prevUserData,
                        birthdayError: currentError
                    }));
                }
                break;
            case 'email':
                isValid = checkEmail(value);
                if (isValid) {
                    setFormData((prevUserData) => ({
                        ...prevUserData,
                        email: value,
                        emailError: ''
                    }));
                } else {
                    setFormData((prevUserData) => ({
                        ...prevUserData,
                        email: value,
                        emailError: 'Please enter a valid email address'
                    }));
                }
                break;
            case 'discordHandle':
                isValid = checkDiscordHandle(value);
                if (isValid) {
                    setFormData((prevUserData) => ({
                        ...prevUserData,
                        discordHandle: value,
                        discordHandleError: ''
                    }));
                } else {
                    setFormData((prevUserData) => ({
                        ...prevUserData,
                        discordHandle: value,
                        discordHandleError: 'Please enter a valid Discord handle'
                    }));
                }
                break;
            case 'phoneNumber':
                // Format phone number input and limit characters
                formattedPhoneNumber = formatPhoneNumber(value);
                setFormData((prevUserData) => ({
                    ...prevUserData,
                    phoneNumber: formattedPhoneNumber
                }));
                break;
            default:
                break;
        }
    };

    const handleToggle = (key) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [key]: !prevSettings[key]
        }));
    };

    const handleSubmit = async () => {
        try {
            if (!formData.birthdayError && !formData.emailError) {
                const formattedBirthday = formatBirthdayToISO(formData.birthday);

                const userId = await currentUserData.me._id;

                const { data } = await updateUserSettings({
                    variables: {
                        userId: userId,
                        input: {
                            username: formData.username,
                            firstName: formData.firstName,
                            lastName: formData.lastName,
                            birthday: formattedBirthday,
                            phoneNumber: formData.phoneNumber,
                            discordHandle: formData.discordHandle
                        }
                    }
                });
                console.log(data);
            }
        } catch (err) {
            console.error('Error saving user data:', err);
        }
        setIsEditing(!isEditing);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h2
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        whiteSpace: 'nowrap'
                    }}>
                    <div style={{ flex: 1 }}></div>
                    <span style={{ flexShrink: 0 }}>User Information</span>
                    <div
                        style={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}
                        onClick={toggleDisabled}>
                        <i
                            className='fas fa-pencil-alt'
                            style={{ marginLeft: '10px' }}></i>
                    </div>
                </h2>
                <hr />
            </div>
            <div
                className='fields'
                style={{ fontWeight: 'bold' }}>
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
                    <div
                        id='username'
                        className='disabled'>
                        {userData.username}
                    </div>
                )}
            </div>
            <div
                className='fields'
                style={{ fontWeight: 'bold' }}>
                {isEditing ? (
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
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
                            justifyContent: 'space-between'
                        }}>
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
                        justifyContent: 'space-between'
                    }}>
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
                style={{ fontWeight: 'bold', marginBottom: '15px' }}>
                <label
                    htmlFor='birthday'
                    style={{ fontWeight: 'bold' }}>
                    Birthday:
                </label>
                {isEditing ? (
                    <Form.Control
                        id='birthday'
                        value={formData.birthday}
                        onChange={handleChange}
                        name='birthday'
                        maxLength='10' // Restricts user to only input correct length of values
                        className={`editable`} // Add 'editable' class when editing
                    />
                ) : (
                    <div
                        id='birthday'
                        className='disabled'>
                        {userData.birthday}
                    </div>
                )}
            </div>
            {formData.birthdayError && (
                <div
                    id='birthdayError'
                    style={{
                        width: '100%',
                        display: 'flex',
                        alignitems: 'center',
                        justifyContent: 'end',
                        marginTop: '10px',
                        color: '#FFCCCC'
                    }}>
                    {formData.birthdayError}
                </div>
            )}
            {!isEditing && (
                <div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            fontSize: '12px',
                            marginTop: '0'
                        }}>
                        <CustomSwitch
                            style={{ fontSize: '12px' }}
                            label='Display Birthday Month and Day:'
                            checked={settings.birthdayEnabled}
                            onChange={() => handleToggle('birthdayEnabled')}
                        />
                    </div>
                </div>
            )}
            <div
                className='fields'
                style={{ fontWeight: 'bold' }}>
                <label htmlFor='email'>Email:</label>
                {isEditing ? (
                    <Form.Control
                        type='text'
                        id='email'
                        value={formData.email}
                        onChange={handleChange}
                        name='email'
                        disabled
                        className={`editable`} // Add 'editable' class when editing
                    />
                ) : (
                    <div
                        id='email'
                        className='disabled'>
                        {userData.email}
                    </div>
                )}
            </div>
            {formData.emailError && (
                <div
                    id='birthdayError'
                    style={{
                        width: '100%',
                        display: 'flex',
                        alignitems: 'center',
                        justifyContent: 'end',
                        marginTop: '10px',
                        color: '#FFCCCC'
                    }}>
                    {formData.emailError}
                </div>
            )}

            <div
                className='fields discord'
                style={{ fontWeight: 'bold', marginBottom: '15px' }}>
                <label
                    htmlFor='discord'
                    style={{ fontWeight: 'bold' }}>
                    Discord Tag:
                </label>
                {isEditing ? (
                    <Form.Control
                        id='discordHandle'
                        value={formData.discordHandle}
                        onChange={handleChange}
                        name='discordHandle'
                        className={`editable`} // Add 'editable' class when editing
                    />
                ) : (
                    <div
                        id='discord'
                        className='disabled'>
                        {userData.discordHandle}
                    </div>
                )}
            </div>
            {formData.discordHandleError && (
                <div
                    id='discordHandleError'
                    style={{
                        width: '100%',
                        display: 'flex',
                        alignitems: 'center',
                        justifyContent: 'end',
                        marginTop: '10px',
                        color: '#FFCCCC'
                    }}>
                    {formData.discordHandleError}
                </div>
            )}
            {!isEditing && (
                <div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            fontSize: '12px',
                            marginTop: '0'
                        }}>
                        <CustomSwitch
                            style={{ fontSize: '12px' }}
                            label='Display Discord Tag:'
                            checked={settings.discordEnabled}
                            maxLength='32'
                            onChange={() => handleToggle('discordEnabled')}
                        />
                    </div>
                </div>
            )}
            <div
                className='fields'
                style={{ fontWeight: 'bold' }}>
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
                    <div
                        id='phoneNumber'
                        className='disabled'>
                        {userData.phoneNumber}
                    </div>
                )}
            </div>
            {showSubmitButton && (
                <Button
                    className='button'
                    type='submit'>
                    Submit
                </Button>
            )}
        </Form>
    );
};

export default UserInformation;
