import React from 'react';
import DailyDraw from '../../assets/daily_draw_example.jpg';
import ThreeCard from '../../assets/three_card_draw.jpg';
import Interview from '../../assets/interview_spread.png';
import Deck from '../../assets/deck_icon.png';

const DashboardLeft = () => {
    return (
        <section style={ { width: '50%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } }>
        <section style={ { width: '65%', textAlign: 'center', padding: '20px' } }>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h2>My Decks</h2>
                    <hr style={{ width: '60%' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                    <i className="fas fa-angle-left fa-lg" style={{ marginRight: '10px' }}></i>
                    <img src={Deck} alt="deck" style={{ width: '150px', margin: '0 10px' }} />
                    <img src={Deck} alt="deck" style={{ width: '150px', margin: '0 10px' }} />
                    <img src={Deck} alt="deck" style={{ width: '150px', margin: '0 10px' }} />
                    <i className="fas fa-angle-right fa-lg" style={{ marginLeft: '10px' }}></i>
                </div>
                <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '20px' }}>
                    <h2>Favorite Spreads</h2>
                    <hr style={{ width: '60%' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                    <i className="fas fa-angle-left fa-lg" style={{ marginRight: '10px' }}></i>
                    <img src={DailyDraw} alt="Daily Draw" style={{ width: '150px', margin: '0 10px' }} />
                    <img src={ThreeCard} alt="Three Card Draw" style={{ width: '150px', margin: '0 10px' }} />
                    <img src={Interview} alt="Interview Spread" style={{ width: '150px', margin: '0 10px' }} />
                    <i className="fas fa-angle-right fa-lg" style={{ marginLeft: '10px' }}></i>
                </div>
                <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '20px' }}>
                    <h2>Favorite Decks</h2>
                    <hr style={{ width: '60%' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                    <i className="fas fa-angle-left fa-lg" style={{ marginRight: '10px' }}></i>
                    <img src={Deck} alt="deck" style={{ width: '150px', margin: '0 10px' }} />
                    <img src={Deck} alt="deck" style={{ width: '150px', margin: '0 10px' }} />
                    <img src={Deck} alt="deck" style={{ width: '150px', margin: '0 10px' }} />
                    <i className="fas fa-angle-right fa-lg" style={{ marginLeft: '10px' }}></i>
                </div>
            </section>
        </section>
    );
};

export default DashboardLeft;
