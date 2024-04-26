import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/AppElements/HeaderContainer';
import Aside from './components/AppElements/AsideContainer';
import Main from './components/AppElements/MainContainer';
import Nav from './components/AppElements/NavContainer';
import Footer from './components/AppElements/FooterContainer';

const App = () => (
  <Router>
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
        <section style={{ display: 'flex', flexGrow: 1 }}> 
        <Aside /> 
        <Main />
        <Nav />
      </section>
      <Footer />
    </div>
  </Router>
);

export default App;