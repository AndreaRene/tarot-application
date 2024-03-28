import React from 'react';
import '../Home/Home.css';
import Header from '../../components/Headers/Header'

const Home = () => {
    return (
        <div>
            <Header />
            <div>
                <h1 className='welcome'>Welcome User</h1>
            </div>
        </div>
    );
};

export default Home;