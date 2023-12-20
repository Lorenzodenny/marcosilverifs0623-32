import Card from 'react-bootstrap/Card';
import { Col } from "react-bootstrap";

function SingleBook(props) {
  const {libro} = props;
    return(
        <Col key={libro.asin}>
                    <Card style={{ height: '70vh', width: '25vh' }}>
                       <Card.Img variant="top" src={libro.img} style={{ height: '200px', width: '25vh' }} />
                       <Card.Body>
                       <Card.Title>{libro.title}</Card.Title>
                       <Card.Text>
                          <p> Categoria: {libro.category}</p>
                          <p> Prezzo: {libro.price}</p>
                        </Card.Text>
                        </Card.Body>
                     </Card>
                   </Col>
    )
}

export default SingleBook;