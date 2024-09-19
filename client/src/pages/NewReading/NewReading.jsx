import { useState } from 'react';

const NewReading = () => {
    const [readingStarted, setReadingStarted] = useState(false);
    const [selectedSpread, setSelectedSpread] = useState('');
    const [selectedDeck, setSelectedDeck] = useState('');

    const handleStartReading = () => {
        setReadingStarted(true);
    };

    return (
        <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
            {/* Spread and Deck Indicator */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h2>{selectedSpread ? `Spread: ${selectedSpread}` : 'Select a Spread'}</h2>
                <h3>{selectedDeck ? `Deck: ${selectedDeck}` : 'Select a Deck'}</h3>
            </div>

            {/* Dynamic spread layout area */}
            <div
                style={{
                    width: '100%',
                    height: '60vh',
                    border: '2px solid #a67358',
                    marginBottom: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                {readingStarted ? (
                    <p>Reading in progress... (Dynamic layout will go here)</p>
                ) : (
                    <p>Select a spread and start your reading</p>
                )}
            </div>

            {/* Start Reading Button */}
            <button
                className='start-reading-btn'
                onClick={handleStartReading}>
                Start Reading
            </button>
        </section>
    );
};

export default NewReading;
