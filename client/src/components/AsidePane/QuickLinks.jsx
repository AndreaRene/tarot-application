import { Link } from 'react-router-dom';

const QuickLinks = () => {
  return (
    <div style={ { display: 'flex', justifyContent: 'center', marginTop: '4rem' } }>
      <Link to="/newreading">
        <button className='button' style={ { padding: '0.5rem 1rem', fontSize: '1rem', borderRadius: '8px', backgroundColor: 'rgb(168, 148, 103)', color: 'white', border: 'none', cursor: 'pointer' } }>
          Go to New Reading
        </button>
      </Link>
    </div>
  );
};

export default QuickLinks;
