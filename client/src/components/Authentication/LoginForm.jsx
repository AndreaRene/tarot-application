import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const LoginForm = () => {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });

    const [loginUser, { error, data }] = useMutation(LOGIN_USER);

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

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        setFormState({
            email: '',
            password: '',
        });
    };

    const test = () => {
        console.log(user.token);
    }

    return (
        <div style={{
            width: '300px',
            margin: 'auto'
        }}
        >
            <Form
                id='loginForm'
                onSubmit={loginFormSubmit}
            >
                <h1
                    className='text-bold'
                    style={{
                        color: 'rgb(170, 142, 80)',
                        fontFamily: 'Amarante-Regular',
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
                        value={formState.email} // Bind value to formState.userName
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
                <Button
                    id='button'
                    type='submit'
                >
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