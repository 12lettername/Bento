import './App.css';
import React from 'react';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Menu from './components/pages/menu';
import Order from './components/pages/order';
import Contact from './components/pages/contact';
import buy from './components/pages/buy';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/menu'  Component={Menu} />
        <Route path='/order'  Component={Order} />
        <Route path='/contact-us'  Component={Contact} />
        <Route path='/buy/:item' Component={buy} />
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
