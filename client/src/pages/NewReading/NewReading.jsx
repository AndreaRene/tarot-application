import React, { useEffect } from 'react';
import { useReadingContext } from '../../context/ReadingContext';

import OneCardCenter from '../../components/SpreadLayouts/OneCardCenter';
import ThreeCardHorizontal from '../../components/SpreadLayouts/ThreeCardHorizontal';
import SixSpokesUpright from '../../components/SpreadLayouts/SixSpokesUpright';

const NewReading = () => {
    const { selectedSpread, selectedDeck } = useReadingContext();

    const layoutMap = {
        OneCardCenter: OneCardCenter,
        ThreeCardHorizontal: ThreeCardHorizontal,
        SixSpokesUpright: SixSpokesUpright
    };

    useEffect(() => {
        console.log('Spread or Deck changed:', selectedSpread, selectedDeck);
    }, [selectedSpread, selectedDeck]);

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

                    {/* Pass selectedSpread and selectedDeck to the layout */}
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
            <button>Start Reading</button>
        </div>
    );
};

export default NewReading;
