import { Modal } from '@mui/material';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignupForm = () => {
    return (
        <div style={{  width: '300px', margin: 'auto' }}>
            <Form id='signupForm'>
                <h1 className='text-bold' style={{ color: 'rgb(170, 142, 80)', fontFamily: 'Amarante-Regular' }}>
                    Sign Up
                </h1>
                <Form.Group className="mb-3 text-white" controlId="formBasicEmailAddress">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="username" placeholder="Enter Email Address" />
                </Form.Group>
                <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
                <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
               
                <Button id='button' type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

const SignupModal = ({ open, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="signup-modal-title"
            style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
            <div id="signupForm" style={{ padding: '50px', borderRadius:'8px'}}>
                <SignupForm />
            </div>
        </Modal>
    )
}

export default SignupModal;