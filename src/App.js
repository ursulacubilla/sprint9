import React, { useState, useEffect } from 'react';
import { Application } from './Components/Aplication/Application';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';
import { Episode } from './Components/Episode/Episodes';
import { Welcome } from './Components/Welcome/Welcome';
import { AuthenticationContext, Authentication } from './authentication';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const localStorageIsLoggedIn = localStorage.getItem('login');
    setIsLoggedIn(localStorageIsLoggedIn === 'true');
  }, []);

  const logIn = () => {
    localStorage.setItem('login', true);
    setIsLoggedIn(true);
  };

  const logOut = () => {
    localStorage.removeItem("login");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <AuthenticationContext.Provider value={{
      logIn,
      logOut,
      isLoggedIn,
    }}>

        <Header />

      <Routes>
        <Route path='Aplication' element={
          <Authentication>
            <Application />
          </Authentication>
        } />
        <Route path='/' element={<Welcome />} />
        <Route path='Login' element={<Login />} />
        <Route path='Register' element={<Register />} />
        <Route path='episodes/:characterId' element={
          <Authentication>
            <Episode />
          </Authentication>
        } />
      </Routes>


    </AuthenticationContext.Provider>
  );
}

export default App;
