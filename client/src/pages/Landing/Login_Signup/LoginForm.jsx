import { useState } from 'react';
import { login } from '../../../utils/auth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../../utils/mutations';

const LoginForm = () => {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });

    const [loginUser] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const loginFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await loginUser({
                variables: { ...formState },
            });

            login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        setFormState({
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
            <Form id='loginForm' onSubmit={loginFormSubmit}>
                <h1
                    className='text-bold'
                    style={{
                        color: 'rgb(168, 148, 103)',
                        fontFamily: 'Playfair Display',
                    }}
                >
                    Login
                </h1>
                <Form.Group
                    className='mb-3 text-white'
                    controlId='formBasicEmail'
                >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={formState.email} // Bind value to formState.username
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
                        placeholder='Password'
                        value={formState.password} // Bind value to formState.password
                        name='password' // Add name attribute
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Text className='text-white'>
                    Forget your password? Reset here.
                </Form.Text>
                <br />
                <Button id='button' type='submit'>
                    Submit
                </Button>
            </Form>
            {/* {error && (
                <div className="my-3 p-3 bg-danger text-white">
                    {error.message}
                </div>
            )} */}
        </div>
    );
};

export default LoginForm;
