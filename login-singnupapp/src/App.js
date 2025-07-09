import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate} from 'react-router-dom';
import React from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';

function AppContent() {
  const location = useLocation();
  const navLink = location.pathname === '/login' ? (<Link to= '/signup'>Signup</Link>) : location.pathname === '/signup' ? (<Link to = '/login'>Login</Link>) : null;
  return (
     <div className="app-wrapper">
        <h1 className="main-title">Welcome to React Auth</h1>
      <nav>
        {navLink}
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

function App(){
  return(
    <Router>
      <AppContent/>
    </Router>
  )
}

export default App;