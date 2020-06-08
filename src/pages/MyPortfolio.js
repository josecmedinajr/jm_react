import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

// import Darkmode from 'darkmode-js';

// new Darkmode().showWidget();


function Portfolio() {
    return(
     <div>
       <h5>Please take a look at my Projects</h5>
     <Container fluid>
      <Row>
      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
     <Card.Body>
     <Card.Title>Card Title</Card.Title>
     <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
     </Card.Text>
     <Button variant="primary">Go somewhere</Button>
     </Card.Body>
     </Card>
     </Col>

     <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
     <Card.Body>
     <Card.Title>Card Title</Card.Title>
     <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
     </Card.Text>
     <Button variant="primary">Go somewhere</Button>
     </Card.Body>
     </Card>
     </Col>

     <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
     <Card.Body>
     <Card.Title>Card Title</Card.Title>
     <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
     </Card.Text>
     <Button variant="primary">Go somewhere</Button>
     </Card.Body>
     </Card>
     </Col>

     </Row>

     <Row>
      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
     <Card.Body>
     <Card.Title>Card Title</Card.Title>
     <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
     </Card.Text>
     <Button variant="primary">Go somewhere</Button>
     </Card.Body>
     </Card>
     </Col>

     <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
     <Card.Body>
     <Card.Title>Card Title</Card.Title>
     <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
     </Card.Text>
     <Button variant="primary">Go somewhere</Button>
     </Card.Body>
     </Card>
     </Col>

     <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
     <Card.Body>
     <Card.Title>Card Title</Card.Title>
     <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
     </Card.Text>
     <Button variant="primary">Go somewhere</Button>
     </Card.Body>
     </Card>
     </Col>

     </Row>

     </Container>
        </div>
    )
}

export default Portfolio;