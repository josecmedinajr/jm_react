import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation () {
    return (
    <Navbar id="navmenu" expand="lg">
    <Navbar.Brand id="jcm" href="#home">José Carlos Medina</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav id="nav-items" className="mr-auto">
        <Nav.Link id="link-text" href="/">Home</Nav.Link>
        <Nav.Link id="link-text" href="/Portfolio">Portfolio</Nav.Link>
        <Nav.Link id="link-text" href="/contact">Contact</Nav.Link>        
      </Nav>     
    </Navbar.Collapse>
    </Navbar>  
    )
}

export default Navigation;