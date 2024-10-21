import PropTypes from 'prop-types';

const ThreeCardHorizontal = ({ spreadData, deckData, cardData, showCardFronts }) => {
    if (!spreadData || !deckData) {
        return <div>Loading...</div>;
    }

    const { positions } = spreadData;
    const { imageUrl: deckBackImage } = deckData; // Back of the card image from the deck

    return (
        <section>
            <div
                className='three-card-horizontal-layout'
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '10px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%'
                }}>
                {positions.map((pos, index) => {
                    const card = cardData[index]; // Get the card at the current index
                    const cardImageUrl = card?.card?.imageUrl; // Get the card image URL
                    const cardOrientation = card?.orientation; // Get the card orientation

                    return (
                        <div
                            key={index}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            {showCardFronts && card ? (
                                <div>
                                    <p>{card.card.cardName}</p> {/* Show the card name */}
                                    <img
                                        src={cardImageUrl} // Show the card image
                                        alt={card.card.cardName}
                                        style={{
                                            width: '200px',
                                            height: 'auto',
                                            transform: cardOrientation === 'Reversed' ? 'rotate(180deg)' : 'none' // Rotate if reversed
                                        }}
                                    />
                                </div>
                            ) : (
                                <div>
                                    <img
                                        src={deckBackImage} // Show card back before "Start Reading"
                                        alt={`Card ${pos.positionNumber}`}
                                        style={{ width: '200px', height: 'auto' }}
                                    />
                                    <p>{pos.positionDetails}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

ThreeCardHorizontal.propTypes = {
    spreadData: PropTypes.shape({
        positions: PropTypes.arrayOf(
            PropTypes.shape({
                positionNumber: PropTypes.number.isRequired,
                positionDetails: PropTypes.string.isRequired
            })
        ).isRequired
    }).isRequired,
    deckData: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired
    }).isRequired,
    cardData: PropTypes.array.isRequired, // Card data passed after reading is generated
    showCardFronts: PropTypes.bool.isRequired // Controls when to show the card fronts
};

export default ThreeCardHorizontal;
