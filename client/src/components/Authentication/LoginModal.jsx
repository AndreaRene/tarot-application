import { Modal } from '@mui/material';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {
    return (
        <div style={{ marginTop: '200px', width: '25%', margin: 'auto' }}>
            <Form id='loginForm'>
                <h1 className='text-bold' style={{ color: 'rgb(170, 142, 80)', fontFamily: 'Amarante-Regular' }}>
                    Log In
                </h1>
                <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Text className="text-white">
                    Forget your password? Reset here.
                </Form.Text>
                <br />
                <Button id='button' type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

const LoginModal = ({ open, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="login-modal-title"
        >
            <div id="loginForm">
                <LoginForm />
            </div>
        </Modal>
    )
}

export default LoginModal;