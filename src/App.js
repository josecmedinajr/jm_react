import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import MyPortfolio from './pages/MyPortfolio.js';
import ContactMe from './pages/ContactMe.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  return (   
   <Router>
      <div>
        <Navigation />  
        <Switch>  
        <Route exact path="/portfolio" component={MyPortfolio} />
        <Route exact path="/contact" component={ContactMe} />
        <Route component={Home} />
        </Switch>    
      </div>
        <Footer />
   </Router>
  )   
}  
export default App;
