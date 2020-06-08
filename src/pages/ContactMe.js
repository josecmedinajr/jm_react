import React from 'react';
import Darkmode from 'darkmode-js';
import { Container } from 'react-bootstrap';

new Darkmode().showWidget();

function Contact(){
    return(
        <div>
            <Container fluid>
            <h5>I'm available for projects, work and to play tennis also - please connect with me!</h5>
            <h5>Email: jose.c.medina@me.com</h5>
            <p>Follow me on GitHub: </p>
            <p>Connect via LinkedIn: </p>
            <p>View my Resume: </p>
            <p>Follow me on Twitter: </p>
            </Container>
        </div>

    )

}

export default Contact;



