
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

function BookCard({ book }) {
    // {
    //     "title": "Harry Potter and the Philosopher's Stone",
    //     "author": "J.K. Rowling",
    //     "published_date": "June 26, 1997"
    // }

    const title = book.title;
    const author= book.author;
    const pubDate = book.published_date;


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg" alt="Card image cap" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>

                    <ListGroup variant="flush">
                        <ListGroup.Item>Author: {author}</ListGroup.Item>
                        <ListGroup.Item>Publication Date: {pubDate}"</ListGroup.Item>
                    </ListGroup>
                </Card.Text>

            </Card.Body>
        </Card>
    );

}

export default BookCard;






