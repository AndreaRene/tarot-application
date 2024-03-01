import { Modal } from '@mui/material';
// import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const SignupForm = () => {
    const [formState, setFormState] = useState({
        userName: '',
        email: '',
        password: '',
    });
    const [signUpUser, { data }] = useMutation(SIGNUP_USER);

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

            Auth.login(data.signUpUser.token);
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
        <div style={{ width: '300px', margin: 'auto' }}>
            <Form id='signupForm'>
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
                        type='username'
                        placeholder='Enter Username'
                        // value={formState.username}
                        // onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group
                    className='mb-3 text-white'
                    controlId='formBasicEmailAddress'
                >
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='emailaddress'
                        placeholder='Enter Email Address'
                        // value={formState.email}
                        // onChange={handleChange}
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
                        // value={formState.password}
                        // onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group
                    className='mb-3 text-white'
                    controlId='formBasicPasswordConfirmation'
                >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                    // type='password'
                    // placeholder='Confirm Password'
                    />
                </Form.Group>

                <Button
                    id='button'
                    type='submit'
                    // onClick={signupFormSubmit}
                >
                    Submit
                </Button>
            </Form>
        </div>
    );
};

const SignupModal = ({ open, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='signup-modal-title'
            style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
            <div
                id='signupForm'
                style={{ padding: '50px', borderRadius: '8px' }}
            >
                <SignupForm />
            </div>
        </Modal>
    );
};

export default SignupModal;
