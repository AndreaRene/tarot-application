import React from 'react';
import SignUpForm from '../components/Authentication/SignUpForm';

const Signup = () => {
    return (
        <div className='flex items-center min-h-screen bg-white dark:bg-gray-900'>
            <div className='containe mx-auto'>
                <div className='max-w-md mx-auto my-10'>
                    <div class="m-7">
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;