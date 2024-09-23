// ReadingAside.jsx
import PropTypes from 'prop-types';
import { useMemo, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { useReadingContext } from '../../context/ReadingContext'; // Use context here
import './ReadingAside.css';
import { QUERY_ALL_SPREADS, QUERY_ALL_DECKS } from '../../utils/queries';

const ReadingAside = () => {
    const panelRef = useRef(null);

    // Access setSelectedSpread and setSelectedDeck directly from the context
    const { setSelectedSpread, setSelectedDeck } = useReadingContext();

    const { data: spreadsData, loading: spreadsLoading, error: spreadsError } = useQuery(QUERY_ALL_SPREADS);
    const { data: decksData, loading: decksLoading, error: decksError } = useQuery(QUERY_ALL_DECKS);

    const combinedItems = useMemo(() => {
        return [
            ...(spreadsData?.allSpreads || []).map((spread) => ({
                type: 'spread',
                image: spread.imageUrl,
                name: spread.spreadName,
                fullData: spread
            })),
            ...(decksData?.allDecks || []).map((deck) => ({
                type: 'deck',
                image: deck.imageUrl,
                name: deck.deckName,
                fullData: deck
            }))
        ];
    }, [spreadsData, decksData]);

    const spreadsItems = combinedItems.filter((item) => item.type === 'spread');
    const decksItems = combinedItems.filter((item) => item.type === 'deck');

    const handleSpreadImageClick = (spread) => {
        setSelectedSpread(spread.fullData); // Update context state
    };

    const handleDeckImageClick = (deck) => {
        setSelectedDeck(deck.fullData); // Update context state
    };

    if (spreadsLoading || decksLoading) return <div>Loading...</div>;
    if (spreadsError || decksError) return <div>Error loading spreads or decks</div>;

    return (
        <div className='reading-aside'>
            <div
                ref={panelRef}
                className={`slide-container show-spreads`}>
                {/* Spreads Panel */}
                <div className='spreads-container'>
                    <div className='scrolling-spreads-container'>
                        {spreadsItems.map((item, idx) => (
                            <div
                                key={idx}
                                className='spread-slide'>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    onClick={() => handleSpreadImageClick(item)}
                                />
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decks Panel */}
                <div className='decks-container'>
                    <div className='scrolling-decks-container'>
                        {decksItems.map((item, idx) => (
                            <div
                                key={idx}
                                className='deck-slide'>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    onClick={() => handleDeckImageClick(item)}
                                />
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadingAside;
