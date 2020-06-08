import React from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Darkmode from 'darkmode-js';

new Darkmode().showWidget();
 
function Footer() {
    return (
        <Navbar  sticky="bottom" className="bottom">
          <Navbar.Brand href="#" className="bottom"> © 2020 José Carlos Medina</Navbar.Brand>
        </Navbar>

    )
}

export default Footer;