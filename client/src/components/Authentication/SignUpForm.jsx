import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const userName_pattern = /^[A-Za-z][A-Za-z0-9_]{4,19}$/;
const email_pattern = /.+@.+\..+/;
const password_pattern =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,25}$/;

const SignupForm = () => {
    const [formState, setFormState] = useState({
        userName: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const [signUpUser] = useMutation(SIGNUP_USER);
    const [error, setError] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;

        let isValid = true;
        switch (name) {
            case 'userName':
                isValid = userName_pattern.test(value);
                break;
            case 'email':
                isValid = email_pattern.test(value);
                break;
            case 'password':
                isValid = password_pattern.test(value);
                break;
            case 'passwordConfirm':
                if (formState.password !== value) {
                    isValid = false;
                }
                break;
            default:
                break;
        }

        if (!isValid) {
            console.log('Invalid  format');
            setError(`Invalid ${name} format`);
        } else {
            setError(null);
        }

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const signupFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await signUpUser({
                variables: { ...formState },
            });

            Auth.login(data.signup.token);
        } catch (e) {
            console.error(e);
        }

        setFormState({
            userName: '',
            email: '',
            password: '',
        });
    };

    return (
        <div
            style={{
                width: '300px',
                margin: 'auto',
            }}
        >
            <Form id='signupForm' onSubmit={signupFormSubmit}>
                <h1
                    className='text-bold'
                    style={{
                        color: 'rgb(170, 142, 80)',
                        fontFamily: 'Amarante-Regular',
                    }}
                >
                    Sign Up
                </h1>
                <Form.Group
                    className='mb-3 text-white'
                    controlId='formBasicUsername'
                >
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type='text' // Change type to 'text'
                        placeholder='Enter Username'
                        name='userName' // Add name attribute
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
                        name='passwordConfirm'
                        placeholder='Confirm Password'
                        value={formState.passwordConfirm} // Bind value to formState.passwordConf
                        onChange={handleChange}
                    />
                </Form.Group>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Button id='button' type='submit'>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default SignupForm;
