const LoadingScreen = () => {
    return (
        <div
            className='loading-screen'
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <p>Loading...</p>
            {/* You can also add a spinner or any other visual */}
        </div>
    );
};

export default LoadingScreen;
