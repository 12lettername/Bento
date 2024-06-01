import './App.css';
import React from 'react';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Menu from './components/pages/menu';
import Order from './components/pages/order';
import Contact from './components/pages/contact';
import SignUp from './components/pages/SignUp';
import sushi from './components/pages/sushi';

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
        <Route path='/sushi' Component={sushi} />
        <Route path='/sign-up' Component={SignUp} />
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
