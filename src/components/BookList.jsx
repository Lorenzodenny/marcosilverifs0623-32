import books from "../Data/books.json"
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import SingleBook from "./SingleBook";
import { Form } from "react-bootstrap";
import React from "react";

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {search:""}
    }

    handleInputSearch = (valore) => {
        this.setState({search: valore})
    }

    render() {
        return(
            <Container>
            <Row>
                {books.map((book) => {
                    return(
                        <SingleBook libro = {book} />
                    )
                })}
               
            </Row>
        </Container>
        )
    }
}


export default BookList;