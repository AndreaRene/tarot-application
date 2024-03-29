import Header from '../components/Header/Header';
// import React from 'react';
// import CreateReading from '../components/Reading/ReadingCard';
import GetStartedModal from '../components/Reading/GettingStarted';

const Reading = () => {
    return (
        <div>
            <Header />
            <div>
                <h1 className='text-white text-center mb-3 mt-5'>
                    Reading Page
                </h1>
                <GetStartedModal />
            </div>
        </div>
    );
};

export default Reading;
