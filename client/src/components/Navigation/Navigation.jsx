import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg" >
            <Container fluid>
                <Link to='/'>
                    <Navbar.Brand as="div"> <img src='../../logo.png' height={'50'} width={'50'} /></Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <Link to="/hotels">
                            <Nav.Link as='div'>Hotels</Nav.Link>
                        </Link>
                        <Link to="/houses">
                            <Nav.Link as="div">Houses</Nav.Link>
                        </Link>
                        <Link to="/perfil">
                            <Nav.Link as="div">Perfil</Nav.Link>
                        </Link>
                    </Nav>
                    <Form className="d-flex me-5">
                        <NavDropdown title="Init Sesion" id="navbarScrollingDropdown">
                            <Link to="/acceder">
                                <NavDropdown.Item as="div">Log In</NavDropdown.Item>
                            </Link>
                            <Link to="/logOut">
                                <NavDropdown.Item as="div">Log Out</NavDropdown.Item>
                            </Link>
                            <NavDropdown.Divider />
                            <Link to="/registro">
                                <NavDropdown.Item as="div">Sign Up</NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
export default Navigation