import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <main className='mx-3'>
      <Outlet />
    </main>
    </>
  );
};

export default App;
