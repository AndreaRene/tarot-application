import React, { useState } from 'react';

export const AuthButtons = ({ handleLoginOpen, handleSignUpOpen }) => {
    return (
        <div className='button-container'>
            <div>
                <button
                    className='button'
                    onClick={handleLoginOpen}>
                    Login
                </button>
                <button
                    className='button'
                    onClick={handleSignUpOpen}>
                    Sign Up
                </button>
            </div>
        </div>
    );
};
