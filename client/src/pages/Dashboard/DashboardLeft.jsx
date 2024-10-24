import DailyDraw from '../../assets/Spreads/daily_draw_example.jpg';
import ThreeCard from '../../assets/Spreads/three_card_draw.jpg';
import Interview from '../../assets/Spreads/interview_spread.png';
import EOTSBack from '../../assets/CardBacks/eots_backs_01.jpg';
import RWSDBack from '../../assets/CardBacks/rwsd_backs_01.jpg';
import UniversalCarousel from './AltCarousel';
import './Dashboard.css';
import { useTheme } from '../Settings/ThemeContext';
// import { useLazyQuery } from '@apollo/client';
// import { useState, useEffect } from 'react';
// import {
//     GET_ME,
//     QUERY_ALL_DECKS_BY_USER,
//     QUERY_ALL_FAVORITE_DECKS_BY_USER,
//     QUERY_ALL_FAVORITE_SPREADS_BY_USER,
// } from '../../utils/queries';

const DashboardLeft = () => {
    const { theme } = useTheme();
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
        { src: EOTSBack, alt: 'Deck' },
        { src: RWSDBack, alt: 'Deck' },
        { src: EOTSBack, alt: 'Deck' },
        { src: RWSDBack, alt: 'Deck' },
        { src: EOTSBack, alt: 'Deck' },
        { src: RWSDBack, alt: 'Deck' }
    ];

    const spreadImages = [
        { src: DailyDraw, alt: 'Daily Draw' },
        { src: ThreeCard, alt: 'Three Card Draw' },
        { src: Interview, alt: 'Interview Spread' },
        { src: DailyDraw, alt: 'Daily Draw' },
        { src: ThreeCard, alt: 'Three Card Draw' },
        { src: Interview, alt: 'Interview Spread' }
    ];

    return (
        <section className='left-dash-container'>
            <section className='left-dash-content'>
                <div className='my-decks'>
                    <h2>My Decks</h2>
                    <hr className='hr-spread' />
                    <UniversalCarousel
                        images={deckImages}
                        border={theme.universalImageBorder}
                    />
                </div>
                <div className='my-spreads'>
                    <h2>Favorite Spreads</h2>
                    <hr className='hr-spread' />
                    <UniversalCarousel
                        images={spreadImages}
                        border={theme.universalImageBorder}
                    />
                </div>
                <div className='fav-decks'>
                    <h2>Favorite Decks</h2>
                    <hr className='hr-spread' />
                    <UniversalCarousel
                        images={deckImages}
                        border={theme.universalImageBorder}
                    />
                </div>
            </section>
        </section>
    );
};

export default DashboardLeft;
