import { Link } from 'react-router-dom';

const DashboardRight = () => {
    return (
        <section className='right-side-container'>
            <section className='right-side-content'>
                <h2 className='header-right'>Reading Journal</h2>
                <hr className='hr-right' />
                <div>
                    <Link
                        to='/journal'
                        className='journal-link'
                        onMouseEnter={(e) => (e.target.style.color = 'white')}
                        onMouseLeave={(e) => (e.target.style.color = 'rgb(168, 148, 103)')}>
                        <h3>User Notes Title</h3>
                    </Link>
                    <div className='journal-entries'>
                        <span>Spread Name</span>
                        <span className='date-span'>04/17/2024</span>
                    </div>
                    <hr />
                    <h3 className='titles'>User Notes Title</h3>
                    <div className='journal-entries'>
                        <span>Spread Name</span>
                        <span className='date-span'>04/17/2024</span>
                    </div>
                    <hr />
                    <h3 className='titles'>User Notes Title</h3>
                    <div className='journal-entries'>
                        <span>Spread Name</span>
                        <span className='date-span'>04/17/2024</span>
                    </div>
                    <hr />
                    <h3 className='titles'>User Notes Title</h3>
                    <div className='journal-entries'>
                        <span>Spread Name</span>
                        <span className='date-span'>04/17/2024</span>
                    </div>
                    <hr />
                    <h3 className='titles'>User Notes Title</h3>
                    <div className='journal-entries'>
                        <span>Spread Name</span>
                        <span className='date-span'>04/17/2024</span>
                    </div>
                    <hr />
                    <h3 className='titles'>User Notes Title</h3>
                    <div className='journal-entries'>
                        <span>Spread Name</span>
                        <span className='date-span'>04/17/2024</span>
                    </div>
                    <hr />
                </div>
                <div className='arrow-entries'>
                    <span>
                        <i className='fas fa-chevron-down'></i>
                    </span>
                </div>
            </section>
        </section>
    );
};

export default DashboardRight;
