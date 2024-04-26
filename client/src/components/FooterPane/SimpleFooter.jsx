const SimpleFooter = () => {


    return (
        <footer style={{ width: '100%', backgroundColor: '#242424' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-start', width: "40%", margin: 'auto' }}>
                <ul style={{ listStyleType: 'none', padding: '0 4rem 0 2rem', borderRight: '1px solid #cccccc' }}>
                    <li style={{ marginBottom: '0.1rem' }}>
                        {/* <Link to="/aboutUs" style={{ textDecoration: 'none', color: '#cccccc' }}>Meet the Team</Link> */}
                    </li>
                    <li style={{ marginBottom: '0.1rem' }}>
                        {/* <Link to="/contactUs" style={{ textDecoration: 'none', color: '#cccccc' }}>Contact Us</Link> */}
                    </li>
                </ul>
                <ul style={ { listStyleType: 'none', padding: '0 4rem 0 2rem' } }>
                    <li style={ { marginBottom: '0.1rem' } }>
                        {/* <Link to="/terms" style={ { textDecoration: 'none', color: '#cccccc' } }>Terms</Link> */}
                    </li>
                    <li style={ { marginBottom: '0.1rem' } }>
                        {/* <Link to="/privacy" style={ { textDecoration: 'none', color: '#cccccc' } }>Privacy</Link> */}
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default SimpleFooter;
