import React from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

 
function Footer() {
    return (
        <Navbar  sticky="bottom" className="bottom">
          <Navbar.Brand id="footer" href="#"> © 2020 J.C.M.</Navbar.Brand>
        </Navbar>

    )
}

export default Footer;