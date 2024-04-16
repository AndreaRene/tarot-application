import React from 'react';
import '../Dashboard/Dashboard.css';
// import Header from '../../components/Header/Header';
// import Drawer from '../../components/Drawer/Drawer';

const Dashboard = ({ isLoggedIn }) => {
    return (
        <div className='dashboard-container'>
            {/* <Header /> */}
            <div className='intro-dashboard'>
                <h1 className='welcome'>Welcome to TarotDeck!</h1>
                <p>Let's see what's in the cards for you today. </p>
            </div>
        </div>
    );
};

export default Dashboard;
