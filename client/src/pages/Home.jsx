import React from 'react';
import BoxSystemProps from '../components/CardDrawing/Card';


const Home = () => {
    return (
        <div>
            <div className='container mx-auto py-4'>
                <h1 className='text-3x1 font-bold'>Welcome to Tarot Deck</h1>
                 <BoxSystemProps /> 
            </div>
        </div>
    );
};

export default Home;