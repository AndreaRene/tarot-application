import PropTypes from 'prop-types';

const OneCardCenter = ({ spreadData }) => {
    const { positions, numCards } = spreadData;

    return (
        <div
            className='one-card-center-layout'
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)',
                gap: '10px',
                justifyContent: 'center',
                alignItems: 'center',
                height: '60vh'
            }}>
            {positions.map((pos, index) => {
                // Construct image URL within the map function where 'pos' is defined

                return (
                    <div
                        key={index}
                        style={{
                            gridColumn: pos.gridColumn,
                            gridRow: pos.gridRow
                        }}>
                        <img
                            src='https://tarot-deck-images.s3.us-east-2.amazonaws.com/RWSD/cups/rwsd_cups_01.jpg'
                            alt={`Card ${pos.positionNumber}`}
                            style={{ width: '100%' }}
                        />
                        <p>{pos.positionDetails}</p>
                    </div>
                );
            })}
        </div>
    );
};

OneCardCenter.propTypes = {
    spreadData: PropTypes.shape({
        positions: PropTypes.arrayOf(
            PropTypes.shape({
                gridColumn: PropTypes.string.isRequired,
                gridRow: PropTypes.string.isRequired,
                positionNumber: PropTypes.number.isRequired,
                positionDetails: PropTypes.string.isRequired
            })
        ).isRequired,
        numCards: PropTypes.number.isRequired
    }).isRequired
};

export default OneCardCenter;
