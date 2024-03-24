import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <main className='mx-3'>
      <Outlet />
    </main>
    </>
  );
};

export default App;

