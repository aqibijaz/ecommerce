// Import Packages
import React from 'react';
import {  Switch, Route } from 'react-router-dom';


// Css Files
import './App.css';

// Import Pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';


function App() {
  return (
    <div>
      <Header />
      <Switch >
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
// Section 6: Lecture 1: 0:00 