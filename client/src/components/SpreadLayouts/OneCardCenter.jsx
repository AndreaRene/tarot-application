import PropTypes from 'prop-types';

const OneCardCenter = ({ spreadData, deckData }) => {
    if (!spreadData || !deckData) {
        return <div>Loading...</div>;
    }

    const { positions } = spreadData;
    const { imageUrl: deckBackImage } = deckData;

    return (
        <section>
            <div
                className='one-card-center-layout'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '60vh',
                    textAlign: 'center'
                }}>
                {positions.map((pos, index) => (
                    <div key={index}>
                        <img
                            src={deckBackImage}
                            alt={`Card ${pos.positionNumber}`}
                            style={{ width: '200px', height: 'auto' }}
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
        imageUrl: PropTypes.string.isRequired
    }).isRequired
};

export default OneCardCenter;
