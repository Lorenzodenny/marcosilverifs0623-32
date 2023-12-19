import React from "react";
import books from "../Data/books.json"
import Card from 'react-bootstrap/Card';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";


function Books() {
  return (
    <Container>
        <Row>
            {books.fantasy.map((book) => {
                return(
                    <Col key={book.asin}>
                    <Card style={{ height: '70vh', width: '25vh' }}>
                       <Card.Img variant="top" src={book.img} style={{ height: '200px', width: '25vh' }} />
                       <Card.Body>
                       <Card.Title>{book.title}</Card.Title>
                       <Card.Text>
                          <p> Categoria: {book.category}</p>
                          <p> Prezzo: {book.price}</p>
                        </Card.Text>
                        </Card.Body>
                     </Card>
                   </Col>
                )
            })}
           
        </Row>
    </Container>
    
  );
}

export default Books;
