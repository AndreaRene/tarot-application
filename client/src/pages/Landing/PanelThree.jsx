import BackgroundImage from '../../assets/Hero2Dark.png';
const PanelThree = () => {

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '.3rem',
            width: '100vw',
            height: '100vh'
        }}>
            <div style={{
                height: '35vh',
                width: '100vw',
                position: 'relative',
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: 'cover'

            }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <h2>Icons Here</h2>
                </div>
            </div>
            <div style={{
                height: '67vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                backgroundImage: 'radial-gradient(circle, hsla(296, 37%, 15%, 1) 50%, hsla(244, 71%, 4%, 1) 99%)',
            }}>
                <h2>App Feature Descriptions Here</h2>

                <footer style={{ marginTop: 'auto' }}>
                    <h3>Footer Links Here</h3>
                </footer>
            </div>
        </div>
    );
};

export default PanelThree;