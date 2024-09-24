import React, { useEffect } from 'react';
import { useReadingContext } from '../../context/ReadingContext';

const NewReading = () => {
    const { selectedSpread, selectedDeck } = useReadingContext();

    useEffect(() => {
        console.log('Spread or Deck changed:', selectedSpread, selectedDeck);
    }, [selectedSpread, selectedDeck]); // Trigger effect when either context value changes

    return (
        <div>
            <h2>New Reading</h2>

            {/* Display selected spread information */}
            {selectedSpread ? (
                <div>
                    {console.log('Rendering Spread:', selectedSpread.spreadName)} {/* Add this log */}
                    <h3>Selected Spread:</h3>
                    <p>Name: {selectedSpread.spreadName}</p>
                    <p>Details: {selectedSpread.spreadDescription}</p>
                    <p>Number of Cards: {selectedSpread.numCards}</p>
                </div>
            ) : (
                <p>No spread selected</p>
            )}

            {selectedDeck ? (
                <div>
                    {console.log('Rendering Deck:', selectedDeck.deckName)} {/* Add this log */}
                    <h3>Selected Deck:</h3>
                    <p>Name: {selectedDeck.deckName}</p>
                </div>
            ) : (
                <p>No deck selected</p>
            )}
        </div>
    );
};

export default NewReading;
