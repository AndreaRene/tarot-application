const CardRight = () => {
    return (
        <section style={ { width: '50%', display: 'flex', justifyContent: 'center', borderLeft: '1px solid lightgrey' } }>
            <section style={ { width: '65%', textAlign: 'center', padding: '5px' } }>
                <h2>The Title of the Card</h2>
                <h3>The deck the card is from</h3>
                <hr />
            </section>
        </section>
    )
};

export default CardRight;