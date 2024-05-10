import { Link } from 'react-router-dom';

const DashboardRight = () => {
    return (
        <section style={{ width: '50%', display: 'flex', justifyContent: 'center', borderLeft: '1px solid rgb(168, 148, 103)' }}>
            <section style={{ width: '65%', textAlign: 'center', padding: '5px' }}>
                <h2 style={{ textAlign: 'center' }}>Reading Journal</h2>
                <hr style={{ width: '60%' }} />
                <div>
                    <Link
                        to='/journal'
                        style={{
                            color: 'rgb(168, 148, 103)',
                            textDecoration: 'none',
                            transition: 'color 0.3s',
                        }}
                        onMouseEnter={(e) => e.target.style.color = 'white'} 
                        onMouseLeave={(e) => e.target.style.color = 'rgb(168, 148, 103)'} 
                        >
                        <h3 style={{ textAlign: 'left', color: 'rgb(168, 148, 103)', fontWeight: 'bold' }}>My First Deck Interview</h3>
                    </Link>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span>Deck Interview Spread</span>
                        <span style={{ float: 'right' }}>04/17/2024</span>
                    </div>
                    <hr />
                    <h3 style={{ textAlign: 'left', color: 'rgb(168, 148, 103)', fontWeight: 'bold' }}>User Notes Title</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span>Spread Name</span>
                        <span style={{ float: 'right' }}>04/17/2024</span>
                    </div>
                    <hr />
                    <h3 style={{ textAlign: 'left', color: 'rgb(168, 148, 103)', fontWeight: 'bold' }}>User Notes Title</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span>Spread Name</span>
                        <span style={{ float: 'right' }}>04/17/2024</span>
                    </div>
                    <hr />
                    <h3 style={{ textAlign: 'left', color: 'rgb(168, 148, 103)', fontWeight: 'bold' }}>User Notes Title</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span>Spread Name</span>
                        <span style={{ float: 'right' }}>04/17/2024</span>
                    </div>
                    <hr />
                    <h3 style={{ textAlign: 'left', color: 'rgb(168, 148, 103)', fontWeight: 'bold' }}>User Notes Title</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span>Spread Name</span>
                        <span style={{ float: 'right' }}>04/17/2024</span>
                    </div>
                    <hr />
                    <h3 style={{ textAlign: 'left', color: 'rgb(168, 148, 103)', fontWeight: 'bold' }}>User Notes Title</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span>Spread Name</span>
                        <span style={{ float: 'right' }}>04/17/2024</span>
                    </div>
                    <hr />
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <span style={{ textDecoration: 'none', marginBottom: '1.1rem' }}><i className="fas fa-chevron-down"></i></span>
                </div>
            </section>
        </section>
    );
};

export default DashboardRight;
