import { Link } from 'react-router-dom';

const QuickLinks = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to='/newReading'>
                <button
                    className='button'
                    style={{
                        padding: '.8rem 1rem',
                        fontSize: '1rem',
                        borderRadius: '8px',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        width: '150px',
                        textShadow: '1px 1px 2px #121212'
                    }}>
                    New Reading
                </button>
            </Link>
        </div>
    );
};

export default QuickLinks;
