import PropTypes from 'prop-types';

const OneCardCenter = ({ spreadData, deckData }) => {
    // Safely destructure to avoid errors if spreadData or deckData is undefined
    if (!spreadData || !deckData) {
        return <div>Loading...</div>;
    }

    const { positions } = spreadData;
    const { imageUrl: deckBackImage } = deckData; // Deck back image URL

    return (
        <section>
            <div
                className='one-card-center-layout'
                style={{
                    display: 'flex',
                    justifyContent: 'center', // Center horizontally
                    alignItems: 'center', // Center vertically
                    height: '60vh', // Adjust the height as needed
                    textAlign: 'center' // Align text in the center
                }}>
                {positions.map((pos, index) => (
                    <div key={index}>
                        <img
                            src={deckBackImage} // Use the deck back image
                            alt={`Card ${pos.positionNumber}`}
                            style={{ width: '200px', height: 'auto' }} // Adjust size as necessary
                        />
                        <p>{pos.positionDetails}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

OneCardCenter.propTypes = {
    spreadData: PropTypes.shape({
        positions: PropTypes.arrayOf(
            PropTypes.shape({
                positionNumber: PropTypes.number.isRequired,
                positionDescription: PropTypes.string.isRequired,
                positionDetails: PropTypes.string.isRequired
            })
        ).isRequired
    }).isRequired,
    deckData: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired // Ensure deck back image is required
    }).isRequired
};

export default OneCardCenter;
