const PanelTwo = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '.3rem',
            width: '100vw',
            height: '100vh',
            backgroundImage: 'radial-gradient(circle, hsla(296, 37%, 15%, 1) 50%, hsla(244, 71%, 4%, 1) 99%)',
            paddingBottom: '10px',
            paddingTop: '20px',
        }}>
            <div>
                <h2>
                    See what the cards hold for you!
                </h2>
            </div>
            <div id='grid'
                style={{
                    height: '60vh',
                    width: '70vw',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '3px',
                    background: 'rgb(168, 148, 103)',
                    border: '3px solid rgb(168, 148, 103)',
                }}>
                {/* Grid items here */}
            </div>
            <h2>
                Discover diverse readings and tailored insights through various spreads!
            </h2>
        </div>
    );
};

export default PanelTwo;
