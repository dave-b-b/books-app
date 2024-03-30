import { useState, Component } from "react";
import BookCard from "./BookCard";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect } from "react";
import { Container } from "react-bootstrap";


function BookDeck() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const bookState= [
            {
                "title": "The Great Gatsby",
                "author": "F. Scott Fitzgerald",
                "published_date": "April 10, 1925"
            },
            {
                "title": "To Kill a Mockingbird",
                "author": "Harper Lee",
                "published_date": "July 11, 1960"
            },
            {
                "title": "1984",
                "author": "George Orwell",
                "published_date": "June 8, 1949"
            },
            {
                "title": "Pride and Prejudice",
                "author": "Jane Austen",
                "published_date": "January 28, 1813"
            },
            {
                "title": "Harry Potter and the Philosopher's Stone",
                "author": "J.K. Rowling",
                "published_date": "June 26, 1997"
            }
        ]
        setBooks(bookState)
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

export default BookDeck;