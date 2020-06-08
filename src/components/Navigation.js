import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navigation () {
    return (
    <Navbar id="navmenu" expand="lg">
    <Navbar.Brand id="jcm" href="#home">José Carlos Medina</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav id="nav-items" className="mr-auto">
       <li><Link id="link-text" to="/">Home</Link></li>
       <li><Link id="link-text" to="Portfolio">Portfolio</Link></li> 
       <li><Link id="link-text" to="contact">Contact</Link></li>  
      </Nav>     
    </Navbar.Collapse>
    </Navbar>  
    )
}

export default Navigation;