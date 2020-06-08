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
              <b>Hello I’m Jose!</b>  I am a web developer who recently graduated from the <b>University of Miami's Full Stack Web Development Bootcamp</b>. My goal is to design aesthetically pleasing and functional web apps. I have published large-scale web sites, such as the <b>USTA Florida (United States Tennis Association)</b> and the <b>Miami Open Tennis</b> tournament web site for many years.
            </Col>
          </Row>
          <Row className="middle-paragraph">
            <Col>
             I am excited to embark on a new career where I will combine my passion for the latest technologies along with my goal of helping people through the use of technology.
            </Col>
          </Row>
          <Row className="bottom-paragraph">
            <Col>
              As you can tell, I am a <b>photography enthusiast</b>. My ideal scenario would be to work on the tennis industry, and take tennis action tennis shots on the side.
            </Col>
          </Row>
          <Row>
            <Col>
              My motivation comes from my <b>amazing family</b>, my beautiful wife <b>Lily</b>, and our adorable daughter, <b>Massiel</b>. 
            </Col>
          </Row>
         </Container>
        </div>
    )
}

export default Home;