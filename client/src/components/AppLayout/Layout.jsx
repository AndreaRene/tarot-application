import PropTypes from 'prop-types';
import Header from '../AppElements/HeaderContainer';
import Aside from '../AppElements/AsideContainer';
import Main from '../AppElements/MainContainer';
import Nav from '../AppElements/NavContainer';
import Footer from '../AppElements/FooterContainer';

const Layout = ({ content }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header content={content} />
            <div style={{ display: 'flex', flex: 1 }}>
                <Aside content={content} style={{ height: '100%' }} />
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <Main content={content} style={{ flex: 1 }} />
                    <Footer content={content} />
                </div>
                <Nav content={content} style={{ height: '100%' }} />
            </div>
        </div>
    );
};

Layout.propTypes = {
    content: PropTypes.string.isRequired, 
};

export default Layout;
