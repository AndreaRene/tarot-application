import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-gray-800 text-white p-4'>
            <div className='container mx-auto flex justify-between items-center'>
            <Link to='/Login'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2'>Login</button>
            </Link>
            <Link to='/Signup'>
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2'>Sign Up</button>
            </Link>
            </div>
        </header> 
    );
};

export default Header