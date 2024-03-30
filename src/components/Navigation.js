import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navigation() {
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                    <Container fluid>
                        <Navbar.Brand href="/">Dave's Book App Navigation Bar</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Book App Options
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/deck">Cool Old Books</Nav.Link>
                                    <Nav.Link href="/deck2">Cool New Books</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );

    // return (
    //     <div className="d-flex align-items-center">
    //         <ul className="nav my-4">
    //             <li className="nav-item">
    //                 <Link to="/">Home</Link>
    //             </li>
    //             <li className="nav-item">
    //                 <Link to="/deck">Agents</Link>
    //             </li>
    //             <li className="nav-item">
    //                 <Link to="/agents/add">Add Agent</Link>
    //             </li>
    //         </ul>

    //     </div>
    // );
}

export default Navigation;