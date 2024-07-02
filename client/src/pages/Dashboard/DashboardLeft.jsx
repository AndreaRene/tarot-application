import DailyDraw from '../../assets/daily_draw_example.jpg';
import ThreeCard from '../../assets/three_card_draw.jpg';
import Interview from '../../assets/interview_spread.png';
import Deck from '../../assets/Icons/deck_icon.png';
import UniversalCarousel from '../Dashboard/UniversalCarousel';
import './Dashboard.css';
// import { useLazyQuery } from '@apollo/client';
// import { useState, useEffect } from 'react';
// import {
//     GET_ME,
//     QUERY_ALL_DECKS_BY_USER,
//     QUERY_ALL_FAVORITE_DECKS_BY_USER,
//     QUERY_ALL_FAVORITE_SPREADS_BY_USER,
// } from '../../utils/queries';

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

    // const [userId, setUserId] = useState( null );
    // const [decks, setDecks] = useState( [] );
    // const [favoriteDecks, setFavoriteDecks] = useState( [] );
    // const [favoriteSpreads, setFavoriteSpreads] = useState( [] );

    // const [getMe, { data: userData }] = useLazyQuery( GET_ME );
    // const [allDecks] = useLazyQuery( QUERY_ALL_DECKS_BY_USER );
    // const [allFavoriteDecks] = useLazyQuery( QUERY_ALL_FAVORITE_DECKS_BY_USER );
    // const [allFavoriteSpreads] = useLazyQuery(
    //     QUERY_ALL_FAVORITE_SPREADS_BY_USER
    // );

    // useEffect( () => {
    //     let mounted = true; // Flag to track if component is mounted

    //     if ( userData && userData.me && mounted ) {
    //         setUserId( userData.me._id );
    // console.log('User ID:', userData.me._id); // Log userId after it's been set
    // }

    // Cleanup function: Remove the effect once the state is populated
    // return () => {
    // Set the mounted flag to false when component is unmounted
    //         mounted = false;
    //         console.log( 'Effect removed' );
    //     };
    // }, [userData, userId] );

    // const getDecksInfo = async () => {
    //     try {
    //         const { data } = await allDecks( {
    //             variables: {
    //                 userId,
    //             },
    //         } );

    // Check if data exists and has the expected structure
    // if ( data && data.allDecksByUser ) {
    // console.log('All Decks:', data.allDecksByUser);
    //             setDecks( data.allDecksByUser );
    //         } else {
    //             console.log( 'No decks found.' );
    //         }
    //     } catch ( error ) {
    //         console.error( 'Error fetching decks:', error );
    //     }
    // };

    // const getFavoriteDeckInfo = async () => {
    //     try {
    //         const { data } = await allFavoriteDecks( {
    //             variables: {
    //                 userId,
    //             },
    //         } );

    // Check if data exists and has the expected structure
    // if ( data && data.allFavoriteDecksByUser ) {
    // console.log('Favorite Decks:', data.allFavoriteDecksByUser);
    //             setFavoriteDecks( data.allFavoriteDecksByUser );
    //         } else {
    //             console.log( 'No favorite decks found.' );
    //         }
    //     } catch ( error ) {
    //         console.error( 'Error fetching decks:', error );
    //     }
    // };

    // const getFavoriteSpreads = async () => {
    //     try {
    //         const { data } = await allFavoriteSpreads( {
    //             variables: {
    //                 userId,
    //             },
    //         } );

    // Check if data exists and has the expected structure
    // if ( data && data.allFavoriteSpreadsByUser ) {
    // console.log('Favorite Spreads:', data.allFavoriteSpreadsByUser);
    //             setFavoriteSpreads( data.allFavoriteSpreadsByUser );
    //         } else {
    //             console.log( 'No favorite spreads found.' );
    //         }
    //     } catch ( error ) {
    //         console.error( 'Error fetching spreads:', error );
    //     }
    // };

    // useEffect( () => {
    //     getMe();
    //     getDecksInfo();
    //     getFavoriteDeckInfo();
    //     getFavoriteSpreads();
    // }, [] ); // Empty dependency array to run once on component mount

    // console.log('UserId:', userId);
    // console.log('Decks:', decks);
    // console.log('Favorite Decks:', favoriteDecks);
    // console.log('Favorite Spreads:', favoriteSpreads);

    const deckImages = [
        { src: Deck, alt: 'Deck' },
        { src: Deck, alt: 'Deck' },
        { src: Deck, alt: 'Deck' },
        { src: Deck, alt: 'Deck' },
        { src: Deck, alt: 'Deck' },
        { src: Deck, alt: 'Deck' },
    ];

    const spreadImages = [
        { src: DailyDraw, alt: 'Daily Draw' },
        { src: ThreeCard, alt: 'Three Card Draw' },
        { src: Interview, alt: 'Interview Spread' },
        { src: DailyDraw, alt: 'Daily Draw' },
        { src: ThreeCard, alt: 'Three Card Draw' },
        { src: Interview, alt: 'Interview Spread' },
    ];
    return (
        <section className='left-side-container'>
            <section className='left-side-content'>
                <div className='my-decks'>
                    <h2>My Decks</h2>
                    <hr className='hr-right' />
                    {/* <i className='fas fa-angle-left icon-left'></i> */}
                    <UniversalCarousel images={deckImages} />
                    {/* <i className='fas fa-angle-right icon-right'></i> */}
                </div>
                <div className='my-spreads'>
                    <h2>Favorite Spreads</h2>
                    <hr className='hr-spread' />
                    {/* <i className='fas fa-angle-left icon-left'></i> */}
                    <UniversalCarousel images={spreadImages} />
                    {/* <i className='fas fa-angle-right icon-right'></i> */}
                </div>
                <div className='fav-decks'>
                    <h2>Favorite Decks</h2>
                    <hr className='hr-right hr-spread' />
                    {/* <i className='arrows fas fa-angle-left icon-left'></i> */}
                    <UniversalCarousel images={deckImages} />
                    {/* <i className='fas fa-angle-right icon-right'></i> */}
                </div>
            </section>
        </section>
    );
};

export default DashboardLeft;
