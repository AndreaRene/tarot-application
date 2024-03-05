import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'; 

import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../../utils/mutations';


import Auth from '../../utils/auth';

const SignupForm = ({ onSignupSuccess }) => {
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        userName: '',
        email: '',
        password: '',
    });

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
        try {
            const { data } = await signUpUser({
                variables: { ...formState },
            });
    
            Auth.login(data.signup.token);
            onSignupSuccess(data.signup.user); // Pass user data to the callback function
            navigate('/Profile');
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
        <div style={{
            width: '300px',
            margin: 'auto'
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
                        value={formState.userName} // Bind value to formState.userName
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
                        placeholder='Confirm Password'
                    />
                </Form.Group>
                <Button
                    id='button'
                    type='submit'
                >
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default SignupForm;

