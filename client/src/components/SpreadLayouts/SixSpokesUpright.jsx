import PropTypes from 'prop-types';

const SixSpokesUpright = ({ spreadData, deckData }) => {
    if (!spreadData || !deckData) {
        return <div>Loading...</div>;
    }

    const { positions } = spreadData;
    const { imageUrl: deckBackImage } = deckData;

    return (
        <section>
            <div
                className='six-spokes-upright-layout'
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '20px',
                    justifyItems: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    width: '70%',
                    height: '60vh'
                }}>
                {/* Column 1 (Cards 5 and 4) */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%'
                    }}>
                    {positions
                        .filter((pos) => [5, 4].includes(pos.positionNumber))
                        .map((pos, index) => (
                            <div key={index}>
                                <img
                                    src={deckBackImage}
                                    alt={`Card ${pos.positionNumber}`}
                                    style={{ width: '100px', height: 'auto' }}
                                />
                                <p>{pos.positionDetails}</p>
                            </div>
                        ))}
                </div>

                {/* Column 2 (Cards 6 and 3) */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column-reverse',
                        justifyContent: 'space-between',
                        height: '100%'
                    }}>
                    {positions
                        .filter((pos) => [6, 3].includes(pos.positionNumber))
                        .map((pos, index) => {
                            const height = pos.positionNumber === 3 ? '35%' : '50%';
                            return (
                                <div
                                    key={index}
                                    style={{ height }}>
                                    <img
                                        src={deckBackImage}
                                        alt={`Card ${pos.positionNumber}`}
                                        style={{ width: '100px', height: 'auto' }}
                                    />
                                    <p>{pos.positionDetails}</p>
                                </div>
                            );
                        })}
                </div>

                {/* Column 3 (Cards 1 and 2) */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%'
                    }}>
                    {positions
                        .filter((pos) => [1, 2].includes(pos.positionNumber))
                        .map((pos, index) => (
                            <div
                                key={index}
                                style={{ height: '50%' }}>
                                <img
                                    src={deckBackImage}
                                    alt={`Card ${pos.positionNumber}`}
                                    style={{ width: '100px', height: 'auto' }}
                                />
                                <p>{pos.positionDetails}</p>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

SixSpokesUpright.propTypes = {
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
    }).isRequired
};

export default SixSpokesUpright;
