import React from 'react';
import BoxSystemProps from '../components/CardDrawing/Card';



const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen text-center'>
                <h1 className='text-3x1 font-bold text-center'>Embark on a Journey of Reflection!</h1>
                <BoxSystemProps />
                <h2>Explore various spreads, delve into the meanings of the cards, <br />and gain personal insight.</h2>
                <h1> Discover what the cards hold for you.</h1>
            </div>
    );
};

export default Home;