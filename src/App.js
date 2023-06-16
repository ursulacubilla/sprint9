import React from 'react';
// import './App.css';
import { Application } from './Components/Aplication/Application';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';
import { Episode } from './Components/Episode/Episodes';
import { Welcome } from './Components/Welcome/Welcome';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      
      </header>
        <Routes>
        <Route path='Aplication' element={<Application />} /> 
        <Route path='Welcome' element={<Welcome />} /> 
        <Route path='Login' element={<Login />} /> 
        <Route path='Register' element={<Register />} /> 
        <Route path='episodes/:characterId' element={<Episode />} /> 
        </Routes>
       
    </div>
  );
}

export default App;
