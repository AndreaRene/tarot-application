import React from 'react';
import LoginForm from '../components/Authentication/LoginForm';

const Login = () => {
    return (
        <div className='flex items-center min-h-screen bg-white dark:bg-gray-900'>
            <div className='containe mx-auto'>
                <div className='max-w-md mx-auto my-10'>
                    <div class="m-7">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;