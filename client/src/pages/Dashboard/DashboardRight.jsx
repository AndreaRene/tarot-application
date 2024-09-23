import { Link } from 'react-router-dom';
import { useTheme } from '../Settings/ThemeContext';

const DashboardRight = () => {
    const { theme } = useTheme();

    return (
        <section className='right-dash-container'
            style={{ borderLeft: `1px solid ${theme.borderLeftColor}` }}
        >
            <section className='right-dash-content'>
                <div>
                    <h2>Reading Journal</h2>
                    <hr className='hr-right' />

                    <Link
                        to='/journal'
                        className='journal-link'
                        onMouseEnter={(e) => (e.target.style.color = 'white')}
                        onMouseLeave={(e) => (e.target.style.color = '#A89467')}>
                        <h3 style={{ color: theme.h3Color }}>User Notes Title</h3>
                    </Link>
                    <div className='journal-entries'>
                        <span>Spread Name</span>
                        <span className='date-span'>04/17/2024</span>
                    </div>
                    <hr />
                    <h3 className='titles'
                        style={{ color: theme.h3Color }}
                    >User Notes Title</h3>
                    <div className='journal-entries'>
                        <span>Spread Name</span>
                        <span className='date-span'>04/17/2024</span>
                    </div>
                    <hr />
                    <h3 className='titles'
                        style={{ color: theme.h3Color }}
                    >User Notes Title</h3>
                    <div className='journal-entries'>
                        <span>Spread Name</span>
                        <span className='date-span'>04/17/2024</span>
                    </div>
                    <hr />
                    <h3 className='titles'
                        style={{ color: theme.h3Color }}
                    >User Notes Title</h3>
                    <div className='journal-entries'>
                        <span>Spread Name</span>
                        <span className='date-span'>04/17/2024</span>
                    </div>
                    <hr />
                    <h3 className='titles'
                        style={{ color: theme.h3Color }}
                    >User Notes Title</h3>
                    <div className='journal-entries'>
                        <span>Spread Name</span>
                        <span className='date-span'>04/17/2024</span>
                    </div>
                    <hr />
                    <h3 className='titles'
                        style={{ color: theme.h3Color }}
                    >User Notes Title</h3>
                    <div className='journal-entries'>
                        <span>Spread Name</span>
                        <span className='date-span'>04/17/2024</span>
                    </div>
                    <hr />
                    <h3 className='titles'
                        style={{ color: theme.h3Color }}
                    >User Notes Title</h3>
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
