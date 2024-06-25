/* eslint-disable react/no-unescaped-entities */
import DeckInterview from '../../components/SpreadLayouts/DeckInterview';
// import DailyFocus from '../../components/SpreadLayouts/DailyFocus';
// import ThreeCardSpread from '../../Components/SpreadLayouts/ThreeCardSpread';

const JournalLeft = () => {
    return (
        <section
            style={{
                width: '50%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <section style={{ width: '65%', textAlign: 'center', padding: '20px' }}>
                <div style={{ textAlign: 'center' }}>
                    <h2
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            whiteSpace: 'nowrap'
                        }}>
                        <div style={{ flex: 1 }}></div>
                        {/* <span style={ { flexShrink: 0 } }>Getting to Know You</span> */}
                        <span style={{ flexShrink: 0 }}>My first daily focus</span>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                            <i
                                className='fas fa-pencil-alt'
                                style={{ marginLeft: '10px' }}></i>
                            <i
                                className='fas fa-share-alt'
                                style={{ marginLeft: '10px' }}></i>
                        </div>
                    </h2>
                    <hr />
                    <h3>Eclipse of the Soul</h3>
                    {/* <h3>Chibi Tarot</h3> */}

                    <hr style={{ width: '75%' }} />
                </div>
                <h3
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        margin: 'auto',
                        width: '90%',
                        height: '2.5rem'
                    }}>
                    {/* <p>Deck Interview</p> */}
                    <p>Daily Focus</p>
                    {/* <p>Self Awareness</p> */}
                    <div>04/17/2024</div>
                </h3>
                <hr />

                <div
                    style={{
                        textAlign: 'justify',
                        fontSize: '.9rem',
                        margin: '3rem auto',
                        border: '1px solid grey',
                        padding: '5px',
                        width: '95%',
                        maxHeight: '200px',
                        overflowY: 'scroll',
                        overflowX: 'hidden'
                    }}>
                    <p style={{ margin: '5px' }}>
                        Today was my first time working with the Eclipse of the Soul Tarot Deck, and I decided to do a
                        deck interview spread to understand how we might work together. The spread revealed a lot more
                        than I expected, and I feel a deep connection with this deck already.
                    </p>
                    <p style={{ margin: '5px' }}>
                        After this reading, I feel a profound sense of anticipation and curiosity. This deck appears to
                        be straightforward and honest, capable of guiding significant personal transformations. It seems
                        like it will be an excellent companion for my spiritual journey and personal development. I look
                        forward to exploring with the deck and uncovering the insights it holds. The spread not only
                        introduced the deck's capabilities but also set the tone for what I can expect in future
                        readings.
                    </p>
                </div>
                <DeckInterview
                    imgHeight='100px'
                    lgMargin='50px'
                    smMargin='10px'
                />
                {/* <DailyFocus imgHeight='200px' margin='50px' /> */}
                {/* <ThreeCardSpread imgHeight='200px' margin='20px' /> */}
            </section>
        </section>
    );
};

export default JournalLeft;
