// import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Outlet } from 'react-router-dom';

// function App() {
//   return (
//     <>
//       <main className='mx-3'>
//         <Outlet />
//       </main>
//     </>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import AppRouter from './routers/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {
        const checkLoginStatus = async () => {
            const loggedIn = await AuthService.LoggedIn();
            setIsLoggedIn(loggedIn);
        };

        checkLoginStatus();
    }, []);

  return (
    <BrowserRouter>
      <AppRouter isLoggedIn={isLoggedIn} />
    </BrowserRouter>
  );
};

export default App;