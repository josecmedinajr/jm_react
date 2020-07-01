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
              <img src={email} height="50px" alt="email" className="image"/>
              <h6><b><a href="mailto:jose.c.medina@me.com" target="_blank" className="contactMe">E-mail</a></b></h6>
             </Col>                       
          </Row>
          <br></br>
          <Row className="work">
             <Col>
             <img src={github} height="50px" alt="github" className="image"/>
              <h6><b>View my repos - <a href="https://github.com/josecmedinajr" target="_blank" className="contactMe">GitHub</a></b></h6>
             </Col>              
          </Row>
          <br></br>
          <Row className="work">
             <Col>
              <img src={linkedin} height="50px" alt="linkedin" className="image"/>
              <h6><b>Connect with me - <a href="https://www.linkedin.com/in/josecmedinajr/" target="_blank" className="contactMe">LinkedIn</a></b></h6>
             </Col>               
          </Row>
          <br></br>
          <Row className="work">
             <Col>
             <img src={twitter} height="50px" alt="twitter" />
              <h6><b>Follow me on - <a href="https://twitter.com/JCMLV" target="_blank" className="contactMe">Twitter</a></b></h6>
             </Col>              
          </Row>
            </Container>
        </div>
    )
}

export default Contact;



