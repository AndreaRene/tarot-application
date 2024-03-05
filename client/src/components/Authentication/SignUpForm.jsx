import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useForm } from 'react-hook-form';

import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const SignupForm = () => {
    const [formState, setFormState] = useState({
        userName: '',
        email: '',
        password: '',
    });

    const {
        register,
        formState: { errors },
    } = useForm();

    const [signUpUser] = useMutation(SIGNUP_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

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

    console.log(errors);

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
                        {...register('userName', {
                            required: 'Username is required',
                            pattern: {
                                value: /^[A-Za-z][A-Za-z0-9_]{4,19}$/,
                                message: 'Invalid username format',
                            },
                        })}
                        name='userName' // Add name attribute
                        onChange={handleChange}
                    />
                    {errors.userName && (
                        <p style={{ color: 'red' }}>
                            {errors.userName.message}
                        </p>
                    )}
                    {/* {errors.userName?.type === 'required' &&
                        'Username is Required'} */}
                    {/* {errors.userName?.type === 'pattern' && 'Invalid Username'} */}
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
                        placeholder='Confirm Password'
                    />
                </Form.Group>
                <Button id='button' type='submit'>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default SignupForm;
