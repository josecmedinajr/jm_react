import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import dayplanner from '../images/DayPlanner_portfolio.jpg';
import eventsplash from '../images/EventSplash_Portfolio.jpg';
import swapaid from '../images/swapAid_Portfolio.jpg';
import tennis from '../images/tennisImage_portfolio.jpg';
import watercooler from '../images/water-cooler_portfolio.jpg';
import weather from '../images/Weather_Dashboard_Portfolio.jpg';

function Portfolio() {
    return(
     <div>
       
     <Container fluid>
     <Row>
     <h5 class="my-portfolio">Projects developed while enrolled at the <b>University of Miami's Full Stack Web Development Bootcamp</b> - Go Canes!</h5>
     </Row>

     <Row id="portfolio-top">
      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={watercooler} />
     <Card.Body>
     <Card.Title>Water Cooler - Final Project</Card.Title>
     <Card.Text>
      When your thirst for new Media!
     </Card.Text>
     <Button id="portfolio-btn"><a href="">Coming Soon!</a></Button>
     </Card.Body>
     </Card>
     </Col>

     <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={swapaid} />
     <Card.Body>
     <Card.Title>swapAid - Project 2</Card.Title>
     <Card.Text>
      Swap items - it's free!
     </Card.Text>
     <Button id="portfolio-btn"><a href="https://shrouded-shelf-73008.herokuapp.com/" target="_blank">Start swapping!</a></Button>
     </Card.Body>
     </Card>
     </Col>

     <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={tennis} />
     <Card.Body>
     <Card.Title>Tennis Image</Card.Title>
     <Card.Text>
      Do you like actions shots?
     </Card.Text>
     <Button id="portfolio-btn"><a href="https://josecmedinajr.github.io/tennis_image/" target="_blank">View my Tennis Images!</a></Button>
     </Card.Body>
     </Card>
     </Col>
     </Row>

     <Row>
      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={eventsplash} />
     <Card.Body>
     <Card.Title>Event Splash - Project 1</Card.Title>
     <Card.Text>
      Looking for something to do?
     </Card.Text>
     <Button id="portfolio-btn"><a href="https://ezequiell323.github.io/groupproject01/" target="_blank">Find Events Now!</a></Button>
     </Card.Body>
     </Card>
     </Col>

     <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={weather} />
     <Card.Body>
     <Card.Title>Weather Dashboard</Card.Title>
     <Card.Text>
      Rain or Shine?
     </Card.Text>
     <Button id="portfolio-btn"><a href="https://josecmedinajr.github.io/Weather_Dashboard/" target="_blank">Weather Near You!</a></Button>
     </Card.Body>
     </Card>
     </Col>

     <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={dayplanner} />
     <Card.Body>
     <Card.Title>Day Planner</Card.Title>
     <Card.Text>
      Keep your day organized!
     </Card.Text>
     <Button id="portfolio-btn"><a href="https://josecmedinajr.github.io/DayPlanner/" target="_blank">Plan your day here!</a></Button>
     </Card.Body>
     </Card>
     </Col>

     </Row>

     </Container>
        </div>
    )
}

export default Portfolio;