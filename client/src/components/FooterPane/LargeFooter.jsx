import { Link } from 'react-router-dom'

const LargeFooter = () => {
    return (
        <footer style={{ width: '100%', backgroundColor: '#242424' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-start', width: "40%", margin: 'auto' }}>
                {/* <ul style={ { listStyleType: 'none', padding: '0 4rem 0 0', borderRight: '1px solid #cccccc' } }>
                    <li style={ { marginBottom: '0.1rem' } }>
                        <Link to="/dashboard" style={ { textDecoration: 'none', color: '#cccccc' } }>Dashboard</Link>
                    </li>
                    <li style={ { marginBottom: '0.1rem' } }>
                        <Link to="/settings" style={ { textDecoration: 'none', color: '#cccccc' } }>settings</Link>
                    </li>
                    <li>
                        <Link to="/community" style={ { textDecoration: 'none', color: '#cccccc' } }>Community</Link>
                    </li>
                </ul> */}
                <ul style={{ listStyleType: 'none', padding: '0 4rem 0 0', borderRight: '1px solid #cccccc' }}>
                    <li style={{ marginBottom: '0.1rem' }}>
                        <Link to="/browseSpreads" style={{ textDecoration: 'none', color: '#cccccc' }}>Browse Spreads</Link>
                    </li>
                    <li style={{ marginBottom: '0.1rem' }}>
                        <Link to="/browseDecks" style={{ textDecoration: 'none', color: '#cccccc' }}>Browse Decks</Link>
                    </li>
                    <li style={{ marginBottom: '0.1rem' }}>
                        <Link to="/appShop" style={{ textDecoration: 'none', color: '#cccccc' }}>App Shop</Link>
                    </li>
                </ul>
                <ul style={{ listStyleType: 'none', padding: '0 4rem 0 2rem', borderRight: '1px solid #cccccc' }}>
                    <li style={{ marginBottom: '0.1rem' }}>
                        <Link to="/aboutUs" style={{ textDecoration: 'none', color: '#cccccc' }}>Meet the Team</Link>
                    </li>
                    <li style={{ marginBottom: '0.1rem' }}>
                        <Link to="/contactUs" style={{ textDecoration: 'none', color: '#cccccc' }}>Contact Us</Link>
                    </li>
                    <li style={{ marginBottom: '0.1rem' }}>
                        <Link to="/faqs" style={{ textDecoration: 'none', color: '#cccccc' }}>FAQs</Link>
                    </li>
                </ul>
                <ul style={{ listStyleType: 'none', padding: '0 4rem 0 2rem' }}>
                    <li style={{ marginBottom: '0.1rem' }}>
                        <Link to="/terms" style={{ textDecoration: 'none', color: '#cccccc' }}>Terms</Link>
                    </li>
                    <li style={{ marginBottom: '0.1rem' }}>
                        <Link to="/privacy" style={{ textDecoration: 'none', color: '#cccccc' }}>Privacy</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default LargeFooter;

