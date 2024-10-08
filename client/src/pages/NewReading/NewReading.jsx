import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useReadingContext } from '../../context/ReadingContext';

import OneCardCenter from '../../components/SpreadLayouts/OneCardCenter';
import ThreeCardHorizontal from '../../components/SpreadLayouts/ThreeCardHorizontal';
import SixSpokesUpright from '../../components/SpreadLayouts/SixSpokesUpright';

import { CREATE_TEMPORARY_READING } from '../../utils/queries.js';

const NewReading = () => {
    const { selectedSpread, selectedDeck } = useReadingContext();

    // Set up useLazyQuery, which returns a function to trigger the query
    const [createTemporaryReading, { data, loading, error }] = useLazyQuery(CREATE_TEMPORARY_READING);

    useEffect(() => {
        if (data) {
            console.log('Temporary reading created:', data);
        }
        if (error) {
            console.error('Error creating temporary reading:', error);
        }
    }, [data, error]);

    const layoutMap = {
        OneCardCenter: OneCardCenter,
        ThreeCardHorizontal: ThreeCardHorizontal,
        SixSpokesUpright: SixSpokesUpright
    };

    const LayoutComponent = layoutMap[selectedSpread?.layout] || null;

    return (
        <div style={{ height: '100%' }}>
            <h2>New Reading</h2>

            {selectedSpread ? (
                <div>
                    <h3>Selected Spread:</h3>
                    <p>Name: {selectedSpread.spreadName}</p>
                    <p>Details: {selectedSpread.spreadDescription}</p>
                    <p>Number of Cards: {selectedSpread.numCards}</p>
                    {selectedDeck ? (
                        <div>
                            <h3>Selected Deck:</h3>
                            <p>Name: {selectedDeck.deckName}</p>
                        </div>
                    ) : (
                        <p>No deck selected</p>
                    )}

                    {LayoutComponent ? (
                        <LayoutComponent
                            spreadData={selectedSpread}
                            deckData={selectedDeck}
                        />
                    ) : (
                        <p>No matching layout found for this spread.</p>
                    )}
                </div>
            ) : (
                <p>No spread selected</p>
            )}

            <button
                onClick={() => {
                    if (selectedSpread && selectedDeck) {
                        createTemporaryReading({
                            variables: {
                                spreadId: selectedSpread.id,
                                deckId: selectedDeck.id
                            }
                        });
                    } else {
                        console.error('Spread or Deck not selected');
                    }
                }}>
                Start Reading
            </button>

            {loading && <p>Loading...</p>}
        </div>
    );
};

export default NewReading;
