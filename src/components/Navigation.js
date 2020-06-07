import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Darkmode from 'darkmode-js';

new Darkmode().showWidget();

function Navigation () {
    return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">José Carlos Medina</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>        
      </Nav>     
    </Navbar.Collapse>
    </Navbar>  
    )
}

export default Navigation;