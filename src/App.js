import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from './components/Navigation.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import MyPortfolio from './pages/MyPortfolio.js';
import ContactMe from './pages/ContactMe.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Darkmode from 'darkmode-js';
// new Darkmode().showWidget();

function App () {
  return (
    <Router>
      <div>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={MyPortfolio} />
        <Route exact path="/contact" component={ContactMe} />
      </div>
      <Footer />
    </Router>
  )   
}  
export default App;
