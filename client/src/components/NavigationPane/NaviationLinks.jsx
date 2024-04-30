import { Link } from 'react-router-dom';
import './NavigationPane.css';

const NavigationLinks = () => {
  return (
    <nav style={{
      height: '100%',
      width: '150px',
      backgroundColor: '#4F3052',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <section>
        <ul>
          <li>
            <Link
              className='nav-link-font' to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link className='nav-link-font' to="/newreading">New Reading</Link>
          </li>
          <li>
            <Link className='nav-link-font' to="/profile">Profile</Link>
          </li>
          <li>
            <Link className='nav-link-font' to="/community">Community</Link>
          </li>
        </ul>
        <hr />
        <ul>
          <li>
            <Link className='nav-link-font' to="/browseSpreads">Browse Spreads</Link>
          </li>
          <li>
            <Link className='nav-link-font' to="/browseDecks">Browse Decks</Link>
          </li>
          <li>
            <Link className='nav-link-font' to="/appShop">App Shop</Link>
          </li>
        </ul>
        <hr />
        <ul>
          <li>
            <Link className='nav-link-font' to="/aboutUs">Meet the Team</Link>
          </li>
          <li>
            <Link className='nav-link-font' to="/faqs" >FAQs</Link>
          </li>
          <li>
            <Link className='nav-link-font' to="/contactUs">Contact Us</Link>
          </li>
          <li>
            <Link className='nav-link-font' to="/terms">Terms</Link>
          </li>
          <li>
            <Link className='nav-link-font' to="/privacy">Privacy</Link>
          </li>
        </ul>
        <hr />
      </section>
      <Link className='nav-link-font' to="/"
        style={{
          textDecoration: 'none',
          backgroundColor: 'rgb(168, 148, 103)',
          padding: '10px',
          textAlign: 'center',
          borderRadius: '5px',
          width: '100px',
          marginBottom: '.5rem',
          boxShadow: '1px 2px 5px black'
        }}>
        Logout</Link>
    </nav>

  );
};

export default NavigationLinks;
