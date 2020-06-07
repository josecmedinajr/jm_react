import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from './components/Navigation.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Portfolio from './pages/Portfolio.js';
import Contact from './pages/Contact.js';


import Darkmode from 'darkmode-js';


new Darkmode().showWidget();

function App () {
  return (
    <Router>
      <div>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </div>
      <Footer />
    </Router>
  )   
}
    



export default App;