// NewReading.jsx
import { useReadingContext } from '../../context/ReadingContext'; // Import the custom hook
import OneCardCenter from '../../components/SpreadLayouts/OneCardCenter';

const layoutComponents = {
    singleCard: OneCardCenter
};

const NewReading = () => {
    // 1. Use the context to access selectedSpread and selectedDeck
    const { selectedSpread, selectedDeck } = useReadingContext();
    const [readingStarted, setReadingStarted] = useState(false);

    const handleStartReading = () => {
        setReadingStarted(true);
    };

    const SelectedLayoutComponent = selectedSpread ? layoutComponents[selectedSpread.layout] : null;

    return (
        <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                {selectedSpread && selectedDeck ? (
                    <>
                        <h2>{selectedSpread.spreadName}</h2>
                        <h3>{selectedSpread.spreadDescription}</h3>
                        <p>Using Deck: {selectedDeck.name}</p>
                    </>
                ) : (
                    <p>Select a spread and deck to start your reading</p>
                )}
            </div>

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

            {selectedSpread && selectedDeck && (
                <button
                    className='start-reading-btn'
                    onClick={handleStartReading}>
                    Start Reading
                </button>
            )}
        </section>
    );
};

export default NewReading;
