import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import photos from '../images/JosePhotos.jpg';



function Home () {
    return (
       <div>
         <Container>      
         <Row>
         <img className="photos" src={photos} alt=""></img>  
          </Row>         
          <Row className="top-paragraph"> 
          
            <Col>
              Hello I’m Jose!  I am a web developer who recently graduated from the University of Miami’s Full Stack Web Development Program. My goal is to design aesthetically pleasing and functional web apps. I have published large-scale web sites, such as the USTA Florida (United States Tennis Association) and the Miami Open Tennis tournament web site for many years.
            </Col>
          </Row>
          <Row className="middle-paragraph">
            <Col>
             I am excited to embark on a new career where I will combine my passion for the latest technologies along with my goal of helping people through the use of technology.
            </Col>
          </Row>
          <Row>
            <Col>
              My motivation comes from my amazing family, my beautiful wife Lily, and our adorable daughter, Massiel. 
            </Col>
          </Row>
         </Container>
        </div>
    )
}

export default Home;