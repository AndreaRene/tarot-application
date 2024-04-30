import { Link } from 'react-router-dom';

const QuickLinks = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', }}>
      <Link to="/newreading">
        <button
          className='button'
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            borderRadius: '8px',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}>
          New Reading
        </button>
      </Link>
    </div>
  );
};

export default QuickLinks;
