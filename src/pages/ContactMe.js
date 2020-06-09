import React from 'react';
import Darkmode from 'darkmode-js';
import { Container, Row, Col } from 'react-bootstrap';

new Darkmode().showWidget();

function Contact(){
    return(
        <div>
         <Container fluid>
         <h2 className ="title">Contact</h2>
          <Row className="work">
             <Col>
              <h5 className="work"> I'm available for projects, work opportunities - part-time and full-time - and to play tennis also - please drop me a note!</h5>
             </Col>              
          </Row>
          <Row className="work">
             <Col>
              <h6>Email: jose.c.medina@me.com</h6>
             </Col>              
          </Row>
          <Row className="work">
             <Col>
              <h6>Check out my GitHub profile: https://github.com/josecmedinajr</h6>
             </Col>              
          </Row>
          <Row className="work">
             <Col>
              <h6>Connect with me on LinkedIn: https://www.linkedin.com/in/josecmedinajr/</h6>
             </Col>              
          </Row>
          <Row className="work">
             <Col>
              <h6>Follow me on Twitter: https://twitter.com/JCMLV</h6>
             </Col>              
          </Row>
            </Container>
        </div>
    )
}

export default Contact;



