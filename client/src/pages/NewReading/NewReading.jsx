import { useState, useEffect } from 'react';
import OneCardCenter from '../../components/SpreadLayouts/OneCardCenter';

const defaultSpread = {
    _id: '66c6184dd8c96ed65ab4e6f9',
    spreadName: 'Daily Focus',
    spreadDescription:
        'The Daily Focus spread consists of a single card drawn each day to provide insight and guidance for the day ahead.',
    layout: 'singleCard',
    positions: [
        {
            positionNumber: 1,
            positionDescription: 'center',
            positionDetails: 'What should I focus on today?',
            gridArea: 'card1',
            gridColumn: '2 / span 1',
            gridRow: '1 / span 1'
        }
    ]
};

const defaultDeck = {
    _id: '66c6184ed8c96ed65ab4e708',
    name: 'Rider-Waite Tarot Deck',
    description: 'A classic deck used for various readings.'
};

const layoutComponents = {
    singleCard: OneCardCenter
};

const NewReading = () => {
    const [selectedSpread, setSelectedSpread] = useState(null);
    const [selectedDeck, setSelectedDeck] = useState(null);
    const [readingStarted, setReadingStarted] = useState(false);

    useEffect(() => {
        setSelectedSpread({
            ...defaultSpread,
            numCards: 1
        });
        setSelectedDeck(defaultDeck);
    }, []);

    const handleStartReading = () => {
        setReadingStarted(true);
    };

    if (!selectedSpread || !selectedDeck) {
        return <p>Loading default spread and deck...</p>;
    }

    const SelectedLayoutComponent = layoutComponents[selectedSpread.layout] || null;

    return (
        <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
            {/* Spread and Deck Indicator */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h2>{selectedSpread.spreadName}</h2>
                <h3>{selectedSpread.spreadDescription}</h3>
                <p>Using Deck: {selectedDeck.name}</p>
            </div>

            {/* Dynamic layout area */}
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
                {readingStarted && SelectedLayoutComponent ? (
                    <SelectedLayoutComponent
                        spreadData={selectedSpread}
                        deckData={selectedDeck}
                    />
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
