import { useState, useMemo, useRef } from 'react';
import { useQuery } from '@apollo/client';
import './ReadingDrawer.css';
import { QUERY_ALL_SPREADS, QUERY_ALL_DECKS } from '../../utils/queries';

const ReadingAside = () => {
    const panelRef = useRef(null); // Using ref to manage panel movement

    const {
        data: spreadsData,
        loading: spreadsLoading,
        error: spreadsError
    } = useQuery(QUERY_ALL_SPREADS, { fetchPolicy: 'cache-first' });
    const {
        data: decksData,
        loading: decksLoading,
        error: decksError
    } = useQuery(QUERY_ALL_DECKS, { fetchPolicy: 'cache-first' });

    // Log the data to check if queries are repeating
    console.log('Spreads Data:', spreadsData);
    console.log('Decks Data:', decksData);

    // Memoize data to prevent re-fetching on state changes
    const combinedItems = useMemo(() => {
        return [
            ...(spreadsData?.allSpreads || []).map((spread) => ({
                type: 'spread',
                image: spread.imageUrl,
                name: spread.spreadName
            })),
            ...(decksData?.allDecks || []).map((deck) => ({
                type: 'deck',
                image: deck.imageUrl,
                name: deck.deckName
            }))
        ];
    }, [spreadsData, decksData]);

    const spreadsItems = combinedItems.filter((item) => item.type === 'spread');
    const decksItems = combinedItems.filter((item) => item.type === 'deck');

    // Handle panel movement without causing a re-render
    const handleSpreadsClick = () => {
        panelRef.current.classList.add('show-spreads');
        panelRef.current.classList.remove('show-decks');
    };

    const handleDecksClick = () => {
        panelRef.current.classList.add('show-decks');
        panelRef.current.classList.remove('show-spreads');
    };

    if (spreadsLoading || decksLoading) {
        return <div>Loading...</div>;
    }

    if (spreadsError || decksError) {
        return <div>Error loading spreads or decks</div>;
    }

    return (
        <div className='reading-aside'>
            <div
                ref={panelRef}
                className={`slide-container show-spreads`}>
                {/* Spreads Panel */}
                <div className='spreads-container'>
                    <div className='button-background'>
                        <button
                            onClick={handleDecksClick}
                            className='reading-button'>
                            View Decks
                        </button>
                    </div>

                    <div className='scrolling-spreads-container'>
                        {spreadsItems.map((item, idx) => (
                            <div
                                key={idx}
                                className='spread-slide'>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                />
                                <p>{item.name}</p>
                                <button className='spread-info-btn'>Spread Info</button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decks Panel */}
                <div className='decks-container'>
                    <div className='button-background'>
                        <button
                            onClick={handleSpreadsClick}
                            className='reading-button'>
                            View Spreads
                        </button>
                    </div>
                    <div className='scrolling-decks-container'>
                        {decksItems.map((item, idx) => (
                            <div
                                key={idx}
                                className='deck-slide'>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                />
                                <p>{item.name}</p>
                                <button className='deck-info-btn'>Deck Info</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadingAside;
