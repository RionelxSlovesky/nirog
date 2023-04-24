import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const PNavbar = () => {
    return (
        <div>
            <Navbar bg="light" variant="primary">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Nirog.AI</Navbar.Brand>
                    <Nav className="me-auto">
                        
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                    </Nav>
                    
                </Container>
            </Navbar>
        </div>
    );
};

export default PNavbar;