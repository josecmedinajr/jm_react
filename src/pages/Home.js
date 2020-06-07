import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Darkmode from 'darkmode-js';

new Darkmode().showWidget();


function Home () {
    return (
       <div>
         <Container fluid>
          <Row>
            
            <Col>
              Hello, my name is José C. Medina, Jr., I am a tech savvy Tennis and Marketing Professional. I have worked with numerous CMS (Content Management Systems) throughout the past 15 years. I worked for the USTA (United States Tennis Association) Florida Section for many years as the Web Site Coordinator and provided IT support as well. Throughout my tenure at the USTA I gained invaluable experience in the web publishing world. More recently, I have been the Web Editor of MiamiOpen.com for the Miami Open tennis tournament that is held yearly in March in the Miami area. I have been the editor for the Miami Open for the 2016, 2017, 2018 and 2019 tournaments. It has been a thrill to work in tennis which is my passion, along with managing the day-to-day publishing needs of one of the biggest and most important tennis tournaments in the world.
            </Col>
          </Row><br></br>
          <Row>
            <Col>
              I'm bilingual, having been born in the Andes Mountains city of La Oroya, Perú. As you can imagine, I'm an avid tennis …and soccer fan. Let's go FC Barcelona, or as they say in Cataluña - Visca el Barça. Having been around the tennis industry for a while, I have met quite a few tennis playing professionals over the years. In fact, I'm an amateur sports action photographer, please visit my Instagram page to view my tennis images from different tournaments.
            </Col>
          </Row><br></br>
          <Row>
            <Col>
              My motivation comes from my amazing family, my beautiful wife Lily, and our adorable daughter, Massiel. I decided to enroll in the University of Miami's Coding Boot Camp to gain deep knowledge of all the aspects of web development and will become a Full Stack Web Developer by June 2020.
            </Col>
          </Row>
         </Container>
        </div>
    )
}

export default Home;