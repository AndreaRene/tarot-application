import React from 'react';
import DailyDraw from '../../assets/daily_draw_example.jpg';
import ThreeCard from '../../assets/three_card_draw.jpg';
// import Interview from '../../assets/interview_spread.png';
import Deck from '../../assets/deck_icon.png';
import './Dashboard.css';

const DashboardLeft = () => {
    // Get me querry
    // decks
    // id
    // deckName
    //deckCardBackImage // FUTURE UPDATE
    // FavoriteSpread
    // _id
    // SpreadImage  // FUTURE UPDATE
    // SpreadName
    // FabvoriteDeck
    // _id
    // DeckName
    // deckCardBackImage // FUTURE UPDATE

    return (
        <section className='left-dash-container'>
            <section className='left-dash-content'>
                <div className='my-decks'>
                    <h2>My Decks</h2>
                    <hr className='hr-dash' />
                </div>
                <div className='carousel-containers'>
                    <i className='fas fa-angle-left fa-lg'></i>
                    <img src={Deck} alt='deck' className='carousel-items' />
                    <img src={Deck} alt='deck' className='carousel-items' />
                    {/* <img src={Deck} alt="deck" className='carousel-items' /> */}
                    <i className='fas fa-angle-right fa-lg'></i>
                </div>
                <div className='my-spreads'>
                    <h2>Favorite Spreads</h2>
                    <hr className='hr-dash' />
                </div>
                <div className='carousel-containers'>
                    <i className='fas fa-angle-left fa-lg'></i>
                    <img
                        src={DailyDraw}
                        alt='Daily Draw'
                        className='carousel-items spread'
                    />
                    <img
                        src={ThreeCard}
                        alt='Three Card Draw'
                        className='carousel-items spread'
                    />
                    {/* <img src={Interview} alt="Interview Spread" className='carousel-items spread' /> */}
                    <i className='fas fa-angle-right fa-lg'></i>
                </div>
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <h2>Favorite Decks</h2>
                    <hr className='hr-dash' />
                </div>
                <div className='carousel-containers'>
                    <i className='fas fa-angle-left fa-lg'></i>
                    <img src={Deck} alt='deck' className='carousel-items' />
                    <img src={Deck} alt='deck' className='carousel-items' />
                    {/* <img src={Deck} alt="deck" className='carousel-items' /> */}
                    <i className='fas fa-angle-right fa-lg'></i>
                </div>
            </section>
        </section>
    );
};

export default DashboardLeft;
