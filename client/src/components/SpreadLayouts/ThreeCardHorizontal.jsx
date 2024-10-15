import PropTypes from 'prop-types';

const ThreeCardHorizontal = ({ spreadData, deckData }) => {
    // Safely destructure to avoid errors if spreadData or deckData is undefined
    if (!spreadData || !deckData) {
        return <div>Loading...</div>;
    }

    const { positions } = spreadData;
    const { imageUrl: deckBackImage } = deckData; // Deck back image URL

    return (
        <section>
            <div
                className='three-card-horizontal-layout'
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)', // 3 equal columns for the cards
                    gridTemplateRows: '1fr', // 1 row for vertical centering
                    gap: '10px',
                    justifyContent: 'center',
                    alignItems: 'center', // Centers vertically
                    height: '100%' // Full height of the container
                }}>
                {positions.map((pos, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <img
                            src={deckBackImage} // Use the deck back image
                            alt={`Card ${pos.positionNumber}`}
                            style={{ width: '200px', height: 'auto' }} // Adjust width for better spacing
                        />
                        <p>{pos.positionDetails}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

ThreeCardHorizontal.propTypes = {
    spreadData: PropTypes.shape({
        positions: PropTypes.arrayOf(
            PropTypes.shape({
                gridColumn: PropTypes.string.isRequired,
                gridRow: PropTypes.string.isRequired,
                positionNumber: PropTypes.number.isRequired,
                positionDetails: PropTypes.string.isRequired
            })
        ).isRequired
    }).isRequired,
    deckData: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired // Ensure deck back image is required
    }).isRequired
};

export default ThreeCardHorizontal;
