import React from 'react';
import Darkmode from 'darkmode-js';
import { Container, Row, Col } from 'react-bootstrap';
import github from '../images/github.png';
import email from '../images/email.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';

new Darkmode().showWidget();

function Contact(){
    return(
        <div>
         <Container fluid>
         <h2 className ="title">Contact</h2>
          <Row className="work">
             <Col>
              <h5 className="work"> I'm available for work opportunities, part-time and full-time, projects - and to play tennis also - please drop me a note!</h5>
             </Col>              
          </Row>
          <br></br>
          <Row className="work">
             <Col>
              <img src={email} height="50px" alt="email"/>
              <h6><b>Email: jose.c.medina@me.com</b></h6>
             </Col>                       
          </Row>
          <br></br>
          <Row className="work">
             <Col>
             <img src={github} height="50px" alt="github"/>
              <h6><b>GitHub repository: https://github.com/josecmedinajr</b></h6>
             </Col>              
          </Row>
          <br></br>
          <Row className="work">
             <Col>
              <img src={linkedin} height="50px" alt="linkedin"/>
              <h6><b>LinkedIn: https://www.linkedin.com/in/josecmedinajr/</b></h6>
             </Col>              
          </Row>
          <br></br>
          <Row className="work">
             <Col>
             <img src={twitter} height="50px" alt="twitter"/>
              <h6><b>Twitter: https://twitter.com/JCMLV</b></h6>
             </Col>              
          </Row>
            </Container>
        </div>
    )
}

export default Contact;



