import { useState } from "react";
import BookCard from "./BookCard";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect } from "react";
import { Container } from "react-bootstrap";


function BookDeck2() {
    const initialState= [
        {
            "title": "The Night Circus",
            "author": "Erin Morgenstern",
            "published_date": "September 13, 2011"
        },
        {
            "title": "The Silent Patient",
            "author": "Alex Michaelides",
            "published_date": "February 5, 2019"
        },
        {
            "title": "Where the Crawdads Sing",
            "author": "Delia Owens",
            "published_date": "August 14, 2018"
        },
        {
            "title": "Educated: A Memoir",
            "author": "Tara Westover",
            "published_date": "February 20, 2018"
        },
        {
            "title": "Circe",
            "author": "Madeline Miller",
            "published_date": "April 10, 2018"
        }
    ]

    const [books, setBooks] = useState(initialState);

    useEffect(() => {
        console.log("No book state here")
    }, []);

    return (
        <Container>
            <Row xs={1} md={3} className="g-4">
                {books.map((book, idx) => (
                    <Col key={idx} md>
                        <BookCard book={book} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default BookDeck2;