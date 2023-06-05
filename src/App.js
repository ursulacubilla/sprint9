import React from 'react';
// import './App.css';
import { Application } from './Components/Application';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Episode } from './Components/Episode';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      
      </header>
        <Routes>
        <Route path='Aplication' element={<Application />} /> 
        <Route path='Episode' element={<Episode />} /> 
        <Route path='Login' element={<Login />} /> 
        <Route path='Register' element={<Register />} /> 
        </Routes>
       
    </div>
  );
}

export default App;
