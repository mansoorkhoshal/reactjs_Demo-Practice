import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

const Navbar1 = () => {
    return (
        <>
            <div>
                <Navbar className='bg-primary' data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#home">Card Practice</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Cards</Nav.Link>
                            <Nav.Link href="#pricing">Contact Us</Nav.Link>
                        </Nav>
                        <Button type="submit" className='bg-white text-dark'>Submit</Button>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Navbar1
