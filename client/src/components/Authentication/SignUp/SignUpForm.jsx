import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useMutation, useLazyQuery } from '@apollo/client';
import { SIGNUP_USER } from '../../../utils/mutations';
import { CHECK_USERNAME } from '../../../utils/queries';

import Auth from '../../../utils/auth';

const username_pattern = /^[A-Za-z][A-Za-z0-9_]{4,19}$/;
const email_pattern = /.+@.+\..+/;
const password_pattern =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,25}$/;

const SignupForm = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [signUpUser] = useMutation(SIGNUP_USER);
    const [usernameChecker] = useLazyQuery(CHECK_USERNAME);
    const [error, setError] = useState(null);
    const [unerror, setUnerror] = useState(null);
    // const [timeout, setTimeout] = useState(null);

    const handleChange = async (event) => {
        const { name, value } = event.target;

        let checkUser = true;
        // let uniqueUser = false;
        let isValid = true;
        switch (name) {
            case 'username':
                isValid = username_pattern.test(value);
                if (isValid) {
                    try {
                        const { data } = await usernameChecker({
                            variables: { username: value },
                        });
                        // lines 44 - 48 do not do anything. If username is available then usernameChecker returns null which is an error and skips everything
                        const usernameCheckerValue =
                            data.usernameChecker.username;
                        // console.log(data.usernameChecker);
                        if (usernameCheckerValue === null) {
                            // console.log('available username');
                            // uniqueUser = true; // Username is unique
                        } else {
                            // console.log('Username already exists');
                            checkUser = false;
                        }
                    } catch (error) {
                        console.error('Error checking username:', error);
                    }
                } else {
                    setError(`Invalid ${name} format`);
                }

                break;
            case 'email':
                isValid = email_pattern.test(value);
                break;
            case 'password':
                isValid = password_pattern.test(value);
                break;
            case 'password-confirmation':
                if (formState.password !== value) {
                    isValid = false;
                }
                break;
            default:
                break;
        }

        if (!isValid) {
            // console.log('Invalid  format');
            setError(`Invalid ${name} format`);
        } else {
            setError(null);
        }

        if (!checkUser) {
            setError('Username already exists');
            setUnerror(null);
        } else if (isValid) {
            setUnerror('Avaliable username');
        } else {
            setUnerror(null);
        }

        setFormState({
            ...formState,
            [name]: value,
        });
    };
    // console.log(startTimeout);
    // const startTimeout = () => {
    //     const id = setTimeout(() => {
    //         // Timeout logic
    //         console.log('Timeout Completed!');
    //     }, 5000); // Timeout duration in milliseconds
    // };

    // // Function to clear the timeout
    // const clearTimeout = () => {
    //     clearTimeout(timeout);
    //     setTimeout(null);
    // };

    // if (formState.username.length >= 5 && formState.password.length <= 20) {
    //     console.log('username');
    // }

    const signupFormSubmit = async (event) => {
        event.preventDefault();
        // console.log(formState);
        try {
            const { data } = await signUpUser({
                variables: { ...formState },
            });

            // Log in the user
            Auth.login(data.signup.token);
        } catch (e) {
            console.error(e);
        }

        setFormState({
            username: '',
            email: '',
            password: '',
        });
    };

    return (
        <div
            style={{
                width: '275px',
                margin: 'auto',
                marginTop: '10px',
            }}
        >
            <Form id='signupForm' onSubmit={signupFormSubmit}>
                <h1
                    className='text-bold'
                    style={{
                        color: 'rgb(168, 148, 103)',
                        fontFamily: 'Playfair Display',
                    }}
                >
                    Sign Up
                </h1>
                <Form.Group
                    className='mb-3 text-white'
                    controlId='formBasicusername'
                >
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type='text' // Change type to 'text'
                        placeholder='Enter Username'
                        value={formState.username} // Bind value to formState.username
                        name='username' // Add name attribute
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group
                    className='mb-3 text-white'
                    controlId='formBasicEmailAddress'
                >
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email' // Change type to 'email'
                        placeholder='Enter Email Address'
                        value={formState.email} // Bind value to formState.email
                        name='email' // Add name attribute
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group
                    className='mb-3 text-white'
                    controlId='formBasicPassword'
                >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={formState.password} // Bind value to formState.password
                        name='password' // Add name attribute
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group
                    className='mb-3 text-white'
                    controlId='formBasicPasswordConfirmation'
                >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type='password'
                        name='password-confirmation'
                        placeholder='Confirm Password'
                        value={formState.passwordConfirm} // Bind value to formState.passwordConfirm
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group
                    controlId='formBasicTerms'
                    className='mb-3 form-check text-white'
                >
                    <Form.Check
                        type='checkbox'
                        label={
                            <span>
                                I have read and agree to these{' '}
                                <a href='/Terms' target='_blank' id='checkbox'>
                                    Terms
                                </a>
                                .
                            </span>
                        }
                        required
                        style={{
                            marginLeft: 0,
                            marginRight: '8px',
                            padding: 0,
                        }}
                    />
                </Form.Group>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {unerror && <p style={{ color: 'green' }}>{unerror}</p>}
                <Button id='button' type='submit'>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default SignupForm;
